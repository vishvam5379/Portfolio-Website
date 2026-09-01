import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            PROPRIETARY TRADING <span className="text-emerald-600">CERTIFICATES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <Award size={22} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded font-bold">
                    {cert.date}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>{cert.type}</span>
                </span>
                <span className="text-emerald-700 font-bold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
