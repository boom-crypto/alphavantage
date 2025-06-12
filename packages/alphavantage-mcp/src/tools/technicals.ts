import { z } from 'zod';
import { Technicals } from 'alphavantage-api';

// Base schema for most technical indicators
const TechnicalIndicatorBaseSchema = z.object({
  symbol: z.string().describe('The name of the security of your choice'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly']).describe('Time interval between two consecutive data points'),
  time_period: z.number().int().min(1).describe('Number of data points used to calculate each indicator value'),
  series_type: z.enum(['close', 'open', 'high', 'low']).describe('The desired price type in the time series'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const MACDParamsSchema = z.object({
  symbol: z.string().describe('The name of the security of your choice'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly']).describe('Time interval between two consecutive data points'),
  series_type: z.enum(['close', 'open', 'high', 'low']).describe('The desired price type in the time series'),
  fastperiod: z.number().int().optional().describe('Positive integer for the fast EMA. By default, fastperiod=12'),
  slowperiod: z.number().int().optional().describe('Positive integer for the slow EMA. By default, slowperiod=26'),
  signalperiod: z.number().int().optional().describe('Positive integer for the signal EMA. By default, signalperiod=9'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const STOCHParamsSchema = z.object({
  symbol: z.string().describe('The name of the security of your choice'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly']).describe('Time interval between two consecutive data points'),
  fastkperiod: z.number().int().optional().describe('The time period of the fastk moving average. By default, fastkperiod=5'),
  slowkperiod: z.number().int().optional().describe('The time period of the slowk moving average. By default, slowkperiod=3'),
  slowdperiod: z.number().int().optional().describe('The time period of the slowd moving average. By default, slowdperiod=3'),
  slowkmatype: z.number().int().optional().describe('Moving average type for the slowk moving average. By default, slowkmatype=0'),
  slowdmatype: z.number().int().optional().describe('Moving average type for the slowd moving average. By default, slowdmatype=0'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

const BBANDSParamsSchema = z.object({
  symbol: z.string().describe('The name of the security of your choice'),
  interval: z.enum(['1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly']).describe('Time interval between two consecutive data points'),
  time_period: z.number().int().min(1).describe('Number of data points used to calculate each indicator value'),
  series_type: z.enum(['close', 'open', 'high', 'low']).describe('The desired price type in the time series'),
  nbdevup: z.number().optional().describe('The standard deviation multiplier of the upper band. By default, nbdevup=2'),
  nbdevdn: z.number().optional().describe('The standard deviation multiplier of the lower band. By default, nbdevdn=2'),
  matype: z.number().int().optional().describe('Moving average type. By default, matype=0 (Simple Moving Average)'),
  datatype: z.enum(['json', 'csv']).optional().describe('By default, datatype=json'),
});

export function createTechnicalTools(technicals: Technicals) {
  return {
    'av_technical_sma': {
      description: 'Calculate Simple Moving Average (SMA) for a security',
      inputSchema: TechnicalIndicatorBaseSchema,
      handler: async (params: z.infer<typeof TechnicalIndicatorBaseSchema>) => {
        return await technicals.sma(params);
      },
    },

    'av_technical_ema': {
      description: 'Calculate Exponential Moving Average (EMA) for a security',
      inputSchema: TechnicalIndicatorBaseSchema,
      handler: async (params: z.infer<typeof TechnicalIndicatorBaseSchema>) => {
        return await technicals.ema(params);
      },
    },

    'av_technical_wma': {
      description: 'Calculate Weighted Moving Average (WMA) for a security',
      inputSchema: TechnicalIndicatorBaseSchema,
      handler: async (params: z.infer<typeof TechnicalIndicatorBaseSchema>) => {
        return await technicals.wma(params);
      },
    },

    'av_technical_macd': {
      description: 'Calculate Moving Average Convergence Divergence (MACD) for a security',
      inputSchema: MACDParamsSchema,
      handler: async (params: z.infer<typeof MACDParamsSchema>) => {
        return await technicals.macd(params);
      },
    },

    'av_technical_stoch': {
      description: 'Calculate Stochastic Oscillator for a security',
      inputSchema: STOCHParamsSchema,
      handler: async (params: z.infer<typeof STOCHParamsSchema>) => {
        return await technicals.stoch(params);
      },
    },

    'av_technical_rsi': {
      description: 'Calculate Relative Strength Index (RSI) for a security',
      inputSchema: TechnicalIndicatorBaseSchema,
      handler: async (params: z.infer<typeof TechnicalIndicatorBaseSchema>) => {
        return await technicals.rsi(params);
      },
    },

    'av_technical_bbands': {
      description: 'Calculate Bollinger Bands (BBANDS) for a security',
      inputSchema: BBANDSParamsSchema,
      handler: async (params: z.infer<typeof BBANDSParamsSchema>) => {
        return await technicals.bbands(params);
      },
    },
  };
}