import { AlphaVantageClient } from '../client';
import { SMAParams, EMAParams, WMAParams, TechnicalIndicatorBase } from '../types/technicals';

export class Technicals {
  constructor(private client: AlphaVantageClient) {}

  async sma(params: SMAParams) {
    return this.client.request({
      function: 'SMA',
      ...params,
    });
  }

  async ema(params: EMAParams) {
    return this.client.request({
      function: 'EMA',
      ...params,
    });
  }

  async wma(params: WMAParams) {
    return this.client.request({
      function: 'WMA',
      ...params,
    });
  }

  async dema(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'DEMA', ...params });
  }

  async tema(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'TEMA', ...params });
  }

  async trima(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'TRIMA', ...params });
  }

  async kama(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'KAMA', ...params });
  }

  async mama(params: TechnicalIndicatorBase & { fastlimit?: number; slowlimit?: number }) {
    return this.client.request({ function: 'MAMA', ...params });
  }

  async t3(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'T3', ...params });
  }

  async macd(params: TechnicalIndicatorBase & { fastperiod?: number; slowperiod?: number; signalperiod?: number }) {
    return this.client.request({ function: 'MACD', ...params });
  }

  async macdext(params: TechnicalIndicatorBase & { fastperiod?: number; slowperiod?: number; signalperiod?: number; fastmatype?: number; slowmatype?: number; signalmatype?: number }) {
    return this.client.request({ function: 'MACDEXT', ...params });
  }

  async stoch(params: TechnicalIndicatorBase & { fastkperiod?: number; slowkperiod?: number; slowdperiod?: number; slowkmatype?: number; slowdmatype?: number }) {
    return this.client.request({ function: 'STOCH', ...params });
  }

  async stochf(params: TechnicalIndicatorBase & { fastkperiod?: number; fastdperiod?: number; fastdmatype?: number }) {
    return this.client.request({ function: 'STOCHF', ...params });
  }

  async rsi(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'RSI', ...params });
  }

  async stochrsi(params: TechnicalIndicatorBase & { time_period?: number; fastkperiod?: number; fastdperiod?: number; fastdmatype?: number }) {
    return this.client.request({ function: 'STOCHRSI', ...params });
  }

  async willr(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'WILLR', ...params });
  }

  async adx(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'ADX', ...params });
  }

  async adxr(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'ADXR', ...params });
  }

  async apo(params: TechnicalIndicatorBase & { fastperiod?: number; slowperiod?: number; matype?: number }) {
    return this.client.request({ function: 'APO', ...params });
  }

  async ppo(params: TechnicalIndicatorBase & { fastperiod?: number; slowperiod?: number; matype?: number }) {
    return this.client.request({ function: 'PPO', ...params });
  }

  async mom(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MOM', ...params });
  }

  async bop(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'BOP', ...params });
  }

  async cci(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'CCI', ...params });
  }

  async cmo(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'CMO', ...params });
  }

  async roc(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'ROC', ...params });
  }

  async rocr(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'ROCR', ...params });
  }

  async aroon(params: TechnicalIndicatorBase & { time_period?: number }) {
    return this.client.request({ function: 'AROON', ...params });
  }

  async aroonosc(params: TechnicalIndicatorBase & { time_period?: number }) {
    return this.client.request({ function: 'AROONOSC', ...params });
  }

  async mfi(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MFI', ...params });
  }

  async trix(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'TRIX', ...params });
  }

  async ultosc(params: TechnicalIndicatorBase & { timeperiod1?: number; timeperiod2?: number; timeperiod3?: number }) {
    return this.client.request({ function: 'ULTOSC', ...params });
  }

  async dx(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'DX', ...params });
  }

  async minus_di(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MINUS_DI', ...params });
  }

  async plus_di(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'PLUS_DI', ...params });
  }

  async minus_dm(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MINUS_DM', ...params });
  }

  async plus_dm(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'PLUS_DM', ...params });
  }

  async bbands(params: TechnicalIndicatorBase & { time_period?: number; nbdevup?: number; nbdevdn?: number }) {
    return this.client.request({ function: 'BBANDS', ...params });
  }

  async midpoint(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MIDPOINT', ...params });
  }

  async midprice(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'MIDPRICE', ...params });
  }

  async sar(params: TechnicalIndicatorBase & { acceleration?: number; maximum?: number }) {
    return this.client.request({ function: 'SAR', ...params });
  }

  async trange(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'TRANGE', ...params });
  }

  async atr(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'ATR', ...params });
  }

  async natr(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'NATR', ...params });
  }

  async ad(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'AD', ...params });
  }

  async adosc(params: TechnicalIndicatorBase & { fastperiod?: number; slowperiod?: number }) {
    return this.client.request({ function: 'ADOSC', ...params });
  }

  async obv(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'OBV', ...params });
  }

  async ht_trendline(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_TRENDLINE', ...params });
  }

  async ht_sine(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_SINE', ...params });
  }

  async ht_trendmode(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_TRENDMODE', ...params });
  }

  async ht_dcperiod(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_DCPERIOD', ...params });
  }

  async ht_dcphase(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_DCPHASE', ...params });
  }

  async ht_phasor(params: TechnicalIndicatorBase) {
    return this.client.request({ function: 'HT_PHASOR', ...params });
  }
} 