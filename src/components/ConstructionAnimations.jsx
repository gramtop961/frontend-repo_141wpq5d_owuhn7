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
        className="absolute left-[174px] top=[118px] h-6 w-6 rotate-45 rounded-sm bg-yellow-500"
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

function Jackhammer() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Ground */}
      <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-zinc-700 to-zinc-600/80" />
      {/* Jackhammer body */}
      <motion.div
        className="absolute left-1/2 top-6 h-14 w-10 -translate-x-1/2 rounded bg-yellow-500 shadow"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Handle */}
      <div className="absolute left-1/2 top-4 h-2 w-16 -translate-x-1/2 rounded bg-zinc-400" />
      {/* Bit */}
      <motion.div
        className="absolute left-1/2 top-[88px] h-10 w-2 -translate-x-1/2 rounded bg-zinc-200"
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 0.2, repeat: Infinity }}
      />
      {/* Debris */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-10 h-1 w-1 rounded-full bg-amber-400"
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: [0, 1, 0], y: [-2, -8, -2], x: ['50%', `${50 + (i - 4) * 6}%`, '50%'] }}
          transition={{ duration: 0.6 + i * 0.05, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function ExcavatorArm() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Base */}
      <div className="absolute bottom-4 left-8 h-4 w-16 rounded bg-yellow-600" />
      {/* Cab */}
      <div className="absolute bottom-8 left-10 h-10 w-12 rounded bg-yellow-500" />
      <div className="absolute bottom-10 left-12 h-6 w-8 rounded-sm bg-cyan-300/70" />
      {/* Arm segments */}
      <motion.div className="absolute left-20 top-6 h-2 w-16 origin-left bg-yellow-400" animate={{ rotate: [10, -10, 10] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute left-[140px] top-[14px] h-2 w-14 origin-left bg-yellow-400" animate={{ rotate: [-20, 10, -20] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      {/* Bucket */}
      <motion.div className="absolute left-[250px] top-[18px] h-6 w-8 origin-top-left rotate-12 rounded bg-zinc-300" animate={{ rotate: [12, 40, 12], y: [0, 12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      {/* Pile */}
      <motion.div className="absolute bottom-4 right-8 h-6 w-10 rounded bg-amber-600/80" animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    </div>
  );
}

function ConcreteMixer() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Wheels */}
      <motion.div className="absolute bottom-4 left-6 h-4 w-4 rounded-full bg-zinc-400" animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="absolute bottom-4 left-20 h-4 w-4 rounded-full bg-zinc-400" animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
      {/* Drum */}
      <motion.div className="absolute left-10 top-8 h-16 w-20 -skew-y-6 rounded-full bg-orange-400/90" animate={{ rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
      {/* Chute */}
      <div className="absolute left-[180px] top-[70px] h-2 w-10 -rotate-20 rounded bg-zinc-300" />
      {/* Pouring concrete */}
      <motion.div className="absolute left-[210px] top-[80px] h-2 w-2 rounded bg-amber-500" animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      <motion.div className="absolute left-[214px] top-[80px] h-2 w-2 rounded bg-amber-500" animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }} transition={{ delay: 0.2, duration: 1, repeat: Infinity }} />
      <motion.div className="absolute left-[218px] top-[80px] h-2 w-2 rounded bg-amber-500" animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }} transition={{ delay: 0.4, duration: 1, repeat: Infinity }} />
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
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Jackhammer</h3>
          <Jackhammer />
        </div>
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Excavator Arm</h3>
          <ExcavatorArm />
        </div>
        <div className="rounded-xl border border-white/10 p-3 backdrop-blur">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Concrete Mixer</h3>
          <ConcreteMixer />
        </div>
      </div>
    </section>
  );
}
