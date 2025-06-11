import { AlphaVantageClient } from '../client';
import { 
  SymbolSearchParams, 
  MarketStatusParams,
  SymbolSearchResponse,
  MarketStatusResponse
} from '../types/util';

export class Util {
  constructor(private client: AlphaVantageClient) {}

  async symbolSearch(params: SymbolSearchParams): Promise<SymbolSearchResponse> {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }

  async marketStatus(params: MarketStatusParams = {}): Promise<MarketStatusResponse> {
    return this.client.request({
      function: 'MARKET_STATUS',
      ...params,
    });
  }
} 