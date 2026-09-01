import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';
import { TrendingUp, Activity, PieChart, Shield } from 'lucide-react';

interface TradeData {
  day: string;
  equity: number;
  pnl: number;
  trades: number;
}

const demoData1W: TradeData[] = [
  { day: 'Mon', equity: 5000, pnl: 0, trades: 2 },
  { day: 'Tue', equity: 5120, pnl: 120, trades: 3 },
  { day: 'Wed', equity: 5080, pnl: -40, trades: 1 },
  { day: 'Thu', equity: 5240, pnl: 160, trades: 4 },
  { day: 'Fri', equity: 5353, pnl: 113, trades: 2 },
];

const demoData1M: TradeData[] = [
  { day: 'W1', equity: 5000, pnl: 0, trades: 8 },
  { day: 'W2', equity: 5150, pnl: 150, trades: 12 },
  { day: 'W3', equity: 5110, pnl: -40, trades: 6 },
  { day: 'W4', equity: 5353, pnl: 243, trades: 10 },
];

export const TradeSpherePreview: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'1W' | '1M'>('1W');
  const [activeMetric, setActiveMetric] = useState<'equity' | 'pnl'>('equity');

  const chartData = timeframe === '1W' ? demoData1W : demoData1M;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md relative overflow-hidden">
      
      {/* SaaS App Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold font-mono text-xs">
            TS
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider flex items-center gap-2">
              TRADESPHERE ANALYTICS ENGINE
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                PRO DEMO
              </span>
            </h4>
            <p className="text-[10px] font-mono text-slate-500 font-semibold">
              EMOTIONAL & STATISTICAL TRADING JOURNAL
            </p>
          </div>
        </div>

        {/* Clear Mandatory Disclaimer Label */}
        <div className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
          <span>INTERACTIVE DEMO PREVIEW</span>
        </div>
      </div>

      {/* Metric Cards Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center justify-between">
            <span>DISCIPLINE SCORE</span>
            <Shield size={12} className="text-emerald-600" />
          </div>
          <div className="text-base font-bold text-slate-900 font-mono">94 / 100</div>
          <div className="text-[9px] font-mono text-emerald-700 font-bold">98% Rule Adherence</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center justify-between">
            <span>WIN RATE</span>
            <PieChart size={12} className="text-teal-600" />
          </div>
          <div className="text-base font-bold text-slate-900 font-mono">68.5%</div>
          <div className="text-[9px] font-mono text-slate-500 font-semibold">Sample: 12 Trades</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center justify-between">
            <span>AVG RISK-REWARD</span>
            <TrendingUp size={12} className="text-emerald-600" />
          </div>
          <div className="text-base font-bold text-slate-900 font-mono">1 : 2.45</div>
          <div className="text-[9px] font-mono text-emerald-700 font-bold">Expectancy +1.6R</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center justify-between">
            <span>MAX DRAWDOWN</span>
            <Activity size={12} className="text-amber-600" />
          </div>
          <div className="text-base font-bold text-slate-900 font-mono">1.2%</div>
          <div className="text-[9px] font-mono text-amber-700 font-bold">Controlled Limit</div>
        </div>

      </div>

      {/* Chart Control Toolbar */}
      <div className="flex items-center justify-between my-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMetric('equity')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
              activeMetric === 'equity'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Equity Growth
          </button>
          <button
            onClick={() => setActiveMetric('pnl')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
              activeMetric === 'pnl'
                ? 'bg-teal-100 text-teal-800 border border-teal-300'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Session P&L ($)
          </button>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setTimeframe('1W')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              timeframe === '1W' ? 'bg-emerald-600 text-white' : 'text-slate-600'
            }`}
          >
            1W
          </button>
          <button
            onClick={() => setTimeframe('1M')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              timeframe === '1M' ? 'bg-emerald-600 text-white' : 'text-slate-600'
            }`}
          >
            1M
          </button>
        </div>
      </div>

      {/* Recharts Canvas */}
      <div className="h-48 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#059669" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0D9488" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.8} />
            <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 10, fill: '#475569' }} />
            <YAxis stroke="#64748b" tick={{ fontSize: 10, fill: '#475569' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#cbd5e1',
                borderRadius: '8px',
                fontSize: '11px',
                color: '#0f172a',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}
            />
            {activeMetric === 'equity' ? (
              <Area
                type="monotone"
                dataKey="equity"
                stroke="#059669"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#equityGrad)"
              />
            ) : (
              <Area
                type="monotone"
                dataKey="pnl"
                stroke="#0D9488"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#pnlGrad)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-100 pt-2 font-semibold">
        <span>PRE-TRADE & POST-TRADE PSYCHOLOGY MODULE INTEGRATED</span>
        <span className="text-emerald-700 font-bold">DISCIPLINE LOGGED</span>
      </div>

    </div>
  );
};
