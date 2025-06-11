# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript monorepo for Alpha Vantage API integration using pnpm workspaces. The project consists of two main packages:

- **alphavantage-api**: Core TypeScript SDK that wraps all Alpha Vantage API endpoints with type safety
- **alphavantage-mcp**: MCP (Model Context Protocol) tools built on top of the API SDK

## Development Commands

```bash
# Install dependencies for all packages
pnpm install

# Work in specific package
cd packages/alphavantage-api
cd packages/alphavantage-mcp
```

## Architecture

### alphavantage-api Package
- **Client**: `src/client.ts` - Core HTTP client with API key authentication
- **Endpoints**: `src/endpoints/` - Individual API endpoint implementations organized by category:
  - stocks.ts, forex.ts, crypto.ts, technicals.ts, fundamental.ts
  - economic.ts, util.ts, options.ts, commodities.ts, intelligence.ts
- **Types**: `src/types/` - TypeScript type definitions mirroring endpoint structure
- **Entry**: `src/index.ts` - Main export file that exposes all endpoints and client

The API client uses node-fetch for HTTP requests and includes comprehensive error handling for Alpha Vantage API responses.

### alphavantage-mcp Package
- Depends on alphavantage-api package (workspace dependency)
- Provides MCP tools for financial data access
- Currently minimal implementation in `src/index.ts`

## TypeScript Configuration

- Strict mode enabled across all packages
- Target: ES2016, Module: CommonJS
- Each package has its own tsconfig.json
- Main API package outputs to dist/ with type definitions

## Package Management

- Uses pnpm workspaces with packages/* pattern
- Workspace dependencies: alphavantage-mcp depends on alphavantage-api using "*" version
- Consistent packageManager field: "pnpm@10.11.0"