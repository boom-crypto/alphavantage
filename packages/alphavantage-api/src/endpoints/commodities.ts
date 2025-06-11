import { AlphaVantageClient } from '../client';
import { CommodityParams, CommodityResponse } from '../types/commodities';

export class Commodities {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns the daily, weekly, and monthly crude oil prices (WTI) in USD.
   * 
   * @param params - Parameters for WTI crude oil data
   * @returns Promise resolving to WTI crude oil price data
   * @example https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey=demo
   */
  async crudeOilWTI(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'WTI',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly crude oil prices (Brent) in USD.
   * 
   * @param params - Parameters for Brent crude oil data
   * @returns Promise resolving to Brent crude oil price data
   * @example https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo
   */
  async crudeOilBrent(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'BRENT',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly natural gas prices in USD.
   * 
   * @param params - Parameters for natural gas data
   * @returns Promise resolving to natural gas price data
   * @example https://www.alphavantage.co/query?function=NATURAL_GAS&interval=monthly&apikey=demo
   */
  async naturalGas(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'NATURAL_GAS',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly copper prices in USD.
   * 
   * @param params - Parameters for copper data
   * @returns Promise resolving to copper price data
   * @example https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo
   */
  async copper(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'COPPER',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly aluminum prices in USD.
   * 
   * @param params - Parameters for aluminum data
   * @returns Promise resolving to aluminum price data
   * @example https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo
   */
  async aluminum(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'ALUMINUM',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly wheat prices in USD.
   * 
   * @param params - Parameters for wheat data
   * @returns Promise resolving to wheat price data
   * @example https://www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo
   */
  async wheat(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'WHEAT',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly corn prices in USD.
   * 
   * @param params - Parameters for corn data
   * @returns Promise resolving to corn price data
   * @example https://www.alphavantage.co/query?function=CORN&interval=monthly&apikey=demo
   */
  async corn(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'CORN',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly cotton prices in USD.
   * 
   * @param params - Parameters for cotton data
   * @returns Promise resolving to cotton price data
   * @example https://www.alphavantage.co/query?function=COTTON&interval=monthly&apikey=demo
   */
  async cotton(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'COTTON',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly sugar prices in USD.
   * 
   * @param params - Parameters for sugar data
   * @returns Promise resolving to sugar price data
   * @example https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo
   */
  async sugar(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'SUGAR',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly coffee prices in USD.
   * 
   * @param params - Parameters for coffee data
   * @returns Promise resolving to coffee price data
   * @example https://www.alphavantage.co/query?function=COFFEE&interval=monthly&apikey=demo
   */
  async coffee(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'COFFEE',
      ...params,
    });
  }

  /**
   * Returns the daily, weekly, and monthly global commodities index in USD.
   * 
   * @param params - Parameters for global commodities index data
   * @returns Promise resolving to global commodities index data
   * @example https://www.alphavantage.co/query?function=ALL_COMMODITIES&interval=monthly&apikey=demo
   */
  async globalCommoditiesIndex(params: CommodityParams = {}): Promise<CommodityResponse> {
    return this.client.request({
      function: 'ALL_COMMODITIES',
      ...params,
    });
  }
} 