# alphavantage Monorepo

本项目为基于 [alphavantage.co API](https://www.alphavantage.co/documentation/#) 的 TypeScript 多包管理（monorepo）项目，使用 pnpm 进行多包管理，严格启用 TypeScript 严格模式。

## 目录结构

```
.
├── packages/
│   ├── alphavantage-api/   # 封装 alphavantage.co 全部 API 协议的 TypeScript 包
│   └── alphavantage-mcp/   # 基于 alphavantage-api 的 mcp 工具包
├── pnpm-workspace.yaml     # pnpm 工作区配置
├── package.json            # 根依赖与 workspace 配置
└── ...
```

## 各包说明

- **alphavantage-api**：
  - 封装 [alphavantage.co](https://www.alphavantage.co/documentation/#) 所有 API 协议，类型安全，严格模式。
- **alphavantage-mcp**：
  - 基于 `alphavantage-api` 的业务工具包。

## 开发依赖
- pnpm
- typescript（严格模式）
- eslint, prettier
- jest, ts-jest, @types/jest
- turbo, ts-node, rimraf

## 初始化步骤
1. `pnpm install` 安装依赖
2. 各包下已启用 TypeScript 严格模式

---
