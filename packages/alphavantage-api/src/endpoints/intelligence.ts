import { AlphaVantageClient } from '../client';
import { 
  NewsSentimentParams, 
  EarningsCallTranscriptParams,
  NewsSentimentResponse,
  EarningsCallTranscriptResponse,
  TopGainersLosersResponse,
  InsiderTransactionsResponse,
  AnalyticsResponse
} from '../types/intelligence';

export class Intelligence {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns live and historical market news sentiment for any given ticker or crypto, sector, forex and commodity.
   * 
   * @param params - Parameters for news sentiment including tickers, topics, time range, etc.
   * @returns Promise resolving to news sentiment data
   * @example https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo
   */
  async newsSentiment(params: NewsSentimentParams): Promise<NewsSentimentResponse> {
    return this.client.request({
      function: 'NEWS_SENTIMENT',
      ...params,
    });
  }

  /**
   * Returns the transcript of earnings call for a given ticker and fiscal quarter.
   * 
   * @param params - Parameters including symbol, year, and quarter
   * @returns Promise resolving to earnings call transcript data
   * @example https://www.alphavantage.co/query?function=EARNINGS_CALL_TRANSCRIPT&symbol=IBM&quarter=2024Q1&apikey=demo
   */
  async earningsCallTranscript(params: EarningsCallTranscriptParams): Promise<EarningsCallTranscriptResponse> {
    return this.client.request({
      function: 'EARNINGS_CALL_TRANSCRIPT',
      ...params,
    });
  }

  /**
   * Returns the top 20 gainers, losers, and most actively traded tickers in the US market.
   * 
   * @param params - Parameters for top gainers/losers data (optional)
   * @returns Promise resolving to top gainers/losers data
   * @example https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo
   */
  async topGainersLosers(params: NewsSentimentParams = {}): Promise<TopGainersLosersResponse> {
    return this.client.request({ function: 'TOP_GAINERS_LOSERS', ...params });
  }

  /**
   * Returns the latest insider transactions for a given ticker.
   * 
   * @param params - Parameters for insider transactions including symbol
   * @returns Promise resolving to insider transactions data
   * @example https://www.alphavantage.co/query?function=INSIDER_TRANSACTIONS&symbol=IBM&apikey=demo
   */
  async insiderTransactions(params: NewsSentimentParams): Promise<InsiderTransactionsResponse> {
    return this.client.request({ function: 'INSIDER_TRANSACTIONS', ...params });
  }

  /**
   * Returns analytics data for equity, ETF, forex, crypto, or commodity using fixed time window.
   * 
   * @param params - Parameters for analytics fixed window
   * @returns Promise resolving to analytics data
   * @example https://www.alphavantage.co/query?function=ANALYTICS_FIXED_WINDOW&SYMBOLS=AAPL&RANGE=2022-01-01&RANGE=2022-03-01&INTERVAL=DAILY&OHLC=close&apikey=demo
   */
  async analyticsFixedWindow(params: NewsSentimentParams): Promise<AnalyticsResponse> {
    return this.client.request({ function: 'ANALYTICS_FIXED_WINDOW', ...params });
  }

  /**
   * Returns analytics data for equity, ETF, forex, crypto, or commodity using sliding time window.
   * 
   * @param params - Parameters for analytics sliding window
   * @returns Promise resolving to analytics data
   * @example https://www.alphavantage.co/query?function=ANALYTICS_SLIDING_WINDOW&SYMBOLS=AAPL&RANGE=2022-01-01&RANGE=2022-12-01&INTERVAL=MONTHLY&WINDOW_SIZE=3&OHLC=close&apikey=demo
   */
  async analyticsSlidingWindow(params: NewsSentimentParams): Promise<AnalyticsResponse> {
    return this.client.request({ function: 'ANALYTICS_SLIDING_WINDOW', ...params });
  }
} 