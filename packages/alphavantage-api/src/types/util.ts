import { DataType } from './common';

export interface SymbolSearchParams {
  keywords: string;
  datatype?: DataType;
}

export interface MarketStatusParams {
  datatype?: DataType;
}

// Response types
export interface SymbolSearchMatch {
  '1. symbol': string;
  '2. name': string;
  '3. type': string;
  '4. region': string;
  '5. marketOpen': string;
  '6. marketClose': string;
  '7. timezone': string;
  '8. currency': string;
  '9. matchScore': string;
}

export interface SymbolSearchResponse {
  bestMatches: SymbolSearchMatch[];
}

export interface MarketInfo {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes: string;
}

export interface MarketStatusResponse {
  endpoint: string;
  markets: MarketInfo[];
} 