import { motion } from 'framer-motion';
import Countdown from './Countdown';

export default function Hero({ onOpenForm }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,68,204,0.4),transparent)] animate-pulse"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4"
      >
        The Ark Network Presents: <span className="text-blueark glow">60 Days Change</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl max-w-2xl text-gray-200"
      >
        A journey to transformation, creativity, and <span className="text-blueark glow">light</span>.
      </motion.p>

      <div className="mt-10">
        <Countdown targetDate="2025-11-01T00:00:00" />
      </div>

      <button
        onClick={onOpenForm}
        className="mt-8 bg-blueark hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
      >
        Join the 60 Days Change Movement
      </button>
    </section>
  );
}
