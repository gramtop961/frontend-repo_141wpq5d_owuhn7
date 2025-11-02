import { motion } from 'framer-motion';
import { CreditCard, Shield, CheckCircle2 } from 'lucide-react';

export default function EscrowShowcase() {
  return (
    <section className="relative w-full px-4 pb-16" aria-label="Escrow features">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-manrope text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Escrow you can trust</h2>
          <p className="hidden text-sm text-slate-600 dark:text-slate-300 sm:block">Milestones, audits, and instant payouts</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[{
            icon: CreditCard,
            title: 'Fund milestones',
            text: 'Hold funds securely with Stripe/Razorpay and release on approval.'
          }, {
            icon: Shield,
            title: 'Dispute-ready',
            text: 'Immutable logs, media evidence, and admin arbitration tools.'
          }, {
            icon: CheckCircle2,
            title: 'Instant payouts',
            text: 'Split payments to teams and suppliers in one tap.'
          }].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl"
              role="article"
              aria-label={title}
            >
              <div className="absolute right-[-10%] top-[-10%] h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" aria-hidden />
              <div className="relative z-10">
                <div className="inline-flex rounded-lg border border-white/10 bg-white/10 p-2 text-amber-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{text}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" aria-hidden />
                  Secured & monitored in real-time
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[40%] bg-gradient-to-t from-emerald-400/10 via-transparent to-transparent blur-[60px]" aria-hidden />
    </section>
  );
}
