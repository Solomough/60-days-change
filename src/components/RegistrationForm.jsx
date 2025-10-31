import { motion } from 'framer-motion'
import { useState } from 'react'

export default function RegistrationForm({ onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    contact: '',
    school: '',
    lightMeaning: '',
    whyJoin: '',
    hope: '',
    skills: [],
    signature: ''
  })

  const skillsList = [
    'Word & Teaching',
    'Media & Creativity',
    'Innovation & Tech',
    'Leadership & Coordination',
    'Communication & Partnerships'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSkillToggle = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleSubmit = () => {
    const message = `*60 Days Change Registration*\n\n*Personal Details*\nFull Name: ${form.fullName}\nAge: ${form.age}\nContact: ${form.contact}\nSchool/Community: ${form.school}\n\n*Alignment & Motivation*\nWhat does light mean to you?: ${form.lightMeaning}\nWhy join The Ark Network?: ${form.whyJoin}\nYour hope for 60 days: ${form.hope}\n\n*Skills & Interests*: ${form.skills.join(', ')}\n\n*Commitment*: “I understand this is a 60-day journey and I commit to giving my best.”\nSignature: ${form.signature}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/2347076560169?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">Registration Form</h2>
        <div className="space-y-3">
          <input name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="age" placeholder="Age" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="contact" placeholder="Contact Info (Phone, Email, WhatsApp)" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="school" placeholder="School/Community" onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="lightMeaning" placeholder="What does 'light' mean to you?" onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="whyJoin" placeholder="Why do you want to be part of The Ark Network?" onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="hope" placeholder="What do you hope to achieve during these 60 days?" onChange={handleChange} className="w-full p-2 border rounded" />
          <div>
            <p className="font-semibold mb-1">Select Your Skills & Interest Areas:</p>
            <div className="grid grid-cols-2 gap-2">
              {skillsList.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input type="checkbox" checked={form.skills.includes(skill)} onChange={() => handleSkillToggle(skill)} />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>
          <textarea name="signature" placeholder="Signature (type your name)" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="text-gray-600 hover:underline">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-primary text-white px-6 py-2 rounded-full shadow-glow">
            Submit via WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  )
}
