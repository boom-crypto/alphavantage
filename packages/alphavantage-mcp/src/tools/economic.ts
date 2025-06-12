import { z } from 'zod';
import { Economic } from '@gviper/alphavantage-api';

// Zod schemas for validation
const EconomicIndicatorParamsSchema = z.object({
  interval: z.enum(['annual', 'quarterly', 'monthly']).optional().describe('Time interval between two consecutive data points'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const TreasuryYieldParamsSchema = z.object({
  interval: z.enum(['annual', 'quarterly', 'monthly']).optional().describe('Time interval between two consecutive data points'),
  maturity: z.enum(['3month', '2year', '5year', '7year', '10year', '30year']).optional().describe('By default, maturity=10year'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

export function createEconomicTools(economic: Economic) {
  return {
    'av_economic_real_gdp': {
      description: 'Get annual and quarterly Real Gross Domestic Product (Real GDP) of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.realGdp(params);
      },
    },

    'av_economic_real_gdp_per_capita': {
      description: 'Get quarterly Real Gross Domestic Product per Capita of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.realGdpPerCapita(params);
      },
    },

    'av_economic_treasury_yield': {
      description: 'Get daily, weekly, and monthly US treasury yield of a given maturity timeline',
      inputSchema: TreasuryYieldParamsSchema,
      handler: async (params: z.infer<typeof TreasuryYieldParamsSchema>) => {
        return await economic.treasuryYield(params);
      },
    },

    'av_economic_fed_funds_rate': {
      description: 'Get daily, weekly, and monthly federal funds rate (interest rate) of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.fedFundsRate(params);
      },
    },

    'av_economic_cpi': {
      description: 'Get monthly and semiannual consumer price index (CPI) of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.cpi(params);
      },
    },

    'av_economic_inflation': {
      description: 'Get annual inflation rates (consumer prices) of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.inflation(params);
      },
    },

    'av_economic_retail_sales': {
      description: 'Get monthly Advance Retail Sales: Retail Trade data of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.retailSales(params);
      },
    },

    'av_economic_durable_goods': {
      description: 'Get monthly durable goods orders data of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.durableGoods(params);
      },
    },

    'av_economic_unemployment_rate': {
      description: 'Get monthly unemployment rate data of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.unemploymentRate(params);
      },
    },

    'av_economic_nonfarm_payroll': {
      description: 'Get monthly nonfarm payroll data of the United States',
      inputSchema: EconomicIndicatorParamsSchema,
      handler: async (params: z.infer<typeof EconomicIndicatorParamsSchema>) => {
        return await economic.nonfarmPayroll(params);
      },
    },
  };
}