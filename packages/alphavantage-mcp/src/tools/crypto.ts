import { z } from 'zod';
import { Crypto } from '@gviper/alphavantage-api';

// Zod schemas for validation
const CryptoIntradayParamsSchema = z.object({
  symbol: z.string().describe('The digital/crypto currency of your choice (e.g., BTC)'),
  market: z.string().describe('The exchange market of your choice (e.g., USD)'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min']).describe('Time interval between two consecutive data points'),
  outputsize: z.enum(['compact', 'full']).optional().describe('By default, outputsize=compact'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const CryptoTimeSeriesParamsSchema = z.object({
  symbol: z.string().describe('The digital/crypto currency of your choice (e.g., BTC)'),
  market: z.string().describe('The exchange market of your choice (e.g., CNY)'),
});

export function createCryptoTools(crypto: Crypto) {
  return {
    'av_crypto_intraday': {
      description: 'Get intraday time series data for a digital currency traded on a specific market',
      inputSchema: CryptoIntradayParamsSchema,
      handler: async (params: z.infer<typeof CryptoIntradayParamsSchema>) => {
        return await crypto.intraday(params);
      },
    },

    'av_crypto_daily': {
      description: 'Get daily historical time series data for a digital currency traded on a specific market',
      inputSchema: CryptoTimeSeriesParamsSchema,
      handler: async (params: z.infer<typeof CryptoTimeSeriesParamsSchema>) => {
        return await crypto.daily(params);
      },
    },

    'av_crypto_weekly': {
      description: 'Get weekly historical time series data for a digital currency traded on a specific market',
      inputSchema: CryptoTimeSeriesParamsSchema,
      handler: async (params: z.infer<typeof CryptoTimeSeriesParamsSchema>) => {
        return await crypto.weekly(params);
      },
    },

    'av_crypto_monthly': {
      description: 'Get monthly historical time series data for a digital currency traded on a specific market',
      inputSchema: CryptoTimeSeriesParamsSchema,
      handler: async (params: z.infer<typeof CryptoTimeSeriesParamsSchema>) => {
        return await crypto.monthly(params);
      },
    },
  };
}