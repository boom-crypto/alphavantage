import { AlphaVantageClient } from '../client';
import { ForexIntradayParams, ForexDailyParams, ForexExchangeRateParams } from '../types/forex';

export class Forex {
  constructor(private client: AlphaVantageClient) {}

  async intraday(params: ForexIntradayParams) {
    return this.client.request({
      function: 'FX_INTRADAY',
      ...params,
    });
  }

  async daily(params: ForexDailyParams) {
    return this.client.request({
      function: 'FX_DAILY',
      ...params,
    });
  }

  async weekly(params: ForexDailyParams) {
    return this.client.request({
      function: 'FX_WEEKLY',
      ...params,
    });
  }

  async monthly(params: ForexDailyParams) {
    return this.client.request({
      function: 'FX_MONTHLY',
      ...params,
    });
  }

  async exchangeRate(params: ForexExchangeRateParams) {
    return this.client.request({
      function: 'CURRENCY_EXCHANGE_RATE',
      ...params,
    });
  }
} 