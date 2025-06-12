export class AlphaVantageError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = 'AlphaVantageError';
  }
}

export class AlphaVantageAPIError extends AlphaVantageError {
  constructor(message: string, public readonly statusCode?: number) {
    super(message, 'API_ERROR');
    this.name = 'AlphaVantageAPIError';
  }
}

export class AlphaVantageRateLimitError extends AlphaVantageError {
  constructor(message: string = 'API rate limit exceeded') {
    super(message, 'RATE_LIMIT');
    this.name = 'AlphaVantageRateLimitError';
  }
}

export class AlphaVantageNetworkError extends AlphaVantageError {
  constructor(message: string, public readonly originalError?: Error) {
    super(message, 'NETWORK_ERROR');
    this.name = 'AlphaVantageNetworkError';
  }
}

export class AlphaVantageInvalidSymbolError extends AlphaVantageError {
  constructor(symbol: string) {
    super(`Invalid symbol: ${symbol}`, 'INVALID_SYMBOL');
    this.name = 'AlphaVantageInvalidSymbolError';
  }
}