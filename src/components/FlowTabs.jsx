import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, CreditCard, CheckCircle2, Camera, Shield } from 'lucide-react';

const FLOWS = {
  Customer: [
    { icon: Hammer, title: 'Request job', text: 'Describe scope, budget, and timelines. Add site address and media.' },
    { icon: Shield, title: 'Auto-match', text: 'We shortlist licensed workers/teams with best-fit scoring.' },
    { icon: CreditCard, title: 'Escrow', text: 'Fund milestones securely. Money is released on approval.' },
    { icon: CheckCircle2, title: 'Approve & rate', text: 'Sign-off with confidence and leave transparent feedback.' },
  ],
  Worker: [
    { icon: Shield, title: 'KYC & license', text: 'Verify identity and take paid skill tests to unlock jobs.' },
    { icon: Hammer, title: 'Accept jobs', text: 'Get matched automatically or pick from your feed.' },
    { icon: Camera, title: 'Daily updates', text: 'Upload photo/video logs, location, and notes for review.' },
    { icon: CreditCard, title: 'Earn credits', text: 'Build reputation, unlock higher rates, and cash out instantly.' },
  ],
  Company: [
    { icon: Shield, title: 'License dashboard', text: 'Manage crew licensing, compliance docs, and audits.' },
    { icon: Hammer, title: 'Enterprise access', text: 'Bid on large projects and form multi-crew rosters.' },
    { icon: Camera, title: 'Oversight', text: 'Monitor milestones, logs, and disputes from a single pane.' },
    { icon: CreditCard, title: 'Split payouts', text: 'Automate distributions to subs and suppliers.' },
  ],
};

export default function FlowTabs() {
  const [tab, setTab] = useState('Customer');

  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-manrope text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Flows</h2>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {Object.keys(FLOWS).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  tab === k ? 'bg-amber-500 text-slate-900' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {FLOWS[tab].map(({ icon: Icon, title, text }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/10 p-2 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
