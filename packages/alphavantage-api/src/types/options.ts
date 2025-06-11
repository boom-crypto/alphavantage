import { DataType } from './common';

export interface RealtimeOptionsParams {
  symbol: string;
  datatype?: DataType;
}

export interface HistoricalOptionsParams {
  symbol: string;
  expiry?: string; // YYYY-MM-DD
  datatype?: DataType;
}

// Response types
export interface OptionContract {
  contractID: string;
  symbol: string;
  expiration: string;
  strike: string;
  type: string;
  last: string;
  mark: string;
  bid: string;
  ask: string;
  volume: string;
  openInterest: string;
  date: string;
  impliedVolatility: string;
  delta: string;
  gamma: string;
  theta: string;
  vega: string;
  rho: string;
}

export interface RealtimeOptionsResponse {
  symbol: string;
  options: OptionContract[];
}

export interface HistoricalOptionsResponse {
  symbol: string;
  expiration: string;
  data: OptionContract[];
} 