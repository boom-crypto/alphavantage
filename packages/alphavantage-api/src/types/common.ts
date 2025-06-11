export type OutputSize = 'compact' | 'full';
export type DataType = 'json' | 'csv';
export type Interval = '1min' | '5min' | '15min' | '30min' | '60min' | 'daily' | 'weekly' | 'monthly';

export interface ApiError {
  'Error Message'?: string;
  'Note'?: string;
  'Information'?: string;
} 