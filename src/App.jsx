import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Hero with interactive 3D Spline scene */}
      <Hero />

      {/* Key sections */}
      <Services />
      <TechStack />
      <Contact />

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <div>
            <span className="text-white font-medium">MonoLabs</span> — Minimal, high‑performance software.
          </div>
          <nav className="flex items-center gap-4">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
