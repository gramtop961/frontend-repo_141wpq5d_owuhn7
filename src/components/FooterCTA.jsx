import { Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <footer className="mx-auto my-14 w-full max-w-6xl rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 text-zinc-200 backdrop-blur">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/90 text-white shadow">
            <Hammer size={20} />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Let’s build something bold</h4>
            <p className="text-xs text-zinc-400">Share your idea and we’ll bring it to life.</p>
          </div>
        </div>
        <motion.a
          href="#"
          initial={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Start a Project
        </motion.a>
      </div>
    </footer>
  );
}
