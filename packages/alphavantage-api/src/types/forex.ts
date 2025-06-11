import { OutputSize, DataType, IntradayInterval, ForexTimeSeriesData } from './common';

// Input parameter types
export interface ForexIntradayParams {
  from_symbol: string;
  to_symbol: string;
  interval: IntradayInterval;
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

// Response types
export interface ForexIntradayMetaData {
  '1. Information': string;
  '2. From Symbol': string;
  '3. To Symbol': string;
  '4. Last Refreshed': string;
  '5. Interval': string;
  '6. Output Size': string;
  '7. Time Zone': string;
}

export interface ForexIntradayResponse {
  'Meta Data': ForexIntradayMetaData;
  'Time Series FX (1min)': Record<string, ForexTimeSeriesData>;
  'Time Series FX (5min)': Record<string, ForexTimeSeriesData>;
  'Time Series FX (15min)': Record<string, ForexTimeSeriesData>;
  'Time Series FX (30min)': Record<string, ForexTimeSeriesData>;
  'Time Series FX (60min)': Record<string, ForexTimeSeriesData>;
}

export interface ForexDailyMetaData {
  '1. Information': string;
  '2. From Symbol': string;
  '3. To Symbol': string;
  '4. Output Size': string;
  '5. Last Refreshed': string;
  '6. Time Zone': string;
}

export interface ForexDailyResponse {
  'Meta Data': ForexDailyMetaData;
  'Time Series FX (Daily)': Record<string, ForexTimeSeriesData>;
}

export interface ForexWeeklyResponse {
  'Meta Data': Omit<ForexDailyMetaData, '4. Output Size'>;
  'Time Series FX (Weekly)': Record<string, ForexTimeSeriesData>;
}

export interface ForexMonthlyResponse {
  'Meta Data': Omit<ForexDailyMetaData, '4. Output Size'>;
  'Time Series FX (Monthly)': Record<string, ForexTimeSeriesData>;
}

export interface ExchangeRateData {
  '1. From_Currency Code': string;
  '2. From_Currency Name': string;
  '3. To_Currency Code': string;
  '4. To_Currency Name': string;
  '5. Exchange Rate': string;
  '6. Last Refreshed': string;
  '7. Time Zone': string;
  '8. Bid Price': string;
  '9. Ask Price': string;
}

export interface ExchangeRateResponse {
  'Realtime Currency Exchange Rate': ExchangeRateData;
} 