import { AlphaVantageClient } from '../client';
import { CommodityParams } from '../types/commodities';

export class Commodities {
  constructor(private client: AlphaVantageClient) {}

  async crudeOilWTI(params: CommodityParams = {}) {
    return this.client.request({
      function: 'WTI',
      ...params,
    });
  }

  async crudeOilBrent(params: CommodityParams = {}) {
    return this.client.request({
      function: 'BRENT',
      ...params,
    });
  }

  async naturalGas(params: CommodityParams = {}) {
    return this.client.request({
      function: 'NATURAL_GAS',
      ...params,
    });
  }

  async copper(params: CommodityParams = {}) {
    return this.client.request({
      function: 'COPPER',
      ...params,
    });
  }

  async aluminum(params: CommodityParams = {}) {
    return this.client.request({
      function: 'ALUMINUM',
      ...params,
    });
  }

  async wheat(params: CommodityParams = {}) {
    return this.client.request({
      function: 'WHEAT',
      ...params,
    });
  }

  async corn(params: CommodityParams = {}) {
    return this.client.request({
      function: 'CORN',
      ...params,
    });
  }

  async cotton(params: CommodityParams = {}) {
    return this.client.request({
      function: 'COTTON',
      ...params,
    });
  }

  async sugar(params: CommodityParams = {}) {
    return this.client.request({
      function: 'SUGAR',
      ...params,
    });
  }

  async coffee(params: CommodityParams = {}) {
    return this.client.request({
      function: 'COFFEE',
      ...params,
    });
  }

  async globalCommoditiesIndex(params: CommodityParams = {}) {
    return this.client.request({
      function: 'ALL_COMMODITIES',
      ...params,
    });
  }
} 