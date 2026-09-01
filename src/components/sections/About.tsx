import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, TrendingUp, BarChart3, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={24} className="text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp size={24} className="text-teal-600" />;
      case 'BarChart3':
        return <BarChart3 size={24} className="text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert size={24} className="text-amber-600" />;
      default:
        return <Code2 size={24} className="text-emerald-600" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <span>HYBRID CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ENGINEERING <span className="text-emerald-600">+</span> MARKETS
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl text-base leading-relaxed font-normal">
            Combining rigorous Computer Science fundamentals with 3 years of live market experience in proprietary trading, risk management, and quantitative performance logging.
          </p>
        </motion.div>

        {/* Narrative Box */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                Full-Stack Engineering Meets Market Analytics
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                Currently pursuing a Bachelor of Engineering in Computer Science & Engineering (7th Semester, CGPA 7.0) at New L.J. Institute of Engineering and Technology. My engineering focus lies in building clean backend architecture with Python and Django, structuring efficient relational databases, and designing intuitive web applications.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                Parallel to software development, I have dedicated around 3 years to independent Forex, gold (XAUUSD), and crypto market trading. Through evaluation programs across prop firms like FundingPips, Alpha Capital Group, and Goat Funded Trader, I have refined a process centered around drawdown control, systematic position sizing, and emotional discipline.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 font-mono text-xs">
              <div className="text-emerald-700 font-bold tracking-wider uppercase border-b border-slate-200 pb-2">
                CORE PHILOSOPHY
              </div>
              <div className="flex items-start gap-2 text-slate-700 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Risk comes first; profits follow structure.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Code should be clean, modular, and maintainable.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Data log everything: trade entries & software state.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Cards Staggered Animation: opacity: 0 -> 1, y: 40 -> 0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.aboutCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group transition-all"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 w-fit mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all"
                >
                  {getIcon(card.icon)}
                </motion.div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs font-mono text-emerald-700 font-bold mt-1 mb-3">
                  {card.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                <span>MODULE: {card.id.toUpperCase()}</span>
                <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
