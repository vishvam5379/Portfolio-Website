import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  BarChart2,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface MarketTicker {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isUp: boolean;
}

export const Trading: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(2);

  const [tickers, setTickers] = useState<MarketTicker[]>([
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0845', change: '+0.24%', isUp: true },
    { symbol: 'GBP/USD', name: 'British Pound / USD', price: '1.2712', change: '+0.18%', isUp: true },
    { symbol: 'XAU/USD', name: 'Spot Gold / USD', price: '2,485.40', change: '+0.65%', isUp: true },
    { symbol: 'BTC/USD', name: 'Bitcoin / USD', price: '64,250.00', change: '-0.32%', isUp: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => {
          const delta = (Math.random() - 0.48) * 0.002;
          const isUp = delta >= 0;
          return {
            ...t,
            isUp,
            change: `${isUp ? '+' : ''}${(delta * 100).toFixed(2)}%`,
          };
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const framework = PORTFOLIO_DATA.tradingDetails.framework;

  return (
    <section id="trading" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>SYSTEMATIC TRADING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {PORTFOLIO_DATA.tradingDetails.heading}
          </h2>
          <p className="mt-3 text-lg font-mono text-emerald-700 font-bold">
            {PORTFOLIO_DATA.tradingDetails.subtitle}
          </p>
          <p className="mt-4 text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
            Approaching financial markets with an engineering mindset: rigorous statistical logging, strict capital allocation rules, and emotional neutrality.
          </p>
        </motion.div>

        {/* Live Market Rate Ticker Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tickers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between font-mono shadow-2xs cursor-default"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{t.symbol}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">{t.name}</div>
                <div className="text-sm font-bold text-slate-900 mt-1">{t.price}</div>
              </div>

              <div
                className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-0.5 ${
                  t.isUp
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-100 text-rose-800 border border-rose-200'
                }`}
              >
                {t.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                <span>{t.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Asset Classes & Competencies Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Traded Markets</h3>
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-700 font-medium">
              {PORTFOLIO_DATA.tradingDetails.markets.map((mkt, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{mkt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Technical Methodology</h3>
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                <span>Market Structure & Liquidity Sweeps</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                <span>Price Action & Multi-Timeframe Bias</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                <span>Fixed Risk-to-Reward Planning</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Risk Discipline</h3>
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Calculated Dynamic Position Sizing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Non-Negotiable Stop-Loss Placement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Drawdown & Daily Loss Limits</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 7-Step Trading Framework Pipeline */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-8"
        >
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
                INTERACTIVE PIPELINE
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                7-Step Trade Execution Framework
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 font-semibold">
              <Activity size={14} className="text-emerald-600" />
              <span>Hover or Click stage to reveal rules</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 relative">
            {framework.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.button
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between h-26 relative cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-md font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-700' : 'text-slate-500'}`}>
                      STEP {item.step}
                    </span>
                    {idx < framework.length - 1 && (
                      <span className="hidden lg:block text-slate-400 text-[10px] font-bold">→</span>
                    )}
                  </div>

                  <span className="text-xs font-bold leading-tight font-mono">
                    {item.title}
                  </span>

                  <motion.div 
                    className={`w-full h-1 rounded-full ${isActive ? 'bg-emerald-600' : 'bg-slate-200'}`}
                    animate={isActive ? { scaleX: [0, 1] } : { scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </div>

          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3 relative overflow-hidden shadow-md"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                  {framework[activeStep].step}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {framework[activeStep].title}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400">
                    {framework[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 hidden sm:block">
                STAGE {activeStep + 1} OF 7
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed pt-2 font-normal">
              "{framework[activeStep].description}"
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
