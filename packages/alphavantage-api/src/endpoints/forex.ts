import { AlphaVantageClient } from '../client';
import { 
  ForexIntradayParams, 
  ForexDailyParams, 
  ForexExchangeRateParams,
  ForexIntradayResponse,
  ForexDailyResponse,
  ForexWeeklyResponse,
  ForexMonthlyResponse,
  ExchangeRateResponse
} from '../types/forex';

export class Forex {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns intraday time series for any digital currency (e.g., BTC) traded on a specific market (e.g., CNY/Chinese Yuan), refreshed every 5 minutes.
   * 
   * @param params - Parameters including from_symbol, to_symbol, and interval
   * @returns Promise resolving to forex intraday time series data
   * @example https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo
   */
  async intraday(params: ForexIntradayParams): Promise<ForexIntradayResponse> {
    return this.client.request({
      function: 'FX_INTRADAY',
      ...params,
    });
  }

  /**
   * Returns the daily time series for a currency exchange rate pair of your choice.
   * 
   * @param params - Parameters including from_symbol and to_symbol
   * @returns Promise resolving to forex daily time series data
   * @example https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo
   */
  async daily(params: ForexDailyParams): Promise<ForexDailyResponse> {
    return this.client.request({
      function: 'FX_DAILY',
      ...params,
    });
  }

  /**
   * Returns the weekly time series for a currency exchange rate pair of your choice.
   * 
   * @param params - Parameters including from_symbol and to_symbol
   * @returns Promise resolving to forex weekly time series data
   * @example https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=EUR&to_symbol=USD&apikey=demo
   */
  async weekly(params: ForexDailyParams): Promise<ForexWeeklyResponse> {
    return this.client.request({
      function: 'FX_WEEKLY',
      ...params,
    });
  }

  /**
   * Returns the monthly time series for a currency exchange rate pair of your choice.
   * 
   * @param params - Parameters including from_symbol and to_symbol
   * @returns Promise resolving to forex monthly time series data
   * @example https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=demo
   */
  async monthly(params: ForexDailyParams): Promise<ForexMonthlyResponse> {
    return this.client.request({
      function: 'FX_MONTHLY',
      ...params,
    });
  }

  /**
   * Returns the real-time exchange rate for a pair of digital currencies or physical currencies.
   * 
   * @param params - Parameters including from_currency and to_currency
   * @returns Promise resolving to currency exchange rate data
   * @example https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo
   */
  async exchangeRate(params: ForexExchangeRateParams): Promise<ExchangeRateResponse> {
    return this.client.request({
      function: 'CURRENCY_EXCHANGE_RATE',
      ...params,
    });
  }
} 