import { OutputSize, DataType, IntradayInterval, BaseMetaData, TimeSeriesData, AdjustedTimeSeriesData } from './common';

// Input parameter types
export interface IntradayParams {
  symbol: string;
  interval: IntradayInterval;
  adjusted?: boolean;
  extended_hours?: boolean;
  month?: string; // YYYY-MM format
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

// Response types
export interface IntradayMetaData extends BaseMetaData {
  '4. Interval': string;
  '5. Output Size': string;
}

export interface IntradayResponse {
  'Meta Data': IntradayMetaData;
  'Time Series (1min)': Record<string, TimeSeriesData>;
  'Time Series (5min)': Record<string, TimeSeriesData>;
  'Time Series (15min)': Record<string, TimeSeriesData>;
  'Time Series (30min)': Record<string, TimeSeriesData>;
  'Time Series (60min)': Record<string, TimeSeriesData>;
}

export interface DailyMetaData extends BaseMetaData {
  '4. Output Size': string;
}

export interface DailyResponse {
  'Meta Data': DailyMetaData;
  'Time Series (Daily)': Record<string, TimeSeriesData>;
}

export interface DailyAdjustedResponse {
  'Meta Data': DailyMetaData;
  'Time Series (Daily)': Record<string, AdjustedTimeSeriesData>;
}

export interface WeeklyResponse {
  'Meta Data': BaseMetaData;
  'Weekly Time Series': Record<string, TimeSeriesData>;
}

export interface WeeklyAdjustedResponse {
  'Meta Data': BaseMetaData;
  'Weekly Adjusted Time Series': Record<string, AdjustedTimeSeriesData>;
}

export interface MonthlyResponse {
  'Meta Data': BaseMetaData;
  'Monthly Time Series': Record<string, TimeSeriesData>;
}

export interface MonthlyAdjustedResponse {
  'Meta Data': BaseMetaData;
  'Monthly Adjusted Time Series': Record<string, AdjustedTimeSeriesData>;
}

export interface GlobalQuoteData {
  '01. symbol': string;
  '02. open': string;
  '03. high': string;
  '04. low': string;
  '05. price': string;
  '06. volume': string;
  '07. latest trading day': string;
  '08. previous close': string;
  '09. change': string;
  '10. change percent': string;
}

export interface GlobalQuoteResponse {
  'Global Quote': GlobalQuoteData;
}

export interface SearchMatch {
  '1. symbol': string;
  '2. name': string;
  '3. type': string;
  '4. region': string;
  '5. marketOpen': string;
  '6. marketClose': string;
  '7. timezone': string;
  '8. currency': string;
  '9. matchScore': string;
}

export interface SearchResponse {
  bestMatches: SearchMatch[];
} 