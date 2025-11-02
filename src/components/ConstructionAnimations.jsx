import { motion } from 'framer-motion';

function BulldozerScene() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Ground */}
      <div className="absolute bottom-0 h-8 w-full bg-gradient-to-t from-amber-800 to-amber-700/80" />

      {/* Dirt blocks being pushed */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-8 h-3 w-5 rounded-sm bg-amber-600/90"
          initial={{ x: 240 + i * 24 }}
          animate={{ x: [-40 - i * 10, 260 + i * 24] }}
          transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ left: `${i * 8}px` }}
        />
      ))}

      {/* Bulldozer body */}
      <motion.div
        className="absolute bottom-8 left-0 flex h-16 w-28 items-end"
        animate={{ x: [260, -60] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Tracks */}
        <div className="mb-1 flex w-full items-center justify-between rounded bg-zinc-700/90 px-1 py-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-2 w-4 rounded-sm bg-zinc-300/70" />
          ))}
        </div>
        {/* Cab */}
        <div className="absolute -top-8 left-2 h-8 w-12 rounded bg-yellow-400 shadow-inner" />
        <div className="absolute -top-7 left-4 h-4 w-8 rounded-sm bg-cyan-300/70" />
        {/* Body */}
        <div className="absolute -top-4 left-12 h-6 w-14 rounded bg-yellow-500 shadow" />
        {/* Blade */}
        <div className="absolute -top-2 left-[92px] h-8 w-2 origin-left -skew-y-6 rounded bg-gray-300 shadow" />
      </motion.div>
    </div>
  );
}

function BrickWallBuilder() {
  const rows = 4;
  const cols = 8;
  const bricks = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      bricks.push({ r, c });
    }
  }
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="absolute inset-x-0 bottom-0 h-2 bg-zinc-700/60" />
      {bricks.map(({ r, c }, i) => (
        <motion.div
          key={`${r}-${c}`}
          className="absolute h-6 w-10 rounded-sm bg-red-600 shadow-inner"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * r + 0.02 * c, duration: 0.5 }}
          style={{
            left: `${12 + c * 22 + (r % 2 === 1 ? 11 : 0)}px`,
            bottom: `${8 + r * 16}px`,
          }}
        />
      ))}
    </div>
  );
}

function CraneLift() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Tower */}
      <div className="absolute bottom-0 left-4 h-32 w-2 bg-yellow-500" />
      {/* Boom */}
      <div className="absolute left-4 top-6 h-1 w-48 origin-left -rotate-5 bg-yellow-400" />

      {/* Hook line */}
      <motion.div
        className="absolute left-[180px] top-7 h-28 w-[2px] origin-top bg-yellow-300"
        animate={{ rotate: [8, -8, 8] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      />
      {/* Hook */}
      <motion.div
        className="absolute left-[174px] top-[118px] h-6 w-6 rotate-45 rounded-sm bg-yellow-500"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Payload block */}
      <motion.div
        className="absolute left-[160px] top-[140px] h-8 w-12 rounded bg-zinc-300"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  );
}

export default function ConstructionAnimations() {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl px-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-100 sm:text-xl">Construction Animations</h2>
        <p className="text-xs text-zinc-400">Playful, low-poly inspired motion</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Bulldozer</h3>
          <BulldozerScene />
        </div>
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Brick Wall Builder</h3>
          <BrickWallBuilder />
        </div>
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Crane Lift</h3>
          <CraneLift />
        </div>
      </div>
    </section>
  );
}
