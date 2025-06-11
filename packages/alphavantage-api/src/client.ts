import fetch from 'node-fetch';

export interface AlphaVantageClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export class AlphaVantageClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: AlphaVantageClientOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || 'https://www.alphavantage.co/query';
  }

  async request<T>(params: Record<string, string | number | boolean | undefined>): Promise<T> {
    const url = new URL(this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
    url.searchParams.append('apikey', this.apiKey);
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Network error: ${res.status}`);
    const data = await res.json() as any;
    if (data['Error Message'] || data['Note'] || data['Information']) {
      throw new Error(data['Error Message'] || data['Note'] || data['Information']);
    }
    return data as T;
  }
} 