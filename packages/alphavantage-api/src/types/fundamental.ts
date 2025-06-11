import { DataType } from './common';

// Input parameter types
export interface CompanyOverviewParams {
  symbol: string;
  datatype?: DataType;
}

export interface EarningsParams {
  symbol: string;
  datatype?: DataType;
}

export interface ListingStatusParams {
  date?: string; // YYYY-MM-DD format
  state?: 'active' | 'delisted';
  datatype?: DataType;
}

export interface FinancialStatementParams {
  symbol: string;
  datatype?: DataType;
}

// Response types
export interface CompanyOverview {
  Symbol: string;
  AssetType: string;
  Name: string;
  Description: string;
  CIK: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
  Industry: string;
  Address: string;
  FiscalYearEnd: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  EBITDA: string;
  PERatio: string;
  PEGRatio: string;
  BookValue: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  RevenuePerShareTTM: string;
  ProfitMargin: string;
  OperatingMarginTTM: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenueTTM: string;
  GrossProfitTTM: string;
  DilutedEPSTTM: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  AnalystTargetPrice: string;
  TrailingPE: string;
  ForwardPE: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  EVToRevenue: string;
  EVToEBITDA: string;
  Beta: string;
  '52WeekHigh': string;
  '52WeekLow': string;
  '50DayMovingAverage': string;
  '200DayMovingAverage': string;
  SharesOutstanding: string;
  DividendDate: string;
  ExDividendDate: string;
}

export interface AnnualEarnings {
  fiscalDateEnding: string;
  reportedEPS: string;
}

export interface QuarterlyEarnings {
  fiscalDateEnding: string;
  reportedDate: string;
  reportedEPS: string;
  estimatedEPS: string;
  surprise: string;
  surprisePercentage: string;
}

export interface EarningsResponse {
  symbol: string;
  annualEarnings: AnnualEarnings[];
  quarterlyEarnings: QuarterlyEarnings[];
}

export interface ListingInfo {
  symbol: string;
  name: string;
  exchange: string;
  assetType: string;
  ipoDate: string;
  delistingDate: string;
  status: string;
}

export interface ListingStatusResponse {
  listings: ListingInfo[];
}

export interface FinancialStatementItem {
  fiscalDateEnding: string;
  reportedCurrency: string;
  [key: string]: string;
}

export interface FinancialStatementResponse {
  symbol: string;
  annualReports: FinancialStatementItem[];
  quarterlyReports: FinancialStatementItem[];
}

// Additional response types for calendar and ETF endpoints
export interface CalendarEvent {
  symbol: string;
  name: string;
  reportDate: string;
  fiscalDateEnding: string;
  estimate: string;
  currency: string;
}

export interface EarningsCalendarResponse {
  earnings: CalendarEvent[];
}

export interface IPOCalendarResponse {
  ipos: CalendarEvent[];
}

export interface DividendCalendarResponse {
  dividends: CalendarEvent[];
}

export interface SplitsCalendarResponse {
  splits: CalendarEvent[];
}

export interface ETFProfileResponse {
  symbol: string;
  assetType: string;
  name: string;
  description: string;
  cik: string;
  exchange: string;
  currency: string;
  country: string;
  sector: string;
  industry: string;
  address: string;
  fiscalYearEnd: string;
  latestQuarter: string;
}

export interface ETFHoldingsResponse {
  symbol: string;
  holdings: any[];
} 