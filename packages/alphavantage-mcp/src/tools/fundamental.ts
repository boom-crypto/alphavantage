import { z } from 'zod';
import { Fundamental } from 'alphavantage-api';

// Zod schemas for validation
const CompanyOverviewParamsSchema = z.object({
  symbol: z.string().describe('The symbol of the equity of your choice'),
});

const FinancialStatementParamsSchema = z.object({
  symbol: z.string().describe('The symbol of the equity of your choice'),
});

const EarningsParamsSchema = z.object({
  symbol: z.string().describe('The symbol of the equity of your choice'),
});

const ListingStatusParamsSchema = z.object({
  date: z.string().optional().describe('If no date is set, the API endpoint will return a list of active or delisted symbols as of the latest trading day'),
  state: z.enum(['active', 'delisted']).optional().describe('By default, state=active and the API will return a list of actively traded stocks and ETFs'),
});

export function createFundamentalTools(fundamental: Fundamental) {
  return {
    'av_fundamental_company_overview': {
      description: 'Get company information, financial ratios, and other key metrics for an equity',
      inputSchema: CompanyOverviewParamsSchema,
      handler: async (params: z.infer<typeof CompanyOverviewParamsSchema>) => {
        return await fundamental.companyOverview(params);
      },
    },

    'av_fundamental_income_statement': {
      description: 'Get annual and quarterly income statements for a company',
      inputSchema: FinancialStatementParamsSchema,
      handler: async (params: z.infer<typeof FinancialStatementParamsSchema>) => {
        return await fundamental.incomeStatement(params);
      },
    },

    'av_fundamental_balance_sheet': {
      description: 'Get annual and quarterly balance sheets for a company',
      inputSchema: FinancialStatementParamsSchema,
      handler: async (params: z.infer<typeof FinancialStatementParamsSchema>) => {
        return await fundamental.balanceSheet(params);
      },
    },

    'av_fundamental_cash_flow': {
      description: 'Get annual and quarterly cash flow statements for a company',
      inputSchema: FinancialStatementParamsSchema,
      handler: async (params: z.infer<typeof FinancialStatementParamsSchema>) => {
        return await fundamental.cashFlow(params);
      },
    },

    'av_fundamental_earnings': {
      description: 'Get annual and quarterly earnings (EPS) for a company',
      inputSchema: EarningsParamsSchema,
      handler: async (params: z.infer<typeof EarningsParamsSchema>) => {
        return await fundamental.earnings(params);
      },
    },

    'av_fundamental_listing_status': {
      description: 'Get a list of active or delisted US stocks and ETFs',
      inputSchema: ListingStatusParamsSchema,
      handler: async (params: z.infer<typeof ListingStatusParamsSchema>) => {
        return await fundamental.listingStatus(params);
      },
    },

    'av_fundamental_earnings_calendar': {
      description: 'Get expected company earnings in the next 3, 6, or 12 months',
      inputSchema: ListingStatusParamsSchema,
      handler: async (params: z.infer<typeof ListingStatusParamsSchema>) => {
        return await fundamental.earningsCalendar(params);
      },
    },

    'av_fundamental_ipo_calendar': {
      description: 'Get IPO events expected in the next 3 months',
      inputSchema: ListingStatusParamsSchema,
      handler: async (params: z.infer<typeof ListingStatusParamsSchema>) => {
        return await fundamental.ipoCalendar(params);
      },
    },

    'av_fundamental_dividend_calendar': {
      description: 'Get dividend payments by publicly-traded companies in the next 3 months',
      inputSchema: ListingStatusParamsSchema,
      handler: async (params: z.infer<typeof ListingStatusParamsSchema>) => {
        return await fundamental.dividendCalendar(params);
      },
    },

    'av_fundamental_splits_calendar': {
      description: 'Get stock split events in the next 3 months',
      inputSchema: ListingStatusParamsSchema,
      handler: async (params: z.infer<typeof ListingStatusParamsSchema>) => {
        return await fundamental.splitsCalendar(params);
      },
    },

    'av_fundamental_etf_profile': {
      description: 'Get profile and key information for any given ETF',
      inputSchema: CompanyOverviewParamsSchema,
      handler: async (params: z.infer<typeof CompanyOverviewParamsSchema>) => {
        return await fundamental.etfProfile(params);
      },
    },

    'av_fundamental_etf_holdings': {
      description: 'Get holdings data for any given ETF',
      inputSchema: CompanyOverviewParamsSchema,
      handler: async (params: z.infer<typeof CompanyOverviewParamsSchema>) => {
        return await fundamental.etfHoldings(params);
      },
    },
  };
}