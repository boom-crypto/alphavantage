import { z } from 'zod';
import { Util } from '@gviper/alphavantage-api';

// Zod schemas for validation
const SymbolSearchParamsSchema = z.object({
  keywords: z.string().describe('A text string of your choice'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const MarketStatusParamsSchema = z.object({});

export function createUtilTools(util: Util) {
  return {
    'av_util_symbol_search': {
      description: 'Search for symbols and market information based on keywords',
      inputSchema: SymbolSearchParamsSchema,
      handler: async (params: z.infer<typeof SymbolSearchParamsSchema>) => {
        return await util.symbolSearch(params);
      },
    },

    'av_util_market_status': {
      description: 'Get current market status (open vs. closed) of major trading venues worldwide',
      inputSchema: MarketStatusParamsSchema,
      handler: async (params: {} = {}) => {
        return await util.marketStatus(params);
      },
    },
  };
}