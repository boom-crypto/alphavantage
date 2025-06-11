import { DataType } from './common';

export interface NewsSentimentParams {
  tickers?: string;
  topics?: string;
  time_from?: string; // YYYYMMDDThhmm
  time_to?: string;   // YYYYMMDDThhmm
  sort?: 'LATEST' | 'EARLIEST';
  limit?: number;
  datatype?: DataType;
}

export interface EarningsCallTranscriptParams {
  symbol: string;
  year: number;
  quarter: number;
  datatype?: DataType;
}

// Response types
export interface NewsArticle {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: any[];
  overall_sentiment_score: number;
  overall_sentiment_label: string;
  ticker_sentiment: any[];
}

export interface NewsSentimentResponse {
  items: string;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed: NewsArticle[];
}

export interface EarningsCallTranscriptResponse {
  symbol: string;
  year: string;
  quarter: string;
  transcript: string;
}

export interface TopGainersLosersResponse {
  metadata: string;
  last_updated: string;
  top_gainers: any[];
  top_losers: any[];
  most_actively_traded: any[];
}

export interface InsiderTransactionsResponse {
  symbol: string;
  data: any[];
}

export interface AnalyticsResponse {
  symbol: string;
  analytics: any;
} 