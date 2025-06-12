import { AlphaVantageClient } from '../client';
import { 
  RealtimeOptionsParams, 
  HistoricalOptionsParams,
  RealtimeOptionsResponse,
  HistoricalOptionsResponse
} from '../types/options';

export class Options {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns the real-time options chain for a given equity.
   * 
   * @param params - Parameters including symbol
   * @returns Promise resolving to real-time options chain data
   * @example https://www.alphavantage.co/query?function=REALTIME_OPTIONS&symbol=IBM&apikey=demo
   */
  async realtime(params: RealtimeOptionsParams): Promise<RealtimeOptionsResponse> {
    return this.client.request({
      function: 'REALTIME_OPTIONS',
      ...params,
    });
  }

  /**
   * Returns historical options data for a given equity.
   * 
   * @param params - Parameters including symbol and date
   * @returns Promise resolving to historical options data
   * @example https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=demo
   */
  async historical(params: HistoricalOptionsParams): Promise<HistoricalOptionsResponse> {
    return this.client.request({
      function: 'HISTORICAL_OPTIONS',
      ...params,
    });
  }
} 