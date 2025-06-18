# 🔌 Alpha Vantage MCP Server

[![npm version](https://img.shields.io/npm/v/@gviper/alphavantage-mcp?style=flat-square)](https://www.npmjs.com/package/@gviper/alphavantage-mcp)
[![MCP](https://img.shields.io/badge/MCP-Compatible-blue?style=flat-square)](https://modelcontextprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

> ⚠️ **IMPORTANT NOTICE**: This MCP server was generated using Claude Code AI. While most functionality has been verified, please thoroughly test all MCP tools in your specific environment before production deployment. Users should validate data accuracy and server stability according to their requirements.

A professional Model Context Protocol (MCP) server providing seamless access to Alpha Vantage's comprehensive financial data API. Designed for AI applications requiring real-time market data, technical analysis, and financial intelligence.

## 🌟 Key Features

- **📊 Complete Market Coverage** — 80+ financial data endpoints in one MCP server
- **🔌 Plug & Play** — Instant integration with any MCP-compatible AI system
- **⚡ Real-time Data** — Live stock prices, forex rates, and market intelligence
- **🔍 Technical Analysis** — 70+ indicators including MACD, RSI, Bollinger Bands
- **🏢 Fundamental Data** — Company financials, earnings, and economic indicators
- **🛡️ Enterprise Ready** — Robust error handling and rate limit management

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @gviper/alphavantage-mcp

# pnpm  
pnpm add @gviper/alphavantage-mcp

# yarn
yarn add @gviper/alphavantage-mcp
```

### Setup & Configuration

1. **Get your API key** from [Alpha Vantage](https://www.alphavantage.co/support/#api-key) (free tier available)

2. **Set environment variable**:
   ```bash
   export ALPHAVANTAGE_API_KEY="your_api_key_here"
   ```

3. **Choose your deployment method**:

#### Option A: Standalone Server
```bash
npx @gviper/alphavantage-mcp
```

#### Option B: MCP Client Integration
Add to your MCP client configuration (e.g., Claude Desktop):

```json
{
  "mcpServers": {
    "alphavantage": {
      "command": "npx",
      "args": ["@gviper/alphavantage-mcp"],
      "env": {
        "ALPHAVANTAGE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## 🛠️ Available MCP Tools

### 📊 Stock Market Data
| Tool | Description |
|------|-------------|
| `av_stocks_intraday` | Real-time intraday stock prices |
| `av_stocks_daily` | Daily stock data with OHLC values |
| `av_stocks_daily_adjusted` | Daily adjusted stock data |
| `av_stocks_weekly` | Weekly stock data |
| `av_stocks_monthly` | Monthly stock data |
| `av_stocks_quote` | Latest stock quote |
| `av_stocks_search` | Search stocks by keywords |

### 💱 Foreign Exchange
| Tool | Description |
|------|-------------|
| `av_forex_intraday` | Intraday forex data |
| `av_forex_daily` | Daily forex data |
| `av_forex_exchange_rate` | Real-time exchange rates |

### ₿ Cryptocurrency
| Tool | Description |
|------|-------------|
| `av_crypto_intraday` | Intraday crypto data |
| `av_crypto_daily` | Daily crypto data |
| `av_crypto_weekly` | Weekly crypto data |

### 📈 Technical Analysis (20+ Indicators)
| Tool | Description |
|------|-------------|
| `av_technical_sma` | Simple Moving Average |
| `av_technical_ema` | Exponential Moving Average |
| `av_technical_macd` | MACD indicator |
| `av_technical_rsi` | Relative Strength Index |
| `av_technical_bbands` | Bollinger Bands |
| `av_technical_stoch` | Stochastic Oscillator |
| `av_technical_adx` | Average Directional Index |

### 🏢 Fundamental Analysis
| Tool | Description |
|------|-------------|
| `av_fundamental_company_overview` | Company overview & key metrics |
| `av_fundamental_income_statement` | Income statements |
| `av_fundamental_balance_sheet` | Balance sheets |
| `av_fundamental_cash_flow` | Cash flow statements |
| `av_fundamental_earnings` | Earnings data |
| `av_fundamental_earnings_calendar` | Upcoming earnings |
| `av_fundamental_ipo_calendar` | Upcoming IPOs |
| `av_fundamental_dividend_calendar` | Upcoming dividends |

### 🏛️ Economic Indicators
| Tool | Description |
|------|-------------|
| `av_economic_real_gdp` | Real GDP data |
| `av_economic_treasury_yield` | Treasury yield curves |
| `av_economic_fed_funds_rate` | Federal funds rate |
| `av_economic_cpi` | Consumer Price Index |
| `av_economic_inflation` | Inflation rates |
| `av_economic_unemployment_rate` | Unemployment rate |

### 🛢️ Commodities
| Tool | Description |
|------|-------------|
| `av_commodities_crude_oil_wti` | WTI crude oil prices |
| `av_commodities_crude_oil_brent` | Brent crude oil prices |
| `av_commodities_natural_gas` | Natural gas prices |
| `av_commodities_copper` | Copper prices |
| `av_commodities_wheat` | Wheat prices |
| `av_commodities_corn` | Corn prices |

### 🔍 Market Intelligence
| Tool | Description |
|------|-------------|
| `av_intelligence_news_sentiment` | News sentiment analysis |
| `av_intelligence_top_gainers_losers` | Top gainers and losers |
| `av_intelligence_insider_transactions` | Insider trading data |
| `av_intelligence_earnings_call_transcript` | Earnings call transcripts |

### 🔧 Utilities
| Tool | Description |
|------|-------------|
| `av_util_symbol_search` | Search for symbols |
| `av_util_market_status` | Current market status |

## 💡 Usage Examples

### Stock Market Analysis
```json
{
  "tool": "av_stocks_quote",
  "arguments": {
    "symbol": "AAPL"
  }
}
```

### Currency Exchange
```json
{
  "tool": "av_forex_exchange_rate",
  "arguments": {
    "from_currency": "EUR",
    "to_currency": "USD"
  }
}
```

### Technical Analysis
```json
{
  "tool": "av_technical_rsi",
  "arguments": {
    "symbol": "TSLA",
    "interval": "daily",
    "time_period": 14,
    "series_type": "close"
  }
}
```

### Company Fundamentals
```json
{
  "tool": "av_fundamental_company_overview",
  "arguments": {
    "symbol": "MSFT"
  }
}
```

### Economic Data
```json
{
  "tool": "av_economic_cpi",
  "arguments": {}
}
```

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Start the server
pnpm start

# Development mode
pnpm dev
```

## ⚡ Rate Limits & Performance

Alpha Vantage API limits vary by subscription tier:

| Tier | Requests/Day | Requests/Minute |
|------|--------------|-----------------|
| **Free** | 25 | 5 |
| **Premium** | 1,200+ | 75+ |
| **Enterprise** | Unlimited | Custom |

> 💡 **Tip**: The MCP server includes intelligent rate limiting and error handling to maximize your API quota efficiency.

## 📦 Requirements

- **Node.js**: 18.0+
- **Alpha Vantage API Key**: [Get yours free](https://www.alphavantage.co/support/#api-key)
- **MCP Client**: Claude Desktop, Continue, or any MCP-compatible application

## 🤝 Contributing

This package is part of a monorepo. Please refer to the [root README](../../README.md) for development guidelines and contribution instructions.

## 📄 License

MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- **MCP Server Issues**: [Open GitHub Issue](https://github.com/your-repo/issues)
- **Alpha Vantage API**: [Contact Support](https://www.alphavantage.co/support/)
- **MCP Protocol**: [Model Context Protocol Docs](https://modelcontextprotocol.io/)

---

<div align="center">

**[Alpha Vantage API](https://www.alphavantage.co/) • [MCP Protocol](https://modelcontextprotocol.io/) • [Get API Key](https://www.alphavantage.co/support/#api-key)**

</div>