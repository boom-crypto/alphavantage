import { AlphaVantageClient } from '../client';
import { 
  SMAParams, EMAParams, WMAParams, DEMAParams, TEMAParams, TRIMAParams, KAMAParams, T3Params,
  MAMAParams, MACDParams, MACDEXTParams, STOCHParams, STOCHFParams, RSIParams, STOCHRSIParams,
  WILLRParams, ADXParams, ADXRParams, APOParams, PPOParams, MOMParams, BOPParams, CCIParams,
  CMOParams, ROCParams, ROCRParams, AROONParams, AROONOSCParams, MFIParams, TRIXParams,
  ULTOSCParams, DXParams, MINUSDIParams, PLUSDIParams, MINUSDMParams, PLUSDMParams,
  BBANDSParams, MIDPOINTParams, MIDPRICEParams, SARParams, TRANGEParams, ATRParams,
  NATRParams, ADParams, ADOSCParams, OBVParams, HTTRENDLINEParams, HTSINEParams,
  HTTRENDMODEParams, HTDCPERIODParams, HTDCPHASEParams, HTPHASORParams,
  SingleValueIndicatorResponse, MACDResponse, STOCHResponse, BBANDSResponse,
  AROONResponse, MAMAResponse, HTSINEResponse, HTPHASORResponse
} from '../types/technicals';

export class Technicals {
  constructor(private client: AlphaVantageClient) {}

  async sma(params: SMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({
      function: 'SMA',
      ...params,
    });
  }

  async ema(params: EMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({
      function: 'EMA',
      ...params,
    });
  }

  async wma(params: WMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({
      function: 'WMA',
      ...params,
    });
  }

  async dema(params: DEMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'DEMA', ...params });
  }

  async tema(params: TEMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'TEMA', ...params });
  }

  async trima(params: TRIMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'TRIMA', ...params });
  }

  async kama(params: KAMAParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'KAMA', ...params });
  }

  async mama(params: MAMAParams): Promise<MAMAResponse> {
    return this.client.request({ function: 'MAMA', ...params });
  }

  async t3(params: T3Params): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'T3', ...params });
  }

  async macd(params: MACDParams): Promise<MACDResponse> {
    return this.client.request({ function: 'MACD', ...params });
  }

  async macdext(params: MACDEXTParams): Promise<MACDResponse> {
    return this.client.request({ function: 'MACDEXT', ...params });
  }

  async stoch(params: STOCHParams): Promise<STOCHResponse> {
    return this.client.request({ function: 'STOCH', ...params });
  }

  async stochf(params: STOCHFParams): Promise<STOCHResponse> {
    return this.client.request({ function: 'STOCHF', ...params });
  }

  async rsi(params: RSIParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'RSI', ...params });
  }

  async stochrsi(params: STOCHRSIParams): Promise<STOCHResponse> {
    return this.client.request({ function: 'STOCHRSI', ...params });
  }

  async willr(params: WILLRParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'WILLR', ...params });
  }

  async adx(params: ADXParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ADX', ...params });
  }

  async adxr(params: ADXRParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ADXR', ...params });
  }

  async apo(params: APOParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'APO', ...params });
  }

  async ppo(params: PPOParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'PPO', ...params });
  }

  async mom(params: MOMParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MOM', ...params });
  }

  async bop(params: BOPParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'BOP', ...params });
  }

  async cci(params: CCIParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'CCI', ...params });
  }

  async cmo(params: CMOParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'CMO', ...params });
  }

  async roc(params: ROCParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ROC', ...params });
  }

  async rocr(params: ROCRParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ROCR', ...params });
  }

  async aroon(params: AROONParams): Promise<AROONResponse> {
    return this.client.request({ function: 'AROON', ...params });
  }

  async aroonosc(params: AROONOSCParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'AROONOSC', ...params });
  }

  async mfi(params: MFIParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MFI', ...params });
  }

  async trix(params: TRIXParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'TRIX', ...params });
  }

  async ultosc(params: ULTOSCParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ULTOSC', ...params });
  }

  async dx(params: DXParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'DX', ...params });
  }

  async minus_di(params: MINUSDIParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MINUS_DI', ...params });
  }

  async plus_di(params: PLUSDIParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'PLUS_DI', ...params });
  }

  async minus_dm(params: MINUSDMParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MINUS_DM', ...params });
  }

  async plus_dm(params: PLUSDMParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'PLUS_DM', ...params });
  }

  async bbands(params: BBANDSParams): Promise<BBANDSResponse> {
    return this.client.request({ function: 'BBANDS', ...params });
  }

  async midpoint(params: MIDPOINTParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MIDPOINT', ...params });
  }

  async midprice(params: MIDPRICEParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'MIDPRICE', ...params });
  }

  async sar(params: SARParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'SAR', ...params });
  }

  async trange(params: TRANGEParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'TRANGE', ...params });
  }

  async atr(params: ATRParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ATR', ...params });
  }

  async natr(params: NATRParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'NATR', ...params });
  }

  async ad(params: ADParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'AD', ...params });
  }

  async adosc(params: ADOSCParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'ADOSC', ...params });
  }

  async obv(params: OBVParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'OBV', ...params });
  }

  async ht_trendline(params: HTTRENDLINEParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'HT_TRENDLINE', ...params });
  }

  async ht_sine(params: HTSINEParams): Promise<HTSINEResponse> {
    return this.client.request({ function: 'HT_SINE', ...params });
  }

  async ht_trendmode(params: HTTRENDMODEParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'HT_TRENDMODE', ...params });
  }

  async ht_dcperiod(params: HTDCPERIODParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'HT_DCPERIOD', ...params });
  }

  async ht_dcphase(params: HTDCPHASEParams): Promise<SingleValueIndicatorResponse> {
    return this.client.request({ function: 'HT_DCPHASE', ...params });
  }

  async ht_phasor(params: HTPHASORParams): Promise<HTPHASORResponse> {
    return this.client.request({ function: 'HT_PHASOR', ...params });
  }
} 