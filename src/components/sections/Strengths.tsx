import React from 'react';
import { 
  BrainCircuit, 
  Target, 
  ShieldCheck, 
  Wrench, 
  Zap, 
  RefreshCw, 
  Users,
  BookOpen
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Strengths: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit size={22} className="text-emerald-600" />;
      case 'Target':
        return <Target size={22} className="text-teal-600" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} className="text-amber-600" />;
      case 'Wrench':
        return <Wrench size={22} className="text-emerald-600" />;
      case 'Zap':
        return <Zap size={22} className="text-teal-600" />;
      case 'RefreshCw':
        return <RefreshCw size={22} className="text-cyan-600" />;
      case 'Users':
        return <Users size={22} className="text-emerald-600" />;
      default:
        return <Target size={22} className="text-emerald-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>CORE COMPETENCIES & ATTRIBUTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            ENGINEERING STRENGTHS <span className="text-emerald-600">&</span> COURSEWORK
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl text-base">
            Professional traits forged through engineering studies and live market risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PORTFOLIO_DATA.strengths.map((str, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 w-fit mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                  {getIcon(str.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {str.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  {str.desc}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] font-mono text-slate-500 flex justify-between font-semibold">
                <span>ATTRIBUTE #{idx + 1}</span>
                <span className="text-emerald-700 font-bold">ACTIVE</span>
              </div>
            </div>
          ))}

          {/* Academic Coursework Special Card */}
          <div className="bg-white rounded-2xl p-5 border border-emerald-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 w-fit mb-4">
                <BookOpen size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Core Academic Coursework
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-800 font-semibold"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] font-mono text-emerald-800 flex justify-between font-bold">
              <span>GTU CSE CURRICULUM</span>
              <span>7TH SEMESTER</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
