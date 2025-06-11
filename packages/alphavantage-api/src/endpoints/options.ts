import { AlphaVantageClient } from '../client';
import { 
  RealtimeOptionsParams, 
  HistoricalOptionsParams,
  RealtimeOptionsResponse,
  HistoricalOptionsResponse
} from '../types/options';

export class Options {
  constructor(private client: AlphaVantageClient) {}

  async realtime(params: RealtimeOptionsParams): Promise<RealtimeOptionsResponse> {
    return this.client.request({
      function: 'OPTION_CHAIN',
      ...params,
    });
  }

  async historical(params: HistoricalOptionsParams): Promise<HistoricalOptionsResponse> {
    return this.client.request({
      function: 'OPTION_HISTORICAL',
      ...params,
    });
  }
} 