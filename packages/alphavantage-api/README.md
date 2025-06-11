# alphavantage-api

TypeScript 严格模式下的 Alpha Vantage API 全量封装。

- 覆盖官方全部API协议（股票、外汇、加密、技术指标、基本面、经济指标、工具类等）
- 类型安全，参数、返回值、错误处理全类型化
- 支持所有可选参数，默认值与官方一致
- 支持API Key配置与复用

## 用法

```ts
import {
  AlphaVantageClient,
  Stocks,
  Forex,
  Crypto,
  Technicals,
  Fundamental,
  Economic,
  Util,
  Options,
  Commodities,
  Intelligence
} from 'alphavantage-api';

const client = new AlphaVantageClient({ apiKey: 'YOUR_KEY' });
const stocks = new Stocks(client);
const forex = new Forex(client);
const crypto = new Crypto(client);
const technicals = new Technicals(client);
const fundamental = new Fundamental(client);
const economic = new Economic(client);
const util = new Util(client);
const options = new Options(client);
const commodities = new Commodities(client);
const intelligence = new Intelligence(client);

stocks.intraday({ symbol: 'IBM', interval: '5min' }).then(console.log);
forex.exchangeRate({ from_currency: 'USD', to_currency: 'JPY' }).then(console.log);
crypto.daily({ symbol: 'BTC', market: 'USD' }).then(console.log);
technicals.sma({ symbol: 'IBM', interval: 'daily', time_period: 20, series_type: 'close' }).then(console.log);
fundamental.companyOverview({ symbol: 'IBM' }).then(console.log);
economic.cpi().then(console.log);
util.symbolSearch({ keywords: 'Tesla' }).then(console.log);
options.realtime({ symbol: 'AAPL' }).then(console.log);
commodities.crudeOilWTI().then(console.log);
intelligence.newsSentiment({ tickers: 'AAPL' }).then(console.log);
``` 