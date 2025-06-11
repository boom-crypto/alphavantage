import { DataType, Interval } from './common';

export interface TechnicalIndicatorBase {
  symbol: string;
  interval: Interval;
  time_period?: number;
  series_type?: 'close' | 'open' | 'high' | 'low';
  datatype?: DataType;
}

export interface SMAParams extends TechnicalIndicatorBase {}
export interface EMAParams extends TechnicalIndicatorBase {}
export interface WMAParams extends TechnicalIndicatorBase {}
// ... 其他技术指标参数类型 