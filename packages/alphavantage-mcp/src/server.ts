#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { AlphaVantage } from '@gviper/alphavantage-api';

import { createStocksTools } from './tools/stocks.js';
import { createForexTools } from './tools/forex.js';
import { createCryptoTools } from './tools/crypto.js';
import { createTechnicalTools } from './tools/technicals.js';
import { createFundamentalTools } from './tools/fundamental.js';
import { createEconomicTools } from './tools/economic.js';
import { createCommoditiesTools } from './tools/commodities.js';
import { createIntelligenceTools } from './tools/intelligence.js';
import { createUtilTools } from './tools/util.js';

class AlphaVantageMCPServer {
  private server: McpServer;
  private alphaVantage: AlphaVantage;

  constructor() {
    this.server = new McpServer({
      name: 'alphavantage-mcp',
      version: '1.0.0',
    });

    // Initialize Alpha Vantage client
    const apiKey = process.env.ALPHAVANTAGE_API_KEY;
    if (!apiKey) {
      throw new Error('ALPHAVANTAGE_API_KEY environment variable is required');
    }

    this.alphaVantage = new AlphaVantage({ apiKey });
    this.setupTools();
  }

  private setupTools() {
    // Register all tool categories
    const toolCategories = [
      createStocksTools(this.alphaVantage.stocks),
      createForexTools(this.alphaVantage.forex),
      createCryptoTools(this.alphaVantage.crypto),
      createTechnicalTools(this.alphaVantage.technicals),
      createFundamentalTools(this.alphaVantage.fundamental),
      createEconomicTools(this.alphaVantage.economic),
      createCommoditiesTools(this.alphaVantage.commodities),
      createIntelligenceTools(this.alphaVantage.intelligence),
      createUtilTools(this.alphaVantage.util),
    ];

    // Register all tools using the simple API
    for (const tools of toolCategories) {
      for (const [name, tool] of Object.entries(tools)) {
        this.server.tool(
          name,
          tool.description,
          tool.inputSchema.shape,
          async (args: z.infer<typeof tool.inputSchema>) => {
            try {
              const result = await tool.handler(args);
              return {
                content: [
                  {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2),
                  },
                ],
              };
            } catch (error) {
              const errorMessage = error instanceof Error ? error.message : String(error);
              throw new Error(`Tool execution failed: ${errorMessage}`);
            }
          }
        );
      }
    }
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Alpha Vantage MCP Server started');
  }
}

export { AlphaVantageMCPServer };