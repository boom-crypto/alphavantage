import { AlphaVantageClient } from '../client';
import { NewsSentimentParams, EarningsCallTranscriptParams } from '../types/intelligence';

export class Intelligence {
  constructor(private client: AlphaVantageClient) {}

  async newsSentiment(params: NewsSentimentParams) {
    return this.client.request({
      function: 'NEWS_SENTIMENT',
      ...params,
    });
  }

  async earningsCallTranscript(params: EarningsCallTranscriptParams) {
    return this.client.request({
      function: 'EARNINGS_CALL_TRANSCRIPT',
      ...params,
    });
  }

  async topGainersLosers(params: NewsSentimentParams) {
    return this.client.request({ function: 'TOP_GAINERS_LOSERS', ...params });
  }

  async insiderTransactions(params: NewsSentimentParams) {
    return this.client.request({ function: 'INSIDER_TRANSACTIONS', ...params });
  }

  async analyticsFixedWindow(params: NewsSentimentParams) {
    return this.client.request({ function: 'ANALYTICS_FIXED_WINDOW', ...params });
  }

  async analyticsSlidingWindow(params: NewsSentimentParams) {
    return this.client.request({ function: 'ANALYTICS_SLIDING_WINDOW', ...params });
  }
} 