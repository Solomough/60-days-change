import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import CTA from './components/CTA'
import Footer from './components/Footer'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="relative min-h-screen">
      <Hero onRegister={() => setShowForm(true)} />
      <About />
      <Vision />
      <CTA onRegister={() => setShowForm(true)} />
      <Footer />
      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </div>
  )
}

export default App
