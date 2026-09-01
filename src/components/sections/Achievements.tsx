import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Award, DollarSign, CheckCircle2, AlertCircle, Maximize2, X, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface CertificatePhoto {
  id: string;
  title: string;
  firm: string;
  category: 'prop' | 'reward';
  date: string;
  badge: string;
  imageSrc: string;
  details: string;
  rewardAmount?: string;
}

export const Achievements: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<'all' | 'prop' | 'reward'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<CertificatePhoto | null>(null);

  const certificatesList: CertificatePhoto[] = [
    {
      id: 'cert-01',
      title: 'Alpha Capital Group — Phase 1 Certificate of Achievement',
      firm: 'Alpha Capital Group',
      category: 'prop',
      date: '16 Dec 2025',
      badge: 'PHASE 1 PASSED',
      imageSrc: '/certificates/alpha_capital_phase1_cert.jpg',
      details: 'Successfully completed Alpha Capital Group Phase 1 Evaluation, demonstrating risk control and capital management within set parameters.',
    },
    {
      id: 'cert-02',
      title: 'Goat Funded Trader (GFT) — Phase 1 Completed',
      firm: 'Goat Funded Trader',
      category: 'prop',
      date: '17 Feb 2026',
      badge: '15K CHALLENGE PASSED',
      imageSrc: '/certificates/goat_funded_trader_phase1_cert.jpg',
      details: 'Completed Phase 1 of the GFT 15K Challenge, verifying trading strategy profitability and drawdown discipline under firm rules.',
    },
    {
      id: 'cert-03',
      title: 'FundingPips — Bronze Certificate (All-Time Rewards)',
      firm: 'FundingPips',
      category: 'reward',
      date: '17 Dec 2025',
      badge: '$353.10 ALL-TIME REWARDS',
      imageSrc: '/certificates/fundingpips_bronze_cert.jpg',
      rewardAmount: '$353.10',
      details: 'Achieved Bronze Certificate status with $353.10 in all-time performance rewards on a 2-Step Standard $5,000 funded account.',
    },
    {
      id: 'cert-04',
      title: 'FundingPips — Performance Reward ($194.11)',
      firm: 'FundingPips',
      category: 'reward',
      date: '17 Dec 2025',
      badge: '718.9% ROI REWARD',
      imageSrc: '/certificates/fundingpips_reward_194.jpg',
      rewardAmount: '$194.11',
      details: 'Earned individual performance reward of $194.11 (718.9% ROI) on 2-Step Standard $5,000 funded account.',
    },
    {
      id: 'cert-05',
      title: 'FundingPips — Performance Reward ($158.99)',
      firm: 'FundingPips',
      category: 'reward',
      date: '12 Dec 2025',
      badge: '588.8% ROI REWARD',
      imageSrc: '/certificates/fundingpips_reward_158.jpg',
      rewardAmount: '$158.99',
      details: 'Earned individual performance reward of $158.99 (588.8% ROI) on 2-Step Standard $5,000 funded account.',
    },
  ];

  const filteredCerts = certificatesList.filter((c) => filter === 'all' || c.category === filter);

  return (
    <section id="certificates" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>VERIFIED DOCUMENT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            CERTIFICATES <span className="text-emerald-600">&</span> PROOF OF ACHIEVEMENTS
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl text-base font-normal">
            Official certificate documents, evaluation pass receipts, and performance reward statements from global proprietary trading firms.
          </p>
        </motion.div>

        {/* Peak Allocation Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 mb-12 border border-emerald-200 shadow-sm relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                PEAK EVALUATION ALLOCATION REACHED
              </span>
              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                UP TO <span className="text-emerald-600">$50,000</span> CAPITAL
              </h3>
              <p className="text-slate-700 text-sm font-medium max-w-xl">
                {PORTFOLIO_DATA.propTradingStats.capitalSubtitle}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {PORTFOLIO_DATA.propTradingStats.firms.map((firm, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold"
                  >
                    {firm}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs font-mono text-amber-900">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <AlertCircle size={16} />
                <span>DISCLAIMER</span>
              </div>
              <p className="leading-relaxed text-[11px] text-amber-950 font-medium">
                {PORTFOLIO_DATA.propTradingStats.disclaimer}
              </p>
            </div>

          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 font-mono text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Certificates ({certificatesList.length})
          </button>
          <button
            onClick={() => setFilter('prop')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'prop'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Prop Passes (2)
          </button>
          <button
            onClick={() => setFilter('reward')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'reward'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Payout Rewards (3)
          </button>
        </div>

        {/* Certificate Photos Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Photo Header Container */}
                <div 
                  onClick={() => setSelectedPhoto(cert)}
                  className="relative aspect-4/3 bg-slate-900 overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-bold">
                    <Maximize2 size={18} />
                    <span>Click to Enlarge</span>
                  </div>

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-slate-800 border border-slate-200">
                    {cert.firm}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold">
                    {cert.badge}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-semibold border-b border-slate-100 pb-2">
                    <span className="flex items-center gap-1 text-emerald-700 font-bold">
                      <ShieldCheck size={14} />
                      <span>OFFICIAL DOCUMENT</span>
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cert.details}
                  </p>

                  {cert.rewardAmount && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs font-mono font-bold text-emerald-900">
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} className="text-emerald-700" />
                        <span>Verified Reward Payout</span>
                      </span>
                      <span className="text-emerald-700 text-sm font-black">{cert.rewardAmount}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>VERIFIED ORIGINAL</span>
                </span>
                <button
                  onClick={() => setSelectedPhoto(cert)}
                  className="text-emerald-700 hover:text-emerald-800 font-bold underline cursor-pointer"
                >
                  Inspect Full Photo →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-slate-200 relative flex flex-col max-h-[90vh]"
            >
              <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold font-mono">{selectedPhoto.title}</h3>
                    <p className="text-[11px] font-mono text-emerald-400">{selectedPhoto.firm} • Verified {selectedPhoto.date}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 bg-slate-950 flex-1 overflow-auto flex items-center justify-center min-h-[300px]">
                <img
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-800"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
                <span className="font-semibold">{selectedPhoto.details}</span>
                <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold shrink-0">
                  {selectedPhoto.badge}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
