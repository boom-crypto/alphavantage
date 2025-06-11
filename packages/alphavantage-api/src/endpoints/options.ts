import { AlphaVantageClient } from '../client';
import { RealtimeOptionsParams, HistoricalOptionsParams } from '../types/options';

export class Options {
  constructor(private client: AlphaVantageClient) {}

  async realtime(params: RealtimeOptionsParams) {
    return this.client.request({
      function: 'OPTION_CHAIN',
      ...params,
    });
  }

  async historical(params: HistoricalOptionsParams) {
    return this.client.request({
      function: 'OPTION_HISTORICAL',
      ...params,
    });
  }
} 