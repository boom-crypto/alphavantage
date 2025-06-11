import { DataType } from './common';

export interface CompanyOverviewParams {
  symbol: string;
  datatype?: DataType;
}

export interface EarningsParams {
  symbol: string;
  datatype?: DataType;
}

export interface ListingStatusParams {
  date?: string; // YYYY-MM-DD
  datatype?: DataType;
}
// ... 其他基本面API参数类型 