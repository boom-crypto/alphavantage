import { DataType } from './common';

export interface EconomicIndicatorParams {
  interval?: 'annual' | 'quarterly' | 'monthly';
  datatype?: DataType;
}

// Response types
export interface EconomicIndicatorData {
  date: string;
  value: string;
}

export interface EconomicIndicatorResponse {
  name: string;
  interval: string;
  unit: string;
  data: EconomicIndicatorData[];
} 