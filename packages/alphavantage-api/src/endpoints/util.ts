import { AlphaVantageClient } from '../client';
import { SymbolSearchParams, MarketStatusParams } from '../types/util';

export class Util {
  constructor(private client: AlphaVantageClient) {}

  async symbolSearch(params: SymbolSearchParams) {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }

  async marketStatus(params: MarketStatusParams = {}) {
    return this.client.request({
      function: 'MARKET_STATUS',
      ...params,
    });
  }
} 