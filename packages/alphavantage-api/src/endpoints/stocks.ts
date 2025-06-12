import { AlphaVantageClient } from '../client';
import { 
  IntradayParams, 
  DailyParams, 
  QuoteParams, 
  SearchParams,
  IntradayResponse,
  DailyResponse,
  DailyAdjustedResponse,
  WeeklyResponse,
  WeeklyAdjustedResponse,
  MonthlyResponse,
  MonthlyAdjustedResponse,
  GlobalQuoteResponse,
  SearchResponse
} from '../types/stocks';

export class Stocks {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns intraday time series of the equity specified, covering extended trading hours where applicable.
   * 
   * @param params - Parameters including symbol and interval
   * @returns Promise resolving to intraday time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo
   */
  async intraday(params: IntradayParams): Promise<IntradayResponse> {
    return this.client.request({
      function: 'TIME_SERIES_INTRADAY',
      ...params,
    });
  }

  /**
   * Returns raw (as-traded) daily time series values for the equity specified.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to daily time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
   */
  async daily(params: DailyParams): Promise<DailyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_DAILY',
      ...params,
    });
  }

  /**
   * Returns raw (as-traded) daily time series values for the equity specified, adjusted for splits and dividends.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to daily adjusted time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo
   */
  async dailyAdjusted(params: DailyParams): Promise<DailyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_DAILY_ADJUSTED',
      ...params,
    });
  }

  /**
   * Returns weekly time series of the equity specified.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to weekly time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo
   */
  async weekly(params: DailyParams): Promise<WeeklyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY',
      ...params,
    });
  }

  /**
   * Returns weekly adjusted time series of the equity specified, adjusted for splits and dividends.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to weekly adjusted time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo
   */
  async weeklyAdjusted(params: DailyParams): Promise<WeeklyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY_ADJUSTED',
      ...params,
    });
  }

  /**
   * Returns monthly time series of the equity specified.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to monthly time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo
   */
  async monthly(params: DailyParams): Promise<MonthlyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY',
      ...params,
    });
  }

  /**
   * Returns monthly adjusted time series of the equity specified, adjusted for splits and dividends.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to monthly adjusted time series data
   * @example https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo
   */
  async monthlyAdjusted(params: DailyParams): Promise<MonthlyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY_ADJUSTED',
      ...params,
    });
  }

  /**
   * Returns the latest price and volume information for a security of your choice.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to global quote data
   * @example https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
   */
  async quote(params: QuoteParams): Promise<GlobalQuoteResponse> {
    return this.client.request({
      function: 'GLOBAL_QUOTE',
      ...params,
    });
  }

  /**
   * Returns the best-matching symbols and market information based on keywords of your choice.
   * 
   * @param params - Parameters including search keywords
   * @returns Promise resolving to symbol search results
   * @example https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
   */
  async search(params: SearchParams): Promise<SearchResponse> {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }
} 