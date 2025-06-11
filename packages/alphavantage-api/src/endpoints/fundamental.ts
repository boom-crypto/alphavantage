import { AlphaVantageClient } from '../client';
import { 
  CompanyOverviewParams, 
  EarningsParams, 
  ListingStatusParams,
  FinancialStatementParams,
  CompanyOverview,
  EarningsResponse,
  ListingStatusResponse,
  FinancialStatementResponse,
  EarningsCalendarResponse,
  IPOCalendarResponse,
  DividendCalendarResponse,
  SplitsCalendarResponse,
  ETFProfileResponse,
  ETFHoldingsResponse
} from '../types/fundamental';

export class Fundamental {
  constructor(private client: AlphaVantageClient) {}

  /**
   * Returns the company information, financial ratios, and other key metrics for the equity specified.
   * 
   * @param params - Parameters including the symbol for company overview
   * @returns Promise resolving to company overview data
   * @example https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo
   */
  async companyOverview(params: CompanyOverviewParams): Promise<CompanyOverview> {
    return this.client.request({ function: 'OVERVIEW', ...params });
  }

  /**
   * Returns the annual and quarterly income statements for the company of interest.
   * 
   * @param params - Parameters including the symbol for income statement
   * @returns Promise resolving to income statement data
   * @example https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo
   */
  async incomeStatement(params: FinancialStatementParams): Promise<FinancialStatementResponse> {
    return this.client.request({ function: 'INCOME_STATEMENT', ...params });
  }

  /**
   * Returns the annual and quarterly balance sheets for the company of interest.
   * 
   * @param params - Parameters including the symbol for balance sheet
   * @returns Promise resolving to balance sheet data
   * @example https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo
   */
  async balanceSheet(params: FinancialStatementParams): Promise<FinancialStatementResponse> {
    return this.client.request({ function: 'BALANCE_SHEET', ...params });
  }

  /**
   * Returns the annual and quarterly cash flow for the company of interest.
   * 
   * @param params - Parameters including the symbol for cash flow
   * @returns Promise resolving to cash flow data
   * @example https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo
   */
  async cashFlow(params: FinancialStatementParams): Promise<FinancialStatementResponse> {
    return this.client.request({ function: 'CASH_FLOW', ...params });
  }

  /**
   * Returns the annual and quarterly earnings (EPS) for the company of interest.
   * 
   * @param params - Parameters including the symbol for earnings
   * @returns Promise resolving to earnings data
   * @example https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo
   */
  async earnings(params: EarningsParams): Promise<EarningsResponse> {
    return this.client.request({ function: 'EARNINGS', ...params });
  }

  /**
   * Returns a list of active or delisted US stocks and ETFs, either as of the latest trading day or at a specific date in history.
   * 
   * @param params - Parameters for listing status including optional date and state
   * @returns Promise resolving to listing status data
   * @example https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=demo
   */
  async listingStatus(params: ListingStatusParams): Promise<ListingStatusResponse> {
    return this.client.request({ function: 'LISTING_STATUS', ...params });
  }

  /**
   * Returns a JSON array of expected company earnings in the next 3, 6, or 12 months.
   * 
   * @param params - Parameters for earnings calendar
   * @returns Promise resolving to earnings calendar data
   * @example https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=demo
   */
  async earningsCalendar(params: ListingStatusParams): Promise<EarningsCalendarResponse> {
    return this.client.request({ function: 'EARNINGS_CALENDAR', ...params });
  }

  /**
   * Returns a JSON array of IPO events expected in the next 3 months.
   * 
   * @param params - Parameters for IPO calendar
   * @returns Promise resolving to IPO calendar data
   * @example https://www.alphavantage.co/query?function=IPO_CALENDAR&apikey=demo
   */
  async ipoCalendar(params: ListingStatusParams): Promise<IPOCalendarResponse> {
    return this.client.request({ function: 'IPO_CALENDAR', ...params });
  }

  /**
   * Returns a JSON array of dividend payments by publicly-traded companies in the next 3 months.
   * 
   * @param params - Parameters for dividend calendar
   * @returns Promise resolving to dividend calendar data
   * @example https://www.alphavantage.co/query?function=DIVIDEND_CALENDAR&apikey=demo
   */
  async dividendCalendar(params: ListingStatusParams): Promise<DividendCalendarResponse> {
    return this.client.request({ function: 'DIVIDEND_CALENDAR', ...params });
  }

  /**
   * Returns a JSON array of stock split events in the next 3 months.
   * 
   * @param params - Parameters for splits calendar
   * @returns Promise resolving to splits calendar data
   * @example https://www.alphavantage.co/query?function=SPLITS_CALENDAR&apikey=demo
   */
  async splitsCalendar(params: ListingStatusParams): Promise<SplitsCalendarResponse> {
    return this.client.request({ function: 'SPLITS_CALENDAR', ...params });
  }

  /**
   * Returns the profile and key information for any given ETF.
   * 
   * @param params - Parameters including the ETF symbol
   * @returns Promise resolving to ETF profile data
   * @example https://www.alphavantage.co/query?function=ETF_PROFILE&symbol=QQQ&apikey=demo
   */
  async etfProfile(params: CompanyOverviewParams): Promise<ETFProfileResponse> {
    return this.client.request({ function: 'ETF_PROFILE', ...params });
  }

  /**
   * Returns the holdings data for any given ETF.
   * 
   * @param params - Parameters including the ETF symbol
   * @returns Promise resolving to ETF holdings data
   * @example https://www.alphavantage.co/query?function=ETF_HOLDINGS&symbol=QQQ&apikey=demo
   */
  async etfHoldings(params: CompanyOverviewParams): Promise<ETFHoldingsResponse> {
    return this.client.request({ function: 'ETF_HOLDINGS', ...params });
  }
} 