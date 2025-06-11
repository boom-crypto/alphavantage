import { OutputSize, DataType, Interval } from './common';

export interface ForexIntradayParams {
  from_symbol: string;
  to_symbol: string;
  interval: Exclude<Interval, 'daily' | 'weekly' | 'monthly'>;
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface ForexDailyParams {
  from_symbol: string;
  to_symbol: string;
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface ForexExchangeRateParams {
  from_currency: string;
  to_currency: string;
  datatype?: DataType;
} 