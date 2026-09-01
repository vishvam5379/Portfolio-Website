import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs text-slate-300 font-mono">
          <p className="text-emerald-400 font-bold">
            Vishvam Sukhadiya Interactive Terminal v3.6
          </p>
          <p>
            Type <span className="text-teal-400 font-bold">help</span> or click command buttons below to inspect developer profile data.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const runCommandWithTyping = (cmdStr: string) => {
    if (isTyping) return;
    const cleanCmd = cmdStr.trim().toLowerCase();

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    setIsTyping(true);
    let i = 0;
    setInputVal('');

    const timer = setInterval(() => {
      if (i < cmdStr.length) {
        setInputVal((prev) => prev + cmdStr.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          executeCommand(cmdStr);
          setInputVal('');
          setIsTyping(false);
        }, 150);
      }
    }, 25);
  };

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
              <div><strong className="text-teal-300">about</strong> — Background info</div>
              <div><strong className="text-teal-300">skills</strong> — Tech stack</div>
              <div><strong className="text-teal-300">projects</strong> — Live apps</div>
              <div><strong className="text-teal-300">trading</strong> — Markets & prop stats</div>
              <div><strong className="text-teal-300">contact</strong> — Reach Vishvam</div>
              <div><strong className="text-teal-300">clear</strong> — Clear screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><strong className="text-white">{PORTFOLIO_DATA.personal.name}</strong></p>
            <p className="text-emerald-400">{PORTFOLIO_DATA.personal.title}</p>
            <p className="text-slate-300 leading-relaxed mt-1">"{PORTFOLIO_DATA.personal.summary}"</p>
            <p className="text-xs font-mono text-slate-400 mt-1">Location: {PORTFOLIO_DATA.personal.location}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Technical Stack & Toolkit:</p>
            <div className="space-y-1 font-mono text-[11px]">
              <p><strong>PROGRAMMING:</strong> Python, Java, C, PHP</p>
              <p><strong>WEB & BACKEND:</strong> HTML, CSS, Django / Python, Full-Stack Development</p>
              <p><strong>DATABASE:</strong> DBMS, MySQL, SQL</p>
              <p><strong>TOOLS:</strong> Git, GitHub, Antigravity, Claude, AI-assisted development</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-3 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Featured Projects:</p>
            <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 space-y-1">
              <p className="font-bold text-white">1. TRADESPHERE — Trading Journal & Analytics Platform</p>
              <p className="text-[11px] text-slate-400">Tech: HTML, CSS, JavaScript</p>
              <p className="text-[11px] text-emerald-400">Live: https://trade-sphere-topaz.vercel.app</p>
              <p className="text-[11px] text-slate-400">GitHub: https://github.com/vishvam5379/TradeSphere</p>
            </div>
            <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 space-y-1">
              <p className="font-bold text-white">2. SPARKZONE — Gaming Station Booking System</p>
              <p className="text-[11px] text-slate-400">Tech: Python, Django, Database, JSON, APIs</p>
              <p className="text-[11px] text-teal-400">Live: https://sparkzone-lb8f.vercel.app</p>
              <p className="text-[11px] text-slate-400">GitHub: https://github.com/vishvam5379/SparkZone</p>
            </div>
          </div>
        );
        break;

      case 'trading':
        response = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-emerald-400 font-bold">Trading Experience & Achievements:</p>
            <p><strong>Experience:</strong> ~3 Years in Forex Currency Pairs, Gold (XAUUSD), and Crypto.</p>
            <p><strong>Peak Capital Allocation:</strong> Up to $50,000 across evaluations (FundingPips, Alpha Capital Group, Goat Funded Trader).</p>
            <p><strong>FundingPips Payouts:</strong> $158.99 (Dec 12, 2025) & $194.11 (Dec 17, 2025) — Total $353.10.</p>
            <p className="text-amber-400 text-[10px]">Note: Risk management, drawdown control, and stop-loss discipline prioritized.</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-emerald-400 font-bold">Contact Details:</p>
            <p>Phone: {PORTFOLIO_DATA.personal.phone}</p>
            <p>Email: {PORTFOLIO_DATA.personal.email}</p>
            <p>GitHub: {PORTFOLIO_DATA.personal.github}</p>
            <p>Location: {PORTFOLIO_DATA.personal.location}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cleanCmd}". Type <strong className="text-white">help</strong> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        command: cmdStr,
        output: response,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim() && !isTyping) {
      executeCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <section id="terminal" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>DEVELOPER CLI SHELL</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            INTERACTIVE <span className="text-emerald-600">TERMINAL</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm font-normal">
            Query Vishvam's skills, projects, and trading data via interactive CLI shell.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-xl overflow-hidden font-mono"
        >
          
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="ml-2 text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <TerminalIcon size={14} className="text-emerald-400" />
                <span>vishvam@portfolio:~$</span>
              </span>
            </div>

            <button
              onClick={() => executeCommand('clear')}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Clear Terminal Output"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider shrink-0 font-bold">QUICK CMDS:</span>
            {['help', 'about', 'skills', 'projects', 'trading', 'contact'].map((cmd) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={cmd}
                onClick={() => runCommandWithTyping(cmd)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-emerald-600 hover:text-white border border-slate-700 text-slate-200 text-[11px] font-bold transition-all shrink-0 cursor-pointer"
              >
                ${cmd}
              </motion.button>
            ))}
          </div>

          <div className="p-4 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 text-xs">
            {history.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-1.5"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span>vishvam@portfolio:~$</span>
                  <span className="text-slate-100">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-emerald-500/30">{item.output}</div>
              </motion.div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-xs shrink-0">vishvam@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'projects', 'trading')..."
              className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-500 font-mono"
            />
            {/* Blinking Cursor Indicator */}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-emerald-400 inline-block"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="p-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer ml-1"
            >
              <CornerDownLeft size={14} />
            </motion.button>
          </form>

        </motion.div>

      </div>
    </section>
  );
};
