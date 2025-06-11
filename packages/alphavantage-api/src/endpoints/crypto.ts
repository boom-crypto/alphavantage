import { AlphaVantageClient } from '../client';
import { CryptoTimeSeriesParams } from '../types/crypto';

export class Crypto {
  constructor(private client: AlphaVantageClient) {}

  async intraday(params: CryptoTimeSeriesParams) {
    return this.client.request({
      function: 'CRYPTO_INTRADAY',
      ...params,
    });
  }

  async daily(params: CryptoTimeSeriesParams) {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_DAILY',
      ...params,
    });
  }

  async weekly(params: CryptoTimeSeriesParams) {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_WEEKLY',
      ...params,
    });
  }

  async monthly(params: CryptoTimeSeriesParams) {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_MONTHLY',
      ...params,
    });
  }
} 