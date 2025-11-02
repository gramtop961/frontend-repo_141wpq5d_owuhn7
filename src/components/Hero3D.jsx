import { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

// A construction-themed hero with 3D Spline scene + ambient sound controls
export default function Hero3D() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  const handlePlayToggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      if (isPlaying) {
        a.pause();
        setIsPlaying(false);
      } else {
        await a.play();
        setIsPlaying(true);
      }
    } catch (e) {
      // If autoplay is blocked, reveal the tap-to-start button
      setCanPlayAudio(true);
    }
  };

  const handleUserGestureStart = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      await a.play();
      setIsPlaying(true);
      setCanPlayAudio(false);
    } catch {}
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-zinc-700/20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-white shadow-xl">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that do not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
        >
          Building Brixel: Heavy Duty in 3D
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-xl text-sm text-zinc-200 sm:text-base"
        >
          A cinematic construction playground — bricks, bulldozers, and cranes — with immersive ambient sound.
        </motion.p>

        {/* Sound Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur"
        >
          <button
            aria-label={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
            onClick={handlePlayToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            aria-label={muted ? 'Unmute' : 'Mute'}
            onClick={() => setMuted((m) => !m)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            aria-label="Volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-2 w-28 cursor-pointer appearance-none rounded-full bg-white/20 accent-orange-500"
          />
        </motion.div>

        {canPlayAudio && (
          <button
            onClick={handleUserGestureStart}
            className="mt-3 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600"
          >
            Tap to enable sound
          </button>
        )}

        <audio
          ref={audioRef}
          loop
          preload="none"
          src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_c9a76ce9d2.mp3?filename=construction-site-ambient-20472.mp3"
        />
      </div>
    </section>
  );
}
