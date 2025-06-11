import { AlphaVantageClient } from '../client';
import { IntradayParams, DailyParams, QuoteParams, SearchParams } from '../types/stocks';

export class Stocks {
  constructor(private client: AlphaVantageClient) {}

  async intraday(params: IntradayParams) {
    return this.client.request({
      function: 'TIME_SERIES_INTRADAY',
      ...params,
    });
  }

  async daily(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_DAILY',
      ...params,
    });
  }

  async dailyAdjusted(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_DAILY_ADJUSTED',
      ...params,
    });
  }

  async weekly(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY',
      ...params,
    });
  }

  async weeklyAdjusted(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY_ADJUSTED',
      ...params,
    });
  }

  async monthly(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY',
      ...params,
    });
  }

  async monthlyAdjusted(params: DailyParams) {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY_ADJUSTED',
      ...params,
    });
  }

  async quote(params: QuoteParams) {
    return this.client.request({
      function: 'GLOBAL_QUOTE',
      ...params,
    });
  }

  async search(params: SearchParams) {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }
} 