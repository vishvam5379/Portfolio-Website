import React, { useState } from 'react';
import { Terminal, Database, Code, Wrench, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'PROGRAMMING':
        return <Code size={20} className="text-emerald-600" />;
      case 'WEB & BACKEND':
        return <Terminal size={20} className="text-teal-600" />;
      case 'DATABASE & DATA':
        return <Database size={20} className="text-cyan-600" />;
      case 'TOOLS & WORKFLOW':
        return <Wrench size={20} className="text-amber-600" />;
      default:
        return <Sparkles size={20} className="text-emerald-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>ENGINEERING & WORKFLOW TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            TECHNICAL <span className="text-emerald-600">STACK</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl text-base">
            Categorized technical capabilities and modern tools for engineering reliable software.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skills.map((cat, idx) => {
            const isHovered = activeCategory === cat.title;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCategory(cat.title)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-200 relative overflow-hidden ${
                  isHovered
                    ? 'border-emerald-500 bg-white shadow-md'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      {getCategoryIcon(cat.title)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    {cat.skills.length} MODULES
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/chip relative px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all cursor-default flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/chip:text-emerald-700 transition-colors">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 group-hover/chip:border-emerald-300 group-hover/chip:text-emerald-800 font-semibold">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                  <span>EMPIRICAL KNOWLEDGE</span>
                  <span className="text-emerald-700 font-bold">VERIFIED IN PROJECTS</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
