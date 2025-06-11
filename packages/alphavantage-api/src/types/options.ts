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