#!/usr/bin/env node

import { AlphaVantageMCPServer } from './server.js';

async function main() {
  try {
    const server = new AlphaVantageMCPServer();
    await server.start();
  } catch (error) {
    console.error('Failed to start Alpha Vantage MCP Server:', error);
    process.exit(1);
  }
}

main();