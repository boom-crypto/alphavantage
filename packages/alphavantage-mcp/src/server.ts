#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { AlphaVantage } from 'alphavantage-api';

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
  private server: Server;
  private alphaVantage: AlphaVantage;
  private tools: Map<string, any> = new Map();

  constructor() {
    this.server = new Server(
      {
        name: 'alphavantage-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    // Initialize Alpha Vantage client
    const apiKey = process.env.ALPHAVANTAGE_API_KEY;
    if (!apiKey) {
      throw new Error('ALPHAVANTAGE_API_KEY environment variable is required');
    }

    this.alphaVantage = new AlphaVantage({ apiKey });
    this.setupTools();
    this.setupHandlers();
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

    // Flatten and register all tools
    for (const tools of toolCategories) {
      for (const [name, tool] of Object.entries(tools)) {
        this.tools.set(name, tool);
      }
    }
  }

  private setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = Array.from(this.tools.entries()).map(([name, tool]) => ({
        name,
        description: tool.description,
        inputSchema: tool.inputSchema,
      }));

      return { tools };
    });

    // Handle tool execution
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      const tool = this.tools.get(name);
      if (!tool) {
        throw new Error(`Unknown tool: ${name}`);
      }

      try {
        const result = await tool.handler(args || {});
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`Tool execution failed: ${errorMessage}`);
      }
    });
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Alpha Vantage MCP Server started');
  }
}

// Start the server
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new AlphaVantageMCPServer();
  server.start().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}

export { AlphaVantageMCPServer };