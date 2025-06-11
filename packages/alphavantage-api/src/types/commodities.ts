import { DataType } from './common';

export interface CommodityParams {
  interval?: 'monthly' | 'weekly' | 'daily';
  datatype?: DataType;
}

// Response types
export interface CommodityDataPoint {
  date: string;
  value: string;
}

export interface CommodityResponse {
  name: string;
  interval: string;
  unit: string;
  data: CommodityDataPoint[];
} 