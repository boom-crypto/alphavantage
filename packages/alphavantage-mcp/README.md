# Alpha Vantage MCP Server

A Model Context Protocol (MCP) server that provides access to Alpha Vantage financial data API. This server exposes Alpha Vantage's comprehensive financial data through MCP tools, making it easy to integrate financial data into AI applications.

## Features

- **Stock Data**: Real-time and historical stock data (intraday, daily, weekly, monthly)
- **Forex Data**: Currency exchange rates and forex time series
- **Cryptocurrency Data**: Digital currency prices and historical data
- **Technical Indicators**: 70+ technical analysis indicators (SMA, EMA, MACD, RSI, Bollinger Bands, etc.)
- **Fundamental Analysis**: Company overviews, financial statements, earnings data
- **Economic Indicators**: GDP, inflation, unemployment, treasury yields, etc.
- **Commodities**: Crude oil, natural gas, precious metals, agricultural products
- **Market Intelligence**: News sentiment, earnings transcripts, insider transactions
- **Utilities**: Symbol search, market status

## Installation

```bash
npm install alphavantage-mcp
```

## Configuration

Set your Alpha Vantage API key as an environment variable:

```bash
export ALPHAVANTAGE_API_KEY="your_api_key_here"
```

Get your free API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key).

## Usage

### As a standalone MCP server

```bash
npx alphavantage-mcp
```

### In your MCP client configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "alphavantage": {
      "command": "npx",
      "args": ["alphavantage-mcp"],
      "env": {
        "ALPHAVANTAGE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Available Tools

### Stock Data Tools

- `av_stocks_intraday` - Get intraday stock data
- `av_stocks_daily` - Get daily stock data
- `av_stocks_daily_adjusted` - Get daily adjusted stock data
- `av_stocks_weekly` - Get weekly stock data
- `av_stocks_weekly_adjusted` - Get weekly adjusted stock data
- `av_stocks_monthly` - Get monthly stock data
- `av_stocks_monthly_adjusted` - Get monthly adjusted stock data
- `av_stocks_quote` - Get latest stock quote
- `av_stocks_search` - Search for stocks by keywords

### Forex Tools

- `av_forex_intraday` - Get intraday forex data
- `av_forex_daily` - Get daily forex data
- `av_forex_weekly` - Get weekly forex data
- `av_forex_monthly` - Get monthly forex data
- `av_forex_exchange_rate` - Get real-time exchange rates

### Cryptocurrency Tools

- `av_crypto_intraday` - Get intraday crypto data
- `av_crypto_daily` - Get daily crypto data
- `av_crypto_weekly` - Get weekly crypto data
- `av_crypto_monthly` - Get monthly crypto data

### Technical Analysis Tools

- `av_technical_sma` - Simple Moving Average
- `av_technical_ema` - Exponential Moving Average
- `av_technical_wma` - Weighted Moving Average
- `av_technical_macd` - MACD indicator
- `av_technical_stoch` - Stochastic Oscillator
- `av_technical_rsi` - Relative Strength Index
- `av_technical_bbands` - Bollinger Bands

### Fundamental Analysis Tools

- `av_fundamental_company_overview` - Company overview and key metrics
- `av_fundamental_income_statement` - Income statements
- `av_fundamental_balance_sheet` - Balance sheets
- `av_fundamental_cash_flow` - Cash flow statements
- `av_fundamental_earnings` - Earnings data
- `av_fundamental_listing_status` - Listing status of stocks
- `av_fundamental_earnings_calendar` - Upcoming earnings
- `av_fundamental_ipo_calendar` - Upcoming IPOs
- `av_fundamental_dividend_calendar` - Upcoming dividends
- `av_fundamental_splits_calendar` - Upcoming stock splits
- `av_fundamental_etf_profile` - ETF profile information
- `av_fundamental_etf_holdings` - ETF holdings

### Economic Data Tools

- `av_economic_real_gdp` - Real GDP data
- `av_economic_real_gdp_per_capita` - Real GDP per capita
- `av_economic_treasury_yield` - Treasury yield curves
- `av_economic_fed_funds_rate` - Federal funds rate
- `av_economic_cpi` - Consumer Price Index
- `av_economic_inflation` - Inflation rates
- `av_economic_retail_sales` - Retail sales data
- `av_economic_durable_goods` - Durable goods orders
- `av_economic_unemployment_rate` - Unemployment rate
- `av_economic_nonfarm_payroll` - Nonfarm payroll data

### Commodities Tools

- `av_commodities_crude_oil_wti` - WTI crude oil prices
- `av_commodities_crude_oil_brent` - Brent crude oil prices
- `av_commodities_natural_gas` - Natural gas prices
- `av_commodities_copper` - Copper prices
- `av_commodities_aluminum` - Aluminum prices
- `av_commodities_wheat` - Wheat prices
- `av_commodities_corn` - Corn prices
- `av_commodities_cotton` - Cotton prices
- `av_commodities_sugar` - Sugar prices
- `av_commodities_coffee` - Coffee prices
- `av_commodities_global_index` - Global commodities index

### Market Intelligence Tools

- `av_intelligence_news_sentiment` - News sentiment analysis
- `av_intelligence_earnings_call_transcript` - Earnings call transcripts
- `av_intelligence_top_gainers_losers` - Top gainers and losers
- `av_intelligence_insider_transactions` - Insider trading data
- `av_intelligence_analytics_fixed_window` - Analytics with fixed time window
- `av_intelligence_analytics_sliding_window` - Analytics with sliding time window

### Utility Tools

- `av_util_symbol_search` - Search for symbols
- `av_util_market_status` - Current market status

## Example Usage

### Get Apple stock quote

```json
{
  "tool": "av_stocks_quote",
  "arguments": {
    "symbol": "AAPL"
  }
}
```

### Get EUR/USD exchange rate

```json
{
  "tool": "av_forex_exchange_rate",
  "arguments": {
    "from_currency": "EUR",
    "to_currency": "USD"
  }
}
```

### Calculate RSI for Tesla

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

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start

# Development mode (build + start)
npm run dev
```

## License

MIT

## API Rate Limits

Alpha Vantage has rate limits depending on your subscription:
- Free tier: 25 requests per day
- Paid tiers: Various higher limits

Please refer to [Alpha Vantage's documentation](https://www.alphavantage.co/support/#api-key) for current rate limits.

## Support

For issues with this MCP server, please open an issue on GitHub.
For Alpha Vantage API support, please contact [Alpha Vantage support](https://www.alphavantage.co/support/).