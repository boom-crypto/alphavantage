import { z } from 'zod';
import { Stocks } from '@gviper/alphavantage-api';

// Zod schemas for validation
const IntradayParamsSchema = z.object({
  symbol: z.string().describe('The name of the equity of your choice'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min']).describe('Time interval between two consecutive data points'),
  adjusted: z.boolean().optional().describe('By default, adjusted=true and the output time series is adjusted by historical split and dividend events'),
  extended_hours: z.boolean().optional().describe('By default, extended_hours=true and the output will include both the regular trading hours and the extended trading hours'),
  month: z.string().optional().describe('By default, it returns the latest 30 days of intraday data'),
  outputsize: z.enum(['compact', 'full']).optional().describe('By default, outputsize=compact'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const DailyParamsSchema = z.object({
  symbol: z.string().describe('The name of the equity of your choice'),
  outputsize: z.enum(['compact', 'full']).optional().describe('By default, outputsize=compact'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const QuoteParamsSchema = z.object({
  symbol: z.string().describe('The symbol of the equity of your choice'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const SearchParamsSchema = z.object({
  keywords: z.string().describe('A text string of your choice'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

export function createStocksTools(stocks: Stocks) {
  return {
    'av_stocks_intraday': {
      description: 'Get intraday time series data for a stock symbol with specified interval',
      inputSchema: IntradayParamsSchema,
      handler: async (params: z.infer<typeof IntradayParamsSchema>) => {
        return await stocks.intraday(params);
      },
    },

    'av_stocks_daily': {
      description: 'Get daily time series data for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.daily(params);
      },
    },

    'av_stocks_daily_adjusted': {
      description: 'Get daily adjusted time series data (adjusted for splits and dividends) for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.dailyAdjusted(params);
      },
    },

    'av_stocks_weekly': {
      description: 'Get weekly time series data for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.weekly(params);
      },
    },

    'av_stocks_weekly_adjusted': {
      description: 'Get weekly adjusted time series data (adjusted for splits and dividends) for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.weeklyAdjusted(params);
      },
    },

    'av_stocks_monthly': {
      description: 'Get monthly time series data for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.monthly(params);
      },
    },

    'av_stocks_monthly_adjusted': {
      description: 'Get monthly adjusted time series data (adjusted for splits and dividends) for a stock symbol',
      inputSchema: DailyParamsSchema,
      handler: async (params: z.infer<typeof DailyParamsSchema>) => {
        return await stocks.monthlyAdjusted(params);
      },
    },

    'av_stocks_quote': {
      description: 'Get the latest price and volume information for a stock symbol',
      inputSchema: QuoteParamsSchema,
      handler: async (params: z.infer<typeof QuoteParamsSchema>) => {
        return await stocks.quote(params);
      },
    },

    'av_stocks_search': {
      description: 'Search for stocks and ETFs based on keywords',
      inputSchema: SearchParamsSchema,
      handler: async (params: z.infer<typeof SearchParamsSchema>) => {
        return await stocks.search(params);
      },
    },
  };
}