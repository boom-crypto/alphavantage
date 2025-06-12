import fetch from 'node-fetch';
import { 
  AlphaVantageError, 
  AlphaVantageAPIError, 
  AlphaVantageRateLimitError, 
  AlphaVantageNetworkError,
  AlphaVantageInvalidSymbolError
} from './errors';

export interface AlphaVantageClientOptions {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export class AlphaVantageClient {
  private apiKey: string;
  private baseUrl: string;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;

  constructor(options: AlphaVantageClientOptions) {
    if (!options.apiKey) {
      throw new AlphaVantageError('API key is required');
    }
    
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || 'https://www.alphavantage.co/query';
    this.timeout = options.timeout || 30000; // 30 seconds
    this.retryAttempts = options.retryAttempts || 3;
    this.retryDelay = options.retryDelay || 1000; // 1 second
  }

  async request<T>(params: Record<string, string | number | boolean | undefined>): Promise<T> {
    const url = new URL(this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
    url.searchParams.append('apikey', this.apiKey);

    let lastError: Error | undefined;
    for (let attempt = 0; attempt <= this.retryAttempts; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const res = await fetch(url.toString(), {
          signal: controller.signal,
          headers: {
            'User-Agent': 'alphavantage-api/1.0.0',
          },
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new AlphaVantageAPIError(`HTTP ${res.status}: ${res.statusText}`, res.status);
        }

        const data = await res.json() as any;
        
        // Handle API-specific errors
        if (data['Error Message']) {
          const errorMessage = data['Error Message'];
          if (errorMessage.includes('Invalid API call') || errorMessage.includes('Invalid symbol')) {
            throw new AlphaVantageInvalidSymbolError(params.symbol as string || 'unknown');
          }
          throw new AlphaVantageAPIError(errorMessage);
        }
        
        if (data['Note']) {
          const note = data['Note'];
          if (note.includes('API rate limit') || note.includes('frequency')) {
            throw new AlphaVantageRateLimitError(note);
          }
          throw new AlphaVantageAPIError(note);
        }
        
        if (data['Information']) {
          throw new AlphaVantageAPIError(data['Information']);
        }

        return data as T;
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on certain errors
        if (error instanceof AlphaVantageInvalidSymbolError || 
            error instanceof AlphaVantageRateLimitError) {
          throw error;
        }
        
        // If this is the last attempt, throw the error
        if (attempt === this.retryAttempts) {
          break;
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * (attempt + 1)));
      }
    }

    // Handle network errors
    if (lastError?.name === 'AbortError') {
      throw new AlphaVantageNetworkError(`Request timeout after ${this.timeout}ms`, lastError);
    }
    
    throw new AlphaVantageNetworkError(`Request failed after ${this.retryAttempts + 1} attempts`, lastError || new Error('Unknown error'));
  }
} 