import { AlphaVantageClient } from '../client';
import { EconomicIndicatorParams } from '../types/economic';

export class Economic {
  constructor(private client: AlphaVantageClient) {}

  async realGdp(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'REAL_GDP', ...params });
  }

  async realGdpPerCapita(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'REAL_GDP_PER_CAPITA', ...params });
  }

  async treasuryYield(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'TREASURY_YIELD', ...params });
  }

  async fedFundsRate(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'FEDERAL_FUNDS_RATE', ...params });
  }

  async cpi(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'CPI', ...params });
  }

  async inflation(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'INFLATION', ...params });
  }

  async retailSales(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'RETAIL_SALES', ...params });
  }

  async durableGoods(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'DURABLES', ...params });
  }

  async unemploymentRate(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'UNEMPLOYMENT', ...params });
  }

  async nonfarmPayroll(params: EconomicIndicatorParams = {}) {
    return this.client.request({ function: 'NONFARM_PAYROLL', ...params });
  }
} 