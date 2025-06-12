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

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { AlphaVantageMCPServer };