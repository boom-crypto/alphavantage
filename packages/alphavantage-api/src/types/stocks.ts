import { OutputSize, DataType, Interval } from './common';

export interface IntradayParams {
  symbol: string;
  interval: Exclude<Interval, 'daily' | 'weekly' | 'monthly'>;
  adjusted?: boolean;
  extended_hours?: boolean;
  month?: string; // YYYY-MM
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface DailyParams {
  symbol: string;
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface QuoteParams {
  symbol: string;
  datatype?: DataType;
}

export interface SearchParams {
  keywords: string;
  datatype?: DataType;
}

// ... 其他股票API参数类型 