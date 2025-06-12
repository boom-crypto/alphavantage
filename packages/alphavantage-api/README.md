# 📊 @gviper/alphavantage-api

A comprehensive TypeScript SDK for the Alpha Vantage API with full type safety and strict mode compliance.

## ✨ Features

- 🎯 **Complete API Coverage**: All official Alpha Vantage endpoints (stocks, forex, crypto, technical indicators, fundamentals, economic data, utilities, options, commodities, market intelligence)
- 🔒 **Type Safety**: Fully typed parameters, return values, and error handling
- ⚙️ **Flexible Configuration**: Support for all optional parameters with official defaults
- 🔑 **API Key Management**: Built-in API key configuration and reuse
- 🚀 **Modern TypeScript**: Strict mode enabled for enhanced reliability

## 🚀 Quick Start

### Installation

```bash
npm install @gviper/alphavantage-api
# or
pnpm add @gviper/alphavantage-api
```

### Basic Usage

```typescript
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
} from '@gviper/alphavantage-api';

// Initialize client with your API key
const client = new AlphaVantageClient({ apiKey: 'YOUR_API_KEY' });

// Initialize endpoint modules
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
```

## 📖 Usage Examples

### Stock Data
```typescript
// Get intraday stock data
const intradayData = await stocks.intraday({ 
  symbol: 'IBM', 
  interval: '5min' 
});

// Get company overview
const companyInfo = await fundamental.companyOverview({ 
  symbol: 'IBM' 
});
```

### Forex & Crypto
```typescript
// Get exchange rate
const exchangeRate = await forex.exchangeRate({ 
  from_currency: 'USD', 
  to_currency: 'JPY' 
});

// Get daily crypto data
const cryptoData = await crypto.daily({ 
  symbol: 'BTC', 
  market: 'USD' 
});
```

### Technical Analysis
```typescript
// Simple Moving Average
const smaData = await technicals.sma({ 
  symbol: 'IBM', 
  interval: 'daily', 
  time_period: 20, 
  series_type: 'close' 
});
```

### Economic Data
```typescript
// Consumer Price Index
const cpiData = await economic.cpi();

// Symbol search
const searchResults = await util.symbolSearch({ 
  keywords: 'Tesla' 
});
```

### Advanced Features
```typescript
// Options data
const optionsData = await options.realtime({ 
  symbol: 'AAPL' 
});

// Commodities
const oilPrices = await commodities.crudeOilWTI();

// Market intelligence
const sentiment = await intelligence.newsSentiment({ 
  tickers: 'AAPL' 
});
```

## 🔧 API Reference

All endpoint modules follow the same pattern and provide full TypeScript intellisense support. Refer to the [Alpha Vantage API documentation](https://www.alphavantage.co/documentation/) for detailed parameter descriptions.

## 🤝 Contributing

This package is part of a monorepo. Please refer to the root README for development guidelines.

## 📄 License

MIT License - see the LICENSE file for details. 