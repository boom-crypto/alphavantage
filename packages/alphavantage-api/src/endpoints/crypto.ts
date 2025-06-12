import { AlphaVantageClient } from '../client';
import { 
  CryptoIntradayParams,
  CryptoTimeSeriesParams,
  CryptoIntradayResponse,
  CryptoDigitalCurrencyResponse,
  CryptoDigitalCurrencyWeeklyResponse,
  CryptoDigitalCurrencyMonthlyResponse
} from '../types/crypto';

export class Crypto {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns intraday time series for any digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed every 5 minutes.
   * 
   * @param params - Parameters including symbol, market, and interval
   * @returns Promise resolving to crypto intraday time series data
   * @example https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=demo
   */
  async intraday(params: CryptoIntradayParams): Promise<CryptoIntradayResponse> {
    return this.client.request({
      function: 'CRYPTO_INTRADAY',
      ...params,
    });
  }

  /**
   * Returns the daily historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC).
   * 
   * @param params - Parameters including symbol and market
   * @returns Promise resolving to crypto daily time series data
   * @example https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=demo
   */
  async daily(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_DAILY',
      ...params,
    });
  }

  /**
   * Returns the weekly historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC).
   * 
   * @param params - Parameters including symbol and market
   * @returns Promise resolving to crypto weekly time series data
   * @example https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=demo
   */
  async weekly(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyWeeklyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_WEEKLY',
      ...params,
    });
  }

  /**
   * Returns the monthly historical time series for a digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed daily at midnight (UTC).
   * 
   * @param params - Parameters including symbol and market
   * @returns Promise resolving to crypto monthly time series data
   * @example https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=demo
   */
  async monthly(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyMonthlyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_MONTHLY',
      ...params,
    });
  }
} 