import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { TradeSpherePreview } from './TradeSpherePreview';
import { SparkZonePreview } from './SparkZonePreview';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>FEATURED SOFTWARE & APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            PROJECT <span className="text-emerald-600">SHOWCASE</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl text-base leading-relaxed font-normal">
            Production web applications combining full-stack backend development with custom trading analytics and interactive UI design.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* PROJECT 01: TRADESPHERE */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="tradesphere" 
            className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    PROJECT 01 — FINTECH SOFTWARE
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    HTML5 / CSS3 / JAVASCRIPT
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    TRADESPHERE
                  </h3>
                  <p className="text-sm font-mono text-teal-700 font-bold mt-1">
                    Trading Journal & Analytics Platform
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  A comprehensive trading journal web application engineered to log live market executions, monitor emotional and psychological parameters, and analyze statistical metrics to build institutional trading discipline.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {PORTFOLIO_DATA.projects[0].tech.map((t, idx) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    CORE FEATURES & CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {PORTFOLIO_DATA.projects[0].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={PORTFOLIO_DATA.projects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    <span>Live Website</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={PORTFOLIO_DATA.projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs transition-all flex items-center gap-2"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Repository</span>
                  </motion.a>
                </div>

              </div>

              <div className="lg:col-span-6">
                <TradeSpherePreview />
              </div>

            </div>
          </motion.div>

          {/* PROJECT 02: SPARKZONE */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="sparkzone" 
            className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-teal-800 px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
                    PROJECT 02 — FULL-STACK WEB APP
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    PYTHON / DJANGO / DATABASE
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                    SPARKZONE
                  </h3>
                  <p className="text-sm font-mono text-teal-700 font-bold mt-1">
                    Gaming Station Booking System
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  A full-stack web application designed for managing gaming-station availability, customer bookings, time-slot scheduling, and asynchronous database-backed API communication. Developed during summer internship at InfoLabz.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {PORTFOLIO_DATA.projects[1].tech.map((t, idx) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    SYSTEM ARCHITECTURE & FEATURES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {PORTFOLIO_DATA.projects[1].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={PORTFOLIO_DATA.projects[1].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    <span>Live Website</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={PORTFOLIO_DATA.projects[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs transition-all flex items-center gap-2"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Repository</span>
                  </motion.a>
                </div>

              </div>

              <div className="lg:col-span-6">
                <SparkZonePreview />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
