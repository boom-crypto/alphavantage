# 📊 Alpha Vantage API SDK

[![npm version](https://img.shields.io/npm/v/@gviper/alphavantage-api?style=flat-square)](https://www.npmjs.com/package/@gviper/alphavantage-api)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

> ⚠️ **IMPORTANT NOTICE**: This SDK was generated using Claude Code AI. While most functionality has been verified, please thoroughly test all features in your specific use case before production deployment. Users should validate API responses and error handling according to their requirements.

A professional TypeScript SDK for the Alpha Vantage Financial API featuring complete endpoint coverage, full type safety, and enterprise-grade reliability.

## 🌟 Key Features

- **🎯 Complete Coverage** — All Alpha Vantage API endpoints with consistent interface
- **🔒 Type Safety** — Full TypeScript support with strict mode compliance
- **⚡ Modern Architecture** — Built with latest TypeScript best practices
- **🔑 Secure Authentication** — Built-in API key management and validation
- **📊 Rich Data Types** — Comprehensive type definitions for all response formats
- **🚀 Developer Experience** — IntelliSense support and detailed error handling

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @gviper/alphavantage-api

# pnpm
pnpm add @gviper/alphavantage-api

# yarn
yarn add @gviper/alphavantage-api
```

### Quick Setup

```typescript
import { AlphaVantage } from '@gviper/alphavantage-api';

// Initialize with your API key - all endpoints ready to use
const av = new AlphaVantage({ 
  apiKey: process.env.ALPHA_VANTAGE_API_KEY 
});

// Start using immediately
const stockData = await av.stocks.daily({ symbol: 'AAPL' });
const companyInfo = await av.fundamental.companyOverview({ symbol: 'AAPL' });
const exchangeRate = await av.forex.exchangeRate({ 
  from_currency: 'USD', 
  to_currency: 'EUR' 
});
```

## 📈 API Coverage

### 📊 Stock Market Data
```typescript
// Real-time and historical stock prices
const intradayData = await stocks.intraday({ 
  symbol: 'AAPL', 
  interval: '5min' 
});

const dailyData = await stocks.daily({ symbol: 'AAPL' });
const weeklyData = await stocks.weekly({ symbol: 'AAPL' });
const monthlyData = await stocks.monthly({ symbol: 'AAPL' });
```

### 🏢 Fundamental Analysis
```typescript
// Company financials and metrics
const overview = await fundamental.companyOverview({ symbol: 'AAPL' });
const income = await fundamental.incomeStatement({ symbol: 'AAPL' });
const balance = await fundamental.balanceSheet({ symbol: 'AAPL' });
const cashflow = await fundamental.cashFlow({ symbol: 'AAPL' });
const earnings = await fundamental.earnings({ symbol: 'AAPL' });
```

### 💱 Foreign Exchange
```typescript
// Currency exchange rates and data
const rate = await forex.exchangeRate({ 
  from_currency: 'USD', 
  to_currency: 'EUR' 
});

const fxIntraday = await forex.intraday({ 
  from_symbol: 'EUR', 
  to_symbol: 'USD', 
  interval: '5min' 
});
```

### ₿ Cryptocurrency
```typescript
// Digital currency market data
const btcDaily = await crypto.daily({ 
  symbol: 'BTC', 
  market: 'USD' 
});

const cryptoRate = await crypto.exchangeRate({ 
  from_currency: 'BTC', 
  to_currency: 'USD' 
});
```

### 📊 Technical Indicators
```typescript
// 50+ technical analysis indicators
const sma = await technicals.sma({ 
  symbol: 'AAPL', 
  interval: 'daily', 
  time_period: 20, 
  series_type: 'close' 
});

const rsi = await technicals.rsi({ 
  symbol: 'AAPL', 
  interval: 'daily', 
  time_period: 14, 
  series_type: 'close' 
});

const macd = await technicals.macd({ 
  symbol: 'AAPL', 
  interval: 'daily', 
  series_type: 'close' 
});
```

### 🏛️ Economic Indicators
```typescript
// Macroeconomic data
const gdp = await economic.realGDP();
const cpi = await economic.cpi();
const unemployment = await economic.unemployment();
const federalFunds = await economic.federalFundsRate();
```

### 🔍 Market Intelligence
```typescript
// News sentiment and market insights
const sentiment = await intelligence.newsSentiment({ 
  tickers: 'AAPL,TSLA' 
});

const topGainers = await intelligence.topGainersLosers();
```

### 🛢️ Commodities & Options
```typescript
// Commodity prices
const oil = await commodities.crudeOilWTI();
const gold = await commodities.copper();

// Options data
const optionsData = await options.realtime({ symbol: 'AAPL' });
```

### 🔧 Utilities
```typescript
// Search and lookup tools
const search = await util.symbolSearch({ keywords: 'Microsoft' });
const listing = await util.listingStatus();
```

## 📚 API Reference

### Available Endpoint Modules

| Module | Description | Key Methods |
|--------|-------------|-------------|
| **Stocks** | Real-time & historical stock data | `intraday()`, `daily()`, `weekly()`, `monthly()` |
| **Fundamental** | Company financials & metrics | `companyOverview()`, `incomeStatement()`, `balanceSheet()` |
| **Forex** | Foreign exchange rates | `exchangeRate()`, `intraday()`, `daily()` |
| **Crypto** | Cryptocurrency market data | `daily()`, `weekly()`, `monthly()`, `exchangeRate()` |
| **Technicals** | 50+ technical indicators | `sma()`, `rsi()`, `macd()`, `bbands()`, `adx()` |
| **Economic** | Macroeconomic indicators | `realGDP()`, `cpi()`, `unemployment()`, `inflation()` |
| **Intelligence** | Market news & sentiment | `newsSentiment()`, `topGainersLosers()` |
| **Options** | Options market data | `realtime()` |
| **Commodities** | Commodity prices | `crudeOilWTI()`, `naturalGas()`, `copper()` |
| **Util** | Search & utility functions | `symbolSearch()`, `listingStatus()` |

### Type Safety

All methods include comprehensive TypeScript definitions:

```typescript
// Full IntelliSense support
const data = await stocks.intraday({
  symbol: 'AAPL',     // string (required)
  interval: '5min',   // '1min' | '5min' | '15min' | '30min' | '60min'
  adjusted: true,     // boolean (optional)
  extended_hours: true, // boolean (optional)
  month: '2024-01',   // string (optional)
  outputsize: 'full'  // 'compact' | 'full' (optional)
});
```

## 🛡️ Error Handling

The SDK provides structured error handling for common API scenarios:

```typescript
try {
  const data = await stocks.daily({ symbol: 'INVALID' });
} catch (error) {
  if (error.message.includes('Invalid API call')) {
    console.log('Invalid symbol or API parameters');
  } else if (error.message.includes('API call frequency')) {
    console.log('Rate limit exceeded');
  }
}
```

## 🔑 Authentication

Get your free API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key):

```typescript
// Environment variable (recommended)
const client = new AlphaVantageClient({ 
  apiKey: process.env.ALPHA_VANTAGE_API_KEY 
});

// Direct assignment (for testing only)
const client = new AlphaVantageClient({ 
  apiKey: 'YOUR_API_KEY_HERE' 
});
```

## 📦 Requirements

- **Node.js**: 16.0+ 
- **TypeScript**: 4.5+ (for TypeScript projects)
- **Alpha Vantage API Key**: [Get yours free](https://www.alphavantage.co/support/#api-key)

## 🤝 Contributing

This package is part of a monorepo. Please refer to the [root README](../../README.md) for development guidelines and contribution instructions.

## 📄 License

MIT License - see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**[Alpha Vantage API](https://www.alphavantage.co/) • [Documentation](https://www.alphavantage.co/documentation/) • [Get API Key](https://www.alphavantage.co/support/#api-key)**

</div> 