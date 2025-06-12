export * from './client';
export * from './errors';
export * from './endpoints/stocks';
export * from './endpoints/forex';
export * from './endpoints/crypto';
export * from './endpoints/technicals';
export * from './endpoints/fundamental';
export * from './endpoints/economic';
export * from './endpoints/util';
export * from './endpoints/options';
export * from './endpoints/commodities';
export * from './endpoints/intelligence';
export * from './types';

// Convenience factory function
import { AlphaVantageClient, AlphaVantageClientOptions } from './client';
import { Stocks } from './endpoints/stocks';
import { Forex } from './endpoints/forex';
import { Crypto } from './endpoints/crypto';
import { Technicals } from './endpoints/technicals';
import { Fundamental } from './endpoints/fundamental';
import { Economic } from './endpoints/economic';
import { Util } from './endpoints/util';
import { Options } from './endpoints/options';
import { Commodities } from './endpoints/commodities';
import { Intelligence } from './endpoints/intelligence';

export class AlphaVantage {
  private client: AlphaVantageClient;
  
  public readonly stocks: Stocks;
  public readonly forex: Forex;
  public readonly crypto: Crypto;
  public readonly technicals: Technicals;
  public readonly fundamental: Fundamental;
  public readonly economic: Economic;
  public readonly util: Util;
  public readonly options: Options;
  public readonly commodities: Commodities;
  public readonly intelligence: Intelligence;

  constructor(options: AlphaVantageClientOptions) {
    this.client = new AlphaVantageClient(options);
    
    this.stocks = new Stocks(this.client);
    this.forex = new Forex(this.client);
    this.crypto = new Crypto(this.client);
    this.technicals = new Technicals(this.client);
    this.fundamental = new Fundamental(this.client);
    this.economic = new Economic(this.client);
    this.util = new Util(this.client);
    this.options = new Options(this.client);
    this.commodities = new Commodities(this.client);
    this.intelligence = new Intelligence(this.client);
  }
}