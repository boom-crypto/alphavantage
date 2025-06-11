export type OutputSize = 'compact' | 'full';
export type DataType = 'json' | 'csv';
export type Interval = '1min' | '5min' | '15min' | '30min' | '60min' | 'daily' | 'weekly' | 'monthly';
export type IntradayInterval = '1min' | '5min' | '15min' | '30min' | '60min';

export interface ApiError {
  'Error Message'?: string;
  'Note'?: string;
  'Information'?: string;
}

export interface BaseMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '6. Time Zone': string;
}

export interface TimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface ForexTimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
}

export interface AdjustedTimeSeriesData extends TimeSeriesData {
  '5. adjusted close': string;
  '6. volume': string;
  '7. dividend amount': string;
  '8. split coefficient': string;
} 