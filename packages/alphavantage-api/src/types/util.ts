import { DataType } from './common';

export interface SymbolSearchParams {
  keywords: string;
  datatype?: DataType;
}

export interface MarketStatusParams {
  datatype?: DataType;
} 