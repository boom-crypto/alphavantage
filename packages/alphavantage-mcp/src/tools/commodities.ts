import { z } from 'zod';
import { Commodities } from 'alphavantage-api';

// Zod schemas for validation
const CommodityParamsSchema = z.object({
  interval: z.enum(['daily', 'weekly', 'monthly']).optional().describe('Time interval between two consecutive data points'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

export function createCommoditiesTools(commodities: Commodities) {
  return {
    'av_commodities_crude_oil_wti': {
      description: 'Get daily, weekly, and monthly crude oil prices (WTI) in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.crudeOilWTI(params);
      },
    },

    'av_commodities_crude_oil_brent': {
      description: 'Get daily, weekly, and monthly crude oil prices (Brent) in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.crudeOilBrent(params);
      },
    },

    'av_commodities_natural_gas': {
      description: 'Get daily, weekly, and monthly natural gas prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.naturalGas(params);
      },
    },

    'av_commodities_copper': {
      description: 'Get daily, weekly, and monthly copper prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.copper(params);
      },
    },

    'av_commodities_aluminum': {
      description: 'Get daily, weekly, and monthly aluminum prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.aluminum(params);
      },
    },

    'av_commodities_wheat': {
      description: 'Get daily, weekly, and monthly wheat prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.wheat(params);
      },
    },

    'av_commodities_corn': {
      description: 'Get daily, weekly, and monthly corn prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.corn(params);
      },
    },

    'av_commodities_cotton': {
      description: 'Get daily, weekly, and monthly cotton prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.cotton(params);
      },
    },

    'av_commodities_sugar': {
      description: 'Get daily, weekly, and monthly sugar prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.sugar(params);
      },
    },

    'av_commodities_coffee': {
      description: 'Get daily, weekly, and monthly coffee prices in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.coffee(params);
      },
    },

    'av_commodities_global_index': {
      description: 'Get daily, weekly, and monthly global commodities index in USD',
      inputSchema: CommodityParamsSchema,
      handler: async (params: z.infer<typeof CommodityParamsSchema>) => {
        return await commodities.globalCommoditiesIndex(params);
      },
    },
  };
}