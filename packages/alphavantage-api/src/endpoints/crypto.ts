import { AlphaVantageClient } from '../client';
import { 
  CryptoIntradayParams,
  CryptoTimeSeriesParams,
  CryptoIntradayResponse,
  CryptoDigitalCurrencyResponse,
  CryptoDigitalCurrencyWeeklyResponse,
  CryptoDigitalCurrencyMonthlyResponse
} from '../types/crypto';

export class Crypto {
  constructor(private client: AlphaVantageClient) {}

  async intraday(params: CryptoIntradayParams): Promise<CryptoIntradayResponse> {
    return this.client.request({
      function: 'CRYPTO_INTRADAY',
      ...params,
    });
  }

  async daily(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_DAILY',
      ...params,
    });
  }

  async weekly(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyWeeklyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_WEEKLY',
      ...params,
    });
  }

  async monthly(params: CryptoTimeSeriesParams): Promise<CryptoDigitalCurrencyMonthlyResponse> {
    return this.client.request({
      function: 'DIGITAL_CURRENCY_MONTHLY',
      ...params,
    });
  }
} 