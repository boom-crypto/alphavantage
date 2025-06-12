import { z } from 'zod';
import { Intelligence } from '@gviper/alphavantage-api';

// Zod schemas for validation
const NewsSentimentParamsSchema = z.object({
  tickers: z.string().optional().describe('Stock/crypto/forex symbols of your choice (comma-separated, e.g., AAPL,TSLA)'),
  topics: z.string().optional().describe('News topics of your choice (comma-separated)'),
  time_from: z.string().optional().describe('The time range of the news sentiment (format: YYYYMMDDTHHMM)'),
  time_to: z.string().optional().describe('The time range of the news sentiment (format: YYYYMMDDTHHMM)'),
  sort: z.enum(['LATEST', 'EARLIEST']).optional().describe('By default, sort=LATEST'),
  limit: z.number().int().min(1).max(1000).optional().describe('By default, limit=50'),
});

const EarningsCallTranscriptParamsSchema = z.object({
  symbol: z.string().describe('The symbol of the company of your choice'),
  year: z.number().describe('The fiscal year of the earnings call'),
  quarter: z.number().describe('The fiscal quarter of the earnings call'),
});

export function createIntelligenceTools(intelligence: Intelligence) {
  return {
    'av_intelligence_news_sentiment': {
      description: 'Get live and historical market news sentiment for any given ticker, sector, forex, or crypto',
      inputSchema: NewsSentimentParamsSchema,
      handler: async (params: z.infer<typeof NewsSentimentParamsSchema>) => {
        return await intelligence.newsSentiment(params);
      },
    },

    'av_intelligence_earnings_call_transcript': {
      description: 'Get the transcript of earnings call for a given ticker and fiscal quarter',
      inputSchema: EarningsCallTranscriptParamsSchema,
      handler: async (params: z.infer<typeof EarningsCallTranscriptParamsSchema>) => {
        return await intelligence.earningsCallTranscript(params);
      },
    },

    'av_intelligence_top_gainers_losers': {
      description: 'Get the top 20 gainers, losers, and most actively traded tickers in the US market',
      inputSchema: z.object({}).optional(),
      handler: async (params: any = {}) => {
        return await intelligence.topGainersLosers(params);
      },
    },

    'av_intelligence_insider_transactions': {
      description: 'Get the latest insider transactions for a given ticker',
      inputSchema: NewsSentimentParamsSchema,
      handler: async (params: z.infer<typeof NewsSentimentParamsSchema>) => {
        return await intelligence.insiderTransactions(params);
      },
    },

    'av_intelligence_analytics_fixed_window': {
      description: 'Get analytics data for equity, ETF, forex, crypto, or commodity using fixed time window',
      inputSchema: NewsSentimentParamsSchema,
      handler: async (params: z.infer<typeof NewsSentimentParamsSchema>) => {
        return await intelligence.analyticsFixedWindow(params);
      },
    },

    'av_intelligence_analytics_sliding_window': {
      description: 'Get analytics data for equity, ETF, forex, crypto, or commodity using sliding time window',
      inputSchema: NewsSentimentParamsSchema,
      handler: async (params: z.infer<typeof NewsSentimentParamsSchema>) => {
        return await intelligence.analyticsSlidingWindow(params);
      },
    },
  };
}