import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <span className="font-mono text-emerald-400 font-bold text-lg">VS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-bold">
                  {PORTFOLIO_DATA.personal.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-md leading-relaxed font-normal">
              Computer Science & Engineering student specializing in Python/Django full-stack development and quantitative Forex & proprietary market trading.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-emerald-400 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-emerald-400 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-6 space-y-3 font-mono text-xs text-slate-300">
            <div className="text-emerald-400 font-bold tracking-wider uppercase mb-2">
              CONTACT INFORMATION
            </div>
            
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 font-medium">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>Phone: {PORTFOLIO_DATA.personal.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <span>Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-emerald-300 underline font-semibold">{PORTFOLIO_DATA.personal.email}</a></span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400 shrink-0" />
                <span>Location: {PORTFOLIO_DATA.personal.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <GithubIcon size={14} className="text-emerald-400 shrink-0" />
                <span>GitHub: <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline font-semibold">{PORTFOLIO_DATA.personal.githubUsername}</a></span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 font-semibold">
          <div>
            © 2026 Vishvam Sukhadiya. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400">SOFTWARE × MARKETS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-emerald-400 transition-all flex items-center gap-1 font-bold"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
