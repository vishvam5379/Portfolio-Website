import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 bg-slate-50 border-t border-slate-200 relative">
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
            <span>ACADEMICS & INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            EDUCATION <span className="text-emerald-600">&</span> INTERNSHIP
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl text-base">
            Academic milestones in Computer Science Engineering and hands-on software development internship experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline with Animated Line */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Academic Qualifications</h3>
            </div>

            <div className="relative pl-6 space-y-8">
              {/* Progressively Drawing Line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute left-0 top-2 bottom-2 w-[2px] bg-emerald-500 origin-top"
              />

              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-50 border-2 border-emerald-600 group-hover:scale-125 group-hover:bg-emerald-600 transition-all"></div>

                  <div className="glass-panel rounded-xl p-5 group-hover:border-emerald-500 transition-all">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="text-xs font-mono text-emerald-800 px-2.5 py-0.5 rounded bg-emerald-100 border border-emerald-200 font-bold">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200 font-bold">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-xs text-slate-700 mt-1 font-semibold">
                      {edu.institution}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 font-semibold">
                      <span>STATUS: {edu.status.toUpperCase()}</span>
                      <span className="text-emerald-700 font-bold">
                        {edu.board ? edu.board : 'GTU'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Internship Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
              <div className="p-2 rounded-lg bg-teal-100 text-teal-800 border border-teal-200">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Industry Internship</h3>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl p-6 space-y-6 relative overflow-hidden group hover:border-teal-500 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-teal-100 text-teal-900 border border-teal-200">
                    {PORTFOLIO_DATA.internship.type}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-teal-700 transition-colors">
                    {PORTFOLIO_DATA.internship.role}
                  </h4>
                  <p className="text-sm font-bold text-slate-700">
                    {PORTFOLIO_DATA.internship.company}
                  </p>
                </div>

                <div className="space-y-1 text-right text-xs font-mono text-slate-600 font-semibold">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Calendar size={14} className="text-teal-600" />
                    <span>{PORTFOLIO_DATA.internship.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin size={14} className="text-teal-600" />
                    <span>{PORTFOLIO_DATA.internship.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-mono font-bold text-slate-900 tracking-wider uppercase">
                  KEY RESPONSIBILITIES & ACCOMPLISHMENTS
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-700 font-normal">
                  {PORTFOLIO_DATA.internship.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Award size={16} className="text-teal-600" />
                  <span>Featured Internship Project: <strong className="text-slate-900 font-bold">SparkZone Booking System</strong></span>
                </div>
                <a
                  href="#sparkzone"
                  className="text-xs font-mono text-teal-700 hover:text-teal-800 font-bold underline"
                >
                  View Project →
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
