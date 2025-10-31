import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="overflow-hidden">
      <Hero onOpenForm={() => setOpenForm(true)} />
      <About />
      <Vision />
      <CTA onOpenForm={() => setOpenForm(true)} />
      <Footer />
      {openForm && <RegistrationForm onClose={() => setOpenForm(false)} />}
    </div>
  );
}
