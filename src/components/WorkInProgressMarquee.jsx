import { motion } from 'framer-motion';

const Tape = ({ text }) => (
  <div className="flex items-center gap-3 px-4 py-2 text-black">
    <div className="h-2 w-2 rotate-45 bg-black/70" />
    <span className="text-[11px] font-extrabold tracking-[0.25em]">{text}</span>
    <div className="h-2 w-2 rotate-45 bg-black/70" />
  </div>
);

export default function WorkInProgressMarquee() {
  return (
    <div className="relative mt-8 w-full overflow-hidden">
      <div className="absolute inset-0 -skew-y-2 bg-[repeating-linear-gradient(45deg,theme(colors.yellow.400),theme(colors.yellow.400)_12px,theme(colors.black)_12px,theme(colors.black)_24px)] opacity-90" />
      <motion.div
        className="relative flex w-[200%] items-center gap-8 py-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <Tape key={i} text="WORK IN PROGRESS • CAUTION" />
        ))}
      </motion.div>
    </div>
  );
}
