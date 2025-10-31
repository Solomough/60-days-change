import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4 text-primary"
      >
        About the Initiative
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-gray-200 text-lg"
      >
        The 60 Days Change Initiative is designed to awaken young minds to purpose, creativity, and the light within them. Through mentorship, innovation, and the Word of God, we build a team that shines by manifestation, not words.
      </motion.p>
    </section>
  )
}
