import { AlphaVantageClient } from '../client';
import { EconomicIndicatorParams, EconomicIndicatorResponse } from '../types/economic';

export class Economic {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns the annual and quarterly Real Gross Domestic Product (Real GDP) of the United States.
   * 
   * @param params - Parameters for the Real GDP request
   * @returns Promise resolving to Real GDP data
   * @example https://www.alphavantage.co/query?function=REAL_GDP&apikey=demo
   */
  async realGdp(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'REAL_GDP', ...params });
  }

  /**
   * Returns the quarterly Real Gross Domestic Product per Capita of the United States.
   * 
   * @param params - Parameters for the Real GDP per Capita request
   * @returns Promise resolving to Real GDP per Capita data
   * @example https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=demo
   */
  async realGdpPerCapita(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'REAL_GDP_PER_CAPITA', ...params });
  }

  /**
   * Returns the daily, weekly, and monthly US treasury yield of a given maturity timeline (e.g., 5 year, 30 year, etc).
   * 
   * @param params - Parameters for the Treasury Yield request
   * @returns Promise resolving to Treasury Yield data
   * @example https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=demo
   */
  async treasuryYield(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'TREASURY_YIELD', ...params });
  }

  /**
   * Returns the daily, weekly, and monthly federal funds rate (interest rate) of the United States.
   * 
   * @param params - Parameters for the Federal Funds Rate request
   * @returns Promise resolving to Federal Funds Rate data
   * @example https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=demo
   */
  async fedFundsRate(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'FEDERAL_FUNDS_RATE', ...params });
  }

  /**
   * Returns the monthly and semiannual consumer price index (CPI) of the United States.
   * 
   * @param params - Parameters for the CPI request
   * @returns Promise resolving to CPI data
   * @example https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo
   */
  async cpi(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'CPI', ...params });
  }

  /**
   * Returns the annual inflation rates (consumer prices) of the United States.
   * 
   * @param params - Parameters for the Inflation request
   * @returns Promise resolving to Inflation data
   * @example https://www.alphavantage.co/query?function=INFLATION&apikey=demo
   */
  async inflation(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'INFLATION', ...params });
  }

  /**
   * Returns the monthly Advance Retail Sales: Retail Trade data of the United States.
   * 
   * @param params - Parameters for the Retail Sales request
   * @returns Promise resolving to Retail Sales data
   * @example https://www.alphavantage.co/query?function=RETAIL_SALES&apikey=demo
   */
  async retailSales(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'RETAIL_SALES', ...params });
  }

  /**
   * Returns the monthly durable goods orders data of the United States.
   * 
   * @param params - Parameters for the Durable Goods request
   * @returns Promise resolving to Durable Goods data
   * @example https://www.alphavantage.co/query?function=DURABLES&apikey=demo
   */
  async durableGoods(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'DURABLES', ...params });
  }

  /**
   * Returns the monthly unemployment rate data of the United States.
   * 
   * @param params - Parameters for the Unemployment Rate request
   * @returns Promise resolving to Unemployment Rate data
   * @example https://www.alphavantage.co/query?function=UNEMPLOYMENT&apikey=demo
   */
  async unemploymentRate(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'UNEMPLOYMENT', ...params });
  }

  /**
   * Returns the monthly nonfarm payroll data of the United States.
   * 
   * @param params - Parameters for the Nonfarm Payroll request
   * @returns Promise resolving to Nonfarm Payroll data
   * @example https://www.alphavantage.co/query?function=NONFARM_PAYROLL&apikey=demo
   */
  async nonfarmPayroll(params: EconomicIndicatorParams = {}): Promise<EconomicIndicatorResponse> {
    return this.client.request({ function: 'NONFARM_PAYROLL', ...params });
  }
} 