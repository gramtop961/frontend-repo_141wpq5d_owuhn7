import { motion } from 'framer-motion';
import { Camera, Users, Building2, MapPin, Timer, Star, Shield, CreditCard } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Registration + KYC',
    desc: 'Face match, ID verification, and license checks to keep the network compliant.',
  },
  {
    icon: Star,
    title: 'Paid license tests',
    desc: 'MCQ + video demonstrations graded automatically to unlock higher-tier work.',
  },
  {
    icon: Building2,
    title: 'Job posts & matching',
    desc: 'AI ranks workers by skill, proximity, reputation, and availability.',
  },
  {
    icon: CreditCard,
    title: 'Escrow milestones',
    desc: 'Secure hold + release for each stage, dispute-ready with audit trails.',
  },
  {
    icon: Camera,
    title: 'Daily progress updates',
    desc: 'Photo/video logs with auto-anomaly detection and geo-tagging.',
  },
  {
    icon: Users,
    title: 'Teams & roles',
    desc: 'Create balanced rosters with role limits, share credits, and split payouts.',
  },
  {
    icon: MapPin,
    title: 'Proximity & routing',
    desc: 'Assign work based on commute time and cluster crews efficiently.',
  },
  {
    icon: Timer,
    title: 'Predictive timelines',
    desc: 'AI estimates duration from scope, crew size, and historic performance.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative w-full px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-manrope text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Core systems</h2>
          <p className="hidden text-sm text-slate-600 dark:text-slate-300 sm:block">Built for trust, efficiency, and scale</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((Item, i) => (
            <motion.div
              key={Item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
            >
              <div className="absolute right-[-20%] top-[-20%] h-40 w-40 rounded-full bg-amber-500/10 blur-2xl transition group-hover:scale-125" />
              <div className="relative z-10 flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-2 text-amber-400">
                  <Item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{Item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{Item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
