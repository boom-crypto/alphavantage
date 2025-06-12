import { z } from 'zod';
import { Forex } from '@gviper/alphavantage-api';

// Zod schemas for validation
const ForexIntradayParamsSchema = z.object({
  from_symbol: z.string().describe('A three-letter symbol from the forex currency list'),
  to_symbol: z.string().describe('A three-letter symbol from the forex currency list'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min']).describe('Time interval between two consecutive data points'),
  outputsize: z.enum(['compact', 'full']).optional().describe('By default, outputsize=compact'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const ForexDailyParamsSchema = z.object({
  from_symbol: z.string().describe('A three-letter symbol from the forex currency list'),
  to_symbol: z.string().describe('A three-letter symbol from the forex currency list'),
  outputsize: z.enum(['compact', 'full']).optional().describe('By default, outputsize=compact'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const ForexExchangeRateParamsSchema = z.object({
  from_currency: z.string().describe('The currency you would like to get the exchange rate for'),
  to_currency: z.string().describe('The destination currency for the exchange rate'),
});

export function createForexTools(forex: Forex) {
  return {
    'av_forex_intraday': {
      description: 'Get intraday time series data for a forex currency pair',
      inputSchema: ForexIntradayParamsSchema,
      handler: async (params: z.infer<typeof ForexIntradayParamsSchema>) => {
        return await forex.intraday(params);
      },
    },

    'av_forex_daily': {
      description: 'Get daily time series data for a forex currency pair',
      inputSchema: ForexDailyParamsSchema,
      handler: async (params: z.infer<typeof ForexDailyParamsSchema>) => {
        return await forex.daily(params);
      },
    },

    'av_forex_weekly': {
      description: 'Get weekly time series data for a forex currency pair',
      inputSchema: ForexDailyParamsSchema,
      handler: async (params: z.infer<typeof ForexDailyParamsSchema>) => {
        return await forex.weekly(params);
      },
    },

    'av_forex_monthly': {
      description: 'Get monthly time series data for a forex currency pair',
      inputSchema: ForexDailyParamsSchema,
      handler: async (params: z.infer<typeof ForexDailyParamsSchema>) => {
        return await forex.monthly(params);
      },
    },

    'av_forex_exchange_rate': {
      description: 'Get real-time exchange rate for any pair of digital or physical currencies',
      inputSchema: ForexExchangeRateParamsSchema,
      handler: async (params: z.infer<typeof ForexExchangeRateParamsSchema>) => {
        return await forex.exchangeRate(params);
      },
    },
  };
}