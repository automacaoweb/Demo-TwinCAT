var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.GaugeValueFormatter=function(value,maxDecimals=1/0){return null==value?"":(isFinite(maxDecimals)||(maxDecimals=3),value.toFixed(maxDecimals))}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("GaugeValueFormatter","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.GaugeValueFormatter);