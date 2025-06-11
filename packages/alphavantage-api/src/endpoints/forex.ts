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

  async intraday(params: ForexIntradayParams): Promise<ForexIntradayResponse> {
    return this.client.request({
      function: 'FX_INTRADAY',
      ...params,
    });
  }

  async daily(params: ForexDailyParams): Promise<ForexDailyResponse> {
    return this.client.request({
      function: 'FX_DAILY',
      ...params,
    });
  }

  async weekly(params: ForexDailyParams): Promise<ForexWeeklyResponse> {
    return this.client.request({
      function: 'FX_WEEKLY',
      ...params,
    });
  }

  async monthly(params: ForexDailyParams): Promise<ForexMonthlyResponse> {
    return this.client.request({
      function: 'FX_MONTHLY',
      ...params,
    });
  }

  async exchangeRate(params: ForexExchangeRateParams): Promise<ExchangeRateResponse> {
    return this.client.request({
      function: 'CURRENCY_EXCHANGE_RATE',
      ...params,
    });
  }
} 