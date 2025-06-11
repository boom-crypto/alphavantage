import { OutputSize, DataType, Interval } from './common';

export interface CryptoParams {
  symbol: string;
  market: string;
  datatype?: DataType;
}

export interface CryptoTimeSeriesParams extends CryptoParams {
  outputsize?: OutputSize;
} 