import { OutputSize, DataType, IntradayInterval } from './common';

// Input parameter types
export interface CryptoParams {
  symbol: string;
  market: string;
  datatype?: DataType;
}

export interface CryptoIntradayParams extends CryptoParams {
  interval: IntradayInterval;
  outputsize?: OutputSize;
}

export interface CryptoTimeSeriesParams extends CryptoParams {
  outputsize?: OutputSize;
}

// Response types
export interface CryptoMetaData {
  '1. Information': string;
  '2. Digital Currency Code': string;
  '3. Digital Currency Name': string;
  '4. Market Code': string;
  '5. Market Name': string;
  '6. Last Refreshed': string;
  '7. Time Zone': string;
}

export interface CryptoIntradayMetaData extends CryptoMetaData {
  '8. Interval': string;
  '9. Output Size': string;
}

export interface CryptoTimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface CryptoDigitalCurrencyData {
  '1a. open (CNY)': string;
  '1b. open (USD)': string;
  '2a. high (CNY)': string;
  '2b. high (USD)': string;
  '3a. low (CNY)': string;
  '3b. low (USD)': string;
  '4a. close (CNY)': string;
  '4b. close (USD)': string;
  '5. volume': string;
  '6. market cap (USD)': string;
}

export interface CryptoIntradayResponse {
  'Meta Data': CryptoIntradayMetaData;
  'Time Series Crypto (1min)': Record<string, CryptoTimeSeriesData>;
  'Time Series Crypto (5min)': Record<string, CryptoTimeSeriesData>;
  'Time Series Crypto (15min)': Record<string, CryptoTimeSeriesData>;
  'Time Series Crypto (30min)': Record<string, CryptoTimeSeriesData>;
  'Time Series Crypto (60min)': Record<string, CryptoTimeSeriesData>;
}

export interface CryptoDigitalCurrencyResponse {
  'Meta Data': CryptoMetaData;
  'Time Series (Digital Currency Daily)': Record<string, CryptoDigitalCurrencyData>;
}

export interface CryptoDigitalCurrencyWeeklyResponse {
  'Meta Data': CryptoMetaData;
  'Time Series (Digital Currency Weekly)': Record<string, CryptoDigitalCurrencyData>;
}

export interface CryptoDigitalCurrencyMonthlyResponse {
  'Meta Data': CryptoMetaData;
  'Time Series (Digital Currency Monthly)': Record<string, CryptoDigitalCurrencyData>;
} 