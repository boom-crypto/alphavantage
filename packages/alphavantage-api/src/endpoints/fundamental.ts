import { AlphaVantageClient } from '../client';
import { CompanyOverviewParams, EarningsParams, ListingStatusParams } from '../types/fundamental';

export class Fundamental {
  constructor(private client: AlphaVantageClient) {}

  async companyOverview(params: CompanyOverviewParams) {
    return this.client.request({ function: 'OVERVIEW', ...params });
  }

  async incomeStatement(params: CompanyOverviewParams) {
    return this.client.request({ function: 'INCOME_STATEMENT', ...params });
  }

  async balanceSheet(params: CompanyOverviewParams) {
    return this.client.request({ function: 'BALANCE_SHEET', ...params });
  }

  async cashFlow(params: CompanyOverviewParams) {
    return this.client.request({ function: 'CASH_FLOW', ...params });
  }

  async earnings(params: EarningsParams) {
    return this.client.request({ function: 'EARNINGS', ...params });
  }

  async listingStatus(params: ListingStatusParams) {
    return this.client.request({ function: 'LISTING_STATUS', ...params });
  }

  async earningsCalendar(params: ListingStatusParams) {
    return this.client.request({ function: 'EARNINGS_CALENDAR', ...params });
  }

  async ipoCalendar(params: ListingStatusParams) {
    return this.client.request({ function: 'IPO_CALENDAR', ...params });
  }

  async dividendCalendar(params: ListingStatusParams) {
    return this.client.request({ function: 'DIVIDEND_CALENDAR', ...params });
  }

  async splitsCalendar(params: ListingStatusParams) {
    return this.client.request({ function: 'SPLITS_CALENDAR', ...params });
  }

  async etfProfile(params: CompanyOverviewParams) {
    return this.client.request({ function: 'ETF_PROFILE', ...params });
  }

  async etfHoldings(params: CompanyOverviewParams) {
    return this.client.request({ function: 'ETF_HOLDINGS', ...params });
  }
} 