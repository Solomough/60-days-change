import { motion } from 'framer-motion'

export default function CTA({ onRegister }) {
  return (
    <section className="py-20 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Are you ready to become <span className="text-primary">light</span> in your world?
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRegister}
        className="bg-primary text-white px-8 py-3 rounded-full shadow-glow font-semibold"
      >
        Join Now
      </motion.button>
    </section>
  )
}
