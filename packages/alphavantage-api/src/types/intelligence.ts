import { DataType } from './common';

export interface NewsSentimentParams {
  tickers?: string;
  topics?: string;
  time_from?: string; // YYYYMMDDThhmm
  time_to?: string;   // YYYYMMDDThhmm
  sort?: 'LATEST' | 'EARLIEST';
  limit?: number;
  datatype?: DataType;
}

export interface EarningsCallTranscriptParams {
  symbol: string;
  year: number;
  quarter: number;
  datatype?: DataType;
}
// ... 其他智能API参数类型 