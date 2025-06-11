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

  async intraday(params: IntradayParams): Promise<IntradayResponse> {
    return this.client.request({
      function: 'TIME_SERIES_INTRADAY',
      ...params,
    });
  }

  async daily(params: DailyParams): Promise<DailyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_DAILY',
      ...params,
    });
  }

  async dailyAdjusted(params: DailyParams): Promise<DailyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_DAILY_ADJUSTED',
      ...params,
    });
  }

  async weekly(params: DailyParams): Promise<WeeklyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY',
      ...params,
    });
  }

  async weeklyAdjusted(params: DailyParams): Promise<WeeklyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_WEEKLY_ADJUSTED',
      ...params,
    });
  }

  async monthly(params: DailyParams): Promise<MonthlyResponse> {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY',
      ...params,
    });
  }

  async monthlyAdjusted(params: DailyParams): Promise<MonthlyAdjustedResponse> {
    return this.client.request({
      function: 'TIME_SERIES_MONTHLY_ADJUSTED',
      ...params,
    });
  }

  async quote(params: QuoteParams): Promise<GlobalQuoteResponse> {
    return this.client.request({
      function: 'GLOBAL_QUOTE',
      ...params,
    });
  }

  async search(params: SearchParams): Promise<SearchResponse> {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }
} 