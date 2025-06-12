import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { HttpProxyAgent } from 'http-proxy-agent';
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
  private axiosInstance: AxiosInstance;

  constructor(options: AlphaVantageClientOptions) {
    if (!options.apiKey) {
      throw new AlphaVantageError('API key is required');
    }
    
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || 'https://www.alphavantage.co/query';
    this.timeout = options.timeout || 30000; // 30 seconds
    this.retryAttempts = options.retryAttempts || 3;
    this.retryDelay = options.retryDelay || 1000; // 1 second
    
    // Create axios instance with proxy support
    this.axiosInstance = this.createAxiosInstance();
  }

  private createAxiosInstance(): AxiosInstance {
    const config: AxiosRequestConfig = {
      timeout: this.timeout,
      headers: {
        'User-Agent': 'alphavantage-api/1.0.0',
      },
    };

    // Add proxy support if proxy environment variables are set
    const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
    const httpProxy = process.env.HTTP_PROXY || process.env.http_proxy;

    if (httpsProxy) {
      config.httpsAgent = new HttpsProxyAgent(httpsProxy);
      console.error(`[PROXY] Using HTTPS proxy: ${httpsProxy}`);
    }

    if (httpProxy) {
      config.httpAgent = new HttpProxyAgent(httpProxy);
      console.error(`[PROXY] Using HTTP proxy: ${httpProxy}`);
    }

    return axios.create(config);
  }

  async request<T>(params: Record<string, string | number | boolean | undefined>): Promise<T> {
    const requestParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) requestParams.append(key, String(value));
    });
    requestParams.append('apikey', this.apiKey);

    let lastError: Error | undefined;
    for (let attempt = 0; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await this.axiosInstance.get(this.baseUrl, {
          params: Object.fromEntries(requestParams.entries()),
        });

        const data = response.data as any;
        
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
      } catch (error: any) {
        // Handle axios errors
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          lastError = new AlphaVantageAPIError(
            `HTTP ${error.response.status}: ${error.response.statusText}`, 
            error.response.status
          );
        } else if (error.request) {
          // The request was made but no response was received
          lastError = new AlphaVantageNetworkError('No response received from server', error);
        } else if (error instanceof AlphaVantageInvalidSymbolError || 
                   error instanceof AlphaVantageRateLimitError ||
                   error instanceof AlphaVantageAPIError) {
          // Don't retry on certain errors
          throw error;
        } else {
          // Something happened in setting up the request that triggered an Error
          lastError = new AlphaVantageNetworkError('Request setup failed', error);
        }
        
        // If this is the last attempt, throw the error
        if (attempt === this.retryAttempts) {
          break;
        }

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * (attempt + 1)));
      }
    }

    throw new AlphaVantageNetworkError(`Request failed after ${this.retryAttempts + 1} attempts`, lastError || new Error('Unknown error'));
  }
} 