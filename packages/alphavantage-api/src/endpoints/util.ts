import { AlphaVantageClient } from '../client';
import { 
  SymbolSearchParams, 
  MarketStatusParams,
  SymbolSearchResponse,
  MarketStatusResponse
} from '../types/util';

export class Util {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns the best-matching symbols and market information based on keywords of your choice.
   * 
   * @param params - Parameters including search keywords
   * @returns Promise resolving to symbol search results
   * @example https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
   */
  async symbolSearch(params: SymbolSearchParams): Promise<SymbolSearchResponse> {
    return this.client.request({
      function: 'SYMBOL_SEARCH',
      ...params,
    });
  }

  /**
   * Returns the current market status (open vs. closed) of major trading venues for equities, forex, and cryptocurrencies around the world.
   * 
   * @param params - Optional parameters for market status
   * @returns Promise resolving to market status data
   * @example https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo
   */
  async marketStatus(params: MarketStatusParams = {}): Promise<MarketStatusResponse> {
    return this.client.request({
      function: 'MARKET_STATUS',
      ...params,
    });
  }
} 