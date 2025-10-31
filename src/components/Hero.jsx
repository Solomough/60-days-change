import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero({ onRegister }) {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-11-01') - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearTimeout(timer)
  })

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        The Ark Network Presents: <span className="text-primary">60 Days Change</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl mb-6 text-gray-200"
      >
        A journey to transformation, creativity, and <span className="text-primary">light</span>.
      </motion.p>

      <div className="bg-white/10 p-4 rounded-2xl shadow-glow flex gap-6 text-center text-lg mb-8">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit}>
            <div className="text-3xl font-bold">{timeLeft[unit] ?? '00'}</div>
            <div className="uppercase text-sm">{unit}</div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRegister}
        className="bg-primary text-white px-8 py-3 rounded-full shadow-glow font-semibold"
      >
        Join the 60 Days Change Movement
      </motion.button>
    </section>
  )
}
