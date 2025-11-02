import { motion } from 'framer-motion';
import { Hammer, Shield, CreditCard, Bot } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroHUD() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Brixel hero">
      {/* Spline background layer */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic light + HUD grid overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.2),transparent_50%),linear-gradient(120deg,rgba(245,158,11,0.08),transparent_40%),linear-gradient(0deg,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-md"
          aria-live="polite"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
          Live escrow + AI-driven matching
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-center font-manrope text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm dark:text-white sm:text-5xl"
        >
          Brixel — Build with trust, speed, and precision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-center text-base text-slate-100/90 dark:text-slate-300"
        >
          A mobile-first marketplace where customers, companies, and skilled crews meet. Verify licenses, auto-form teams, track progress, and release milestone payments — all in one cinematic HUD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
          role="group"
          aria-label="Primary actions"
        >
          <button
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.8)] transition hover:translate-y-[-1px] hover:bg-amber-400 active:translate-y-0 sm:w-auto"
            aria-label="Post a job"
          >
            <Hammer className="h-5 w-5" aria-hidden />
            Post a job
          </button>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
            aria-label="Verify identity and licensing"
          >
            <Shield className="h-5 w-5" aria-hidden />
            Verify & get licensed
          </button>
        </motion.div>

        <div className="relative mt-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-4" role="list" aria-label="Capabilities">
          {[
            { icon: <CreditCard className="h-4 w-4" aria-hidden />, label: 'Escrow milestones' },
            { icon: <Bot className="h-4 w-4" aria-hidden />, label: 'AI job matching' },
            { icon: <Hammer className="h-4 w-4" aria-hidden />, label: 'Daily work logs' },
            { icon: <Shield className="h-4 w-4" aria-hidden />, label: 'KYC + licenses' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 backdrop-blur-md"
              role="listitem"
            >
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[40%] bg-gradient-to-t from-amber-500/20 via-transparent to-transparent blur-[60px]" aria-hidden />
    </section>
  );
}
