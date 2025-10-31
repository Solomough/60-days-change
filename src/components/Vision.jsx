import { motion } from 'framer-motion'
import { Sparkles, Lightbulb, Users } from 'lucide-react'

export default function Vision() {
  const cards = [
    { icon: <Lightbulb size={40} />, title: 'Light', text: 'Transformation through the Word.' },
    { icon: <Sparkles size={40} />, title: 'Innovation', text: 'Creativity that speaks louder than words.' },
    { icon: <Users size={40} />, title: 'Community', text: 'Raising ambassadors of excellence and purpose.' }
  ]

  return (
    <section className="py-20 bg-white/5 text-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-primary">Why We Exist</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white/10 rounded-2xl shadow-glow"
          >
            <div className="flex justify-center mb-3 text-primary">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-200">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
