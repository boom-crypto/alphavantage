import { DataType, Interval } from './common';

// Base interfaces
export interface TechnicalIndicatorBase {
  symbol: string;
  interval: Interval;
  time_period?: number;
  series_type?: 'close' | 'open' | 'high' | 'low';
  datatype?: DataType;
}

// Parameter types for different technical indicators
export interface SMAParams extends TechnicalIndicatorBase {}
export interface EMAParams extends TechnicalIndicatorBase {}
export interface WMAParams extends TechnicalIndicatorBase {}
export interface DEMAParams extends TechnicalIndicatorBase {}
export interface TEMAParams extends TechnicalIndicatorBase {}
export interface TRIMAParams extends TechnicalIndicatorBase {}
export interface KAMAParams extends TechnicalIndicatorBase {}
export interface T3Params extends TechnicalIndicatorBase {}
export interface RSIParams extends TechnicalIndicatorBase {}
export interface WILLRParams extends TechnicalIndicatorBase {}
export interface ADXParams extends TechnicalIndicatorBase {}
export interface ADXRParams extends TechnicalIndicatorBase {}
export interface MOMParams extends TechnicalIndicatorBase {}
export interface BOPParams extends TechnicalIndicatorBase {}
export interface CCIParams extends TechnicalIndicatorBase {}
export interface CMOParams extends TechnicalIndicatorBase {}
export interface ROCParams extends TechnicalIndicatorBase {}
export interface ROCRParams extends TechnicalIndicatorBase {}
export interface MFIParams extends TechnicalIndicatorBase {}
export interface TRIXParams extends TechnicalIndicatorBase {}
export interface DXParams extends TechnicalIndicatorBase {}
export interface MINUSDIParams extends TechnicalIndicatorBase {}
export interface PLUSDIParams extends TechnicalIndicatorBase {}
export interface MINUSDMParams extends TechnicalIndicatorBase {}
export interface PLUSDMParams extends TechnicalIndicatorBase {}
export interface MIDPOINTParams extends TechnicalIndicatorBase {}
export interface MIDPRICEParams extends TechnicalIndicatorBase {}
export interface TRANGEParams extends TechnicalIndicatorBase {}
export interface ATRParams extends TechnicalIndicatorBase {}
export interface NATRParams extends TechnicalIndicatorBase {}
export interface ADParams extends TechnicalIndicatorBase {}
export interface OBVParams extends TechnicalIndicatorBase {}
export interface HTTRENDLINEParams extends TechnicalIndicatorBase {}
export interface HTSINEParams extends TechnicalIndicatorBase {}
export interface HTTRENDMODEParams extends TechnicalIndicatorBase {}
export interface HTDCPERIODParams extends TechnicalIndicatorBase {}
export interface HTDCPHASEParams extends TechnicalIndicatorBase {}
export interface HTPHASORParams extends TechnicalIndicatorBase {}

// Extended parameter types with additional options
export interface MAMAParams extends TechnicalIndicatorBase {
  fastlimit?: number;
  slowlimit?: number;
}

export interface MACDParams extends TechnicalIndicatorBase {
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
}

export interface MACDEXTParams extends TechnicalIndicatorBase {
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
  fastmatype?: number;
  slowmatype?: number;
  signalmatype?: number;
}

export interface STOCHParams extends TechnicalIndicatorBase {
  fastkperiod?: number;
  slowkperiod?: number;
  slowdperiod?: number;
  slowkmatype?: number;
  slowdmatype?: number;
}

export interface STOCHFParams extends TechnicalIndicatorBase {
  fastkperiod?: number;
  fastdperiod?: number;
  fastdmatype?: number;
}

export interface STOCHRSIParams extends TechnicalIndicatorBase {
  time_period?: number;
  fastkperiod?: number;
  fastdperiod?: number;
  fastdmatype?: number;
}

export interface APOParams extends TechnicalIndicatorBase {
  fastperiod?: number;
  slowperiod?: number;
  matype?: number;
}

export interface PPOParams extends TechnicalIndicatorBase {
  fastperiod?: number;
  slowperiod?: number;
  matype?: number;
}

export interface AROONParams extends TechnicalIndicatorBase {
  time_period?: number;
}

export interface AROONOSCParams extends TechnicalIndicatorBase {
  time_period?: number;
}

export interface ULTOSCParams extends TechnicalIndicatorBase {
  timeperiod1?: number;
  timeperiod2?: number;
  timeperiod3?: number;
}

export interface BBANDSParams extends TechnicalIndicatorBase {
  time_period?: number;
  nbdevup?: number;
  nbdevdn?: number;
}

export interface SARParams extends TechnicalIndicatorBase {
  acceleration?: number;
  maximum?: number;
}

export interface ADOSCParams extends TechnicalIndicatorBase {
  fastperiod?: number;
  slowperiod?: number;
}

// Response type interfaces
export interface TechnicalIndicatorMetaData {
  '1: Symbol': string;
  '2: Indicator': string;
  '3: Last Refreshed': string;
  '4: Interval': string;
  '5: Time Period': number;
  '6: Series Type': string;
  '7: Time Zone': string;
}

export interface SingleValueIndicatorResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  [key: string]: Record<string, { [indicatorName: string]: string }> | TechnicalIndicatorMetaData;
}

export interface MACDResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: MACD': Record<string, {
    MACD_Hist: string;
    MACD: string;
    MACD_Signal: string;
  }>;
}

export interface STOCHResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: STOCH': Record<string, {
    SlowK: string;
    SlowD: string;
  }>;
}

export interface BBANDSResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: BBANDS': Record<string, {
    'Real Lower Band': string;
    'Real Middle Band': string;
    'Real Upper Band': string;
  }>;
}

export interface AROONResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: AROON': Record<string, {
    'Aroon Down': string;
    'Aroon Up': string;
  }>;
}

export interface MAMAResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: MAMA': Record<string, {
    FAMA: string;
    MAMA: string;
  }>;
}

export interface HTSINEResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: HT_SINE': Record<string, {
    SINE: string;
    LEADSINE: string;
  }>;
}

export interface HTPHASORResponse {
  'Meta Data': TechnicalIndicatorMetaData;
  'Technical Analysis: HT_PHASOR': Record<string, {
    PHASE: string;
    QUADRATURE: string;
  }>;
} 