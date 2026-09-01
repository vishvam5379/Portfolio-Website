import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  TrendingUp, 
  Code2, 
  ShieldCheck, 
  BarChart3,
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [latency, setLatency] = useState(14);
  const [activeTab, setActiveTab] = useState<'stack' | 'markets' | 'discipline'>('stack');

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(11 + Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    "PYTHON / DJANGO FULL-STACK",
    "INDEPENDENT FOREX TRADER",
    "GOLD / XAUUSD TECHNICAL ANALYSIS",
    "PROP FIRM EVALUATIONS",
    "FUNDINGPIPS BRONZE CERTIFIED",
    "RISK & POSITION SIZING DISCIPLINE",
    "GTU CSE 7TH SEMESTER (CGPA 7.0)",
    "TRADESPHERE & SPARKZONE SAAS",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center bg-radial-gradient">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      {/* Marquee Ticker */}
      <div className="w-full bg-slate-100/90 border-y border-slate-200/80 py-2.5 overflow-hidden mb-10 relative shadow-xs">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono text-slate-700 font-semibold">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span className="tracking-widest font-semibold hover:text-emerald-700 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="tracking-wider uppercase font-bold">COMPUTER SCIENCE & ENGINEERING STUDENT</span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-xs font-mono tracking-widest text-emerald-700 font-bold uppercase mb-2"
              >
                {PORTFOLIO_DATA.personal.name}
              </motion.h2>

              {/* Headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-none"
              >
                BUILDING <span className="text-emerald-600">SOFTWARE.</span>
                <br />
                ANALYZING <span className="text-teal-600">MARKETS.</span>
                <br />
                MANAGING <span className="text-amber-600">RISK.</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal"
            >
              "{PORTFOLIO_DATA.personal.summary}"
            </motion.p>

            {/* Stat Cards Strip */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5 transition-all">
                <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <TrendingUp size={12} className="text-emerald-600" />
                  <span>TRADING EXP</span>
                </div>
                <div className="text-base font-bold text-slate-900 font-mono">~3 Years</div>
                <div className="text-[9px] font-mono text-emerald-700 font-semibold">Forex / Gold / Crypto</div>
              </motion.div>

              <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5 transition-all">
                <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <Award size={12} className="text-teal-600" />
                  <span>PROP ALLOCATION</span>
                </div>
                <div className="text-base font-bold text-slate-900 font-mono">Up to $50K</div>
                <div className="text-[9px] font-mono text-teal-700 font-semibold">Peak Evaluation</div>
              </motion.div>

              <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5 transition-all">
                <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <Zap size={12} className="text-emerald-600" />
                  <span>PAYOUT REWARDS</span>
                </div>
                <div className="text-base font-bold text-slate-900 font-mono">$353.10</div>
                <div className="text-[9px] font-mono text-emerald-700 font-semibold">FundingPips Bronze</div>
              </motion.div>

              <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5 transition-all">
                <div className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <Code2 size={12} className="text-amber-600" />
                  <span>GTU ACADEMICS</span>
                </div>
                <div className="text-base font-bold text-slate-900 font-mono">7.0 CGPA</div>
                <div className="text-[9px] font-mono text-slate-600 font-semibold">7th Sem CSE</div>
              </motion.div>
            </motion.div>

            {/* Contact Quick Strip */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                <Phone size={14} className="text-emerald-600" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                <Mail size={14} className="text-emerald-600" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`}>{PORTFOLIO_DATA.personal.email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-emerald-600" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#trading"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <TrendingUp size={16} className="text-emerald-600" />
                <span>Trading Journey</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#certificates"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold text-sm transition-all cursor-pointer"
              >
                View Certificates
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 transition-all flex items-center gap-2 text-xs font-mono shadow-xs"
              >
                <GithubIcon size={16} />
                <span>github.com/vishvam5379</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 transition-all flex items-center gap-2 text-xs font-mono shadow-xs"
              >
                <Mail size={16} />
                <span>Email Vishvam</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Non-Terminal Developer & Trader Overview Card */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: shouldReduceMotion ? 0 : [0, -6, 0]
            }}
            transition={{ 
              x: { type: 'spring', stiffness: 90, damping: 14, delay: 0.3 },
              opacity: { duration: 0.6, delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xl relative overflow-hidden group">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold font-mono text-xs">
                    VS
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-slate-900 tracking-wider">
                      DEVELOPER & TRADER PROFILE
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 font-semibold">
                      VERIFIED CREDENTIALS & CAPABILITIES
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>ONLINE ({latency}ms)</span>
                </div>
              </div>

              <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-600 flex items-center justify-between font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  <span>SPECIALIZED FOCUS AREAS</span>
                </span>
                <span className="text-emerald-700 font-bold">ACTIVE ROLES</span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex border-b border-slate-200 mt-4 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`flex-1 py-2 text-center border-b-2 font-bold transition-all ${
                    activeTab === 'stack'
                      ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  ENGINEERING
                </button>
                <button
                  onClick={() => setActiveTab('markets')}
                  className={`flex-1 py-2 text-center border-b-2 font-bold transition-all ${
                    activeTab === 'markets'
                      ? 'border-teal-600 text-teal-700 bg-teal-50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  MARKETS
                </button>
                <button
                  onClick={() => setActiveTab('discipline')}
                  className={`flex-1 py-2 text-center border-b-2 font-bold transition-all ${
                    activeTab === 'discipline'
                      ? 'border-amber-600 text-amber-700 bg-amber-50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  DISCIPLINE
                </button>
              </div>

              {/* Status Rows */}
              <div className="space-y-3 mt-4">
                <motion.div whileHover={{ scale: 1.01 }} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 font-semibold">DEVELOPMENT</div>
                      <div className="text-xs font-bold text-slate-900">Python / Django / Full-Stack</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                    ACTIVE
                  </span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-teal-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 text-teal-800 border border-teal-200">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 font-semibold">MARKETS</div>
                      <div className="text-xs font-bold text-slate-900">Forex / Commodities / Crypto</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200 font-bold">
                    3 YEARS
                  </span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 font-semibold">ANALYTICS</div>
                      <div className="text-xs font-bold text-slate-900">P&L / Win Rate / Risk-Reward</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                    QUANTIFIED
                  </span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-amber-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-800 border border-amber-200">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 font-semibold">DISCIPLINE</div>
                      <div className="text-xs font-bold text-slate-900">Risk Management / Psychology</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 font-bold">
                    STRICT
                  </span>
                </motion.div>
              </div>

              {/* Dynamic Feature Highlights Box (Non-Terminal) */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                {activeTab === 'stack' && (
                  <div className="space-y-1.5">
                    <div className="text-emerald-800 font-bold font-mono flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      <span>PRIMARY SOFTWARE TOOLKIT</span>
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium">
                      Python, Django Framework, MySQL Database, HTML5/CSS3/JavaScript, REST APIs, Git, GitHub.
                    </p>
                  </div>
                )}

                {activeTab === 'markets' && (
                  <div className="space-y-1.5">
                    <div className="text-teal-800 font-bold font-mono flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-teal-600" />
                      <span>TRADED ASSETS & ACCOUNTS</span>
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium">
                      Forex Pairs (EURUSD, GBPUSD), Gold (XAUUSD), Crypto, FundingPips, Alpha Capital Group, Goat Funded Trader.
                    </p>
                  </div>
                )}

                {activeTab === 'discipline' && (
                  <div className="space-y-1.5">
                    <div className="text-amber-900 font-bold font-mono flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-amber-600" />
                      <span>RISK & DISCIPLINE PRINCIPLES</span>
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium">
                      Strict risk per trade, stop-loss discipline, zero drawdown rule breaches, detailed trade journaling.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-100 pt-3 font-semibold">
                <span>GTU CSE 7TH SEMESTER (7.0 CGPA)</span>
                <span className="text-emerald-700 font-bold">DAHEGAM, GANDHINAGAR</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
