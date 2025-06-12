# 📈 Alpha Vantage TypeScript Monorepo

A comprehensive TypeScript monorepo built around the [Alpha Vantage API](https://www.alphavantage.co/documentation/#), featuring type-safe financial data access with strict TypeScript implementation and pnpm workspace management.

## 🏗️ Project Structure

```
.
├── packages/
│   ├── alphavantage-api/     # Core TypeScript SDK (@gviper/alphavantage-api)
│   └── alphavantage-mcp/     # MCP tools package (@gviper/alphavantage-mcp)
├── pnpm-workspace.yaml       # pnpm workspace configuration
├── package.json              # Root dependencies & workspace config
└── ...
```

## 📦 Packages

### 🔧 @gviper/alphavantage-api
Complete TypeScript wrapper for all [Alpha Vantage API](https://www.alphavantage.co/documentation/#) endpoints with full type safety and strict mode compliance.

### 🛠️ @gviper/alphavantage-mcp  
Model Context Protocol (MCP) tools built on top of the core `@gviper/alphavantage-api` package.

## 🚀 Quick Start

```bash
# Install all dependencies
pnpm install

# Work with specific packages
cd packages/alphavantage-api
cd packages/alphavantage-mcp
```

## 🔧 Development Stack

- **Package Manager**: pnpm with workspaces
- **Language**: TypeScript (strict mode enabled)
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest, ts-jest, @types/jest
- **Build Tools**: Turbo, ts-node, rimraf

## ⚡ Features

- ✅ **Type Safety**: Full TypeScript coverage with strict mode
- ✅ **Complete API Coverage**: All Alpha Vantage endpoints supported
- ✅ **Workspace Management**: Efficient pnpm monorepo setup
- ✅ **Modern Tooling**: Latest development tools and practices
- ✅ **MCP Integration**: Ready-to-use Model Context Protocol tools

---

*Built with ❤️ for the financial data community*
