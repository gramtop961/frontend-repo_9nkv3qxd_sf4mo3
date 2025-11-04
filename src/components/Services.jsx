import React, { useState } from 'react';
import { Code2, Smartphone, Palette, Boxes } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    desc: 'Fast, accessible, and scalable web apps tailored to your business.',
    Icon: Code2,
  },
  {
    title: 'Mobile Apps',
    desc: 'Native-feel cross‑platform apps with crisp interactions and UX.',
    Icon: Smartphone,
  },
  {
    title: 'UI / UX Design',
    desc: 'Minimalist interfaces with strong hierarchy and micro‑interactions.',
    Icon: Palette,
  },
  {
    title: 'Custom Software',
    desc: 'Robust internal tools and integrations that streamline operations.',
    Icon: Boxes,
  },
];

function ServiceCard({ title, desc, Icon }) {
  const [style, setStyle] = useState({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)' });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y - rect.height / 2) / rect.height) * 6; // rotateX
    const ry = ((x - rect.width / 2) / rect.width) * 8; // rotateY
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)` });
  };

  const onLeave = () => setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)' });

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition-transform will-change-transform hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
      style={style}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-black">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

const Services = () => {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16 sm:py-24">
        <header className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">Focused solutions with clean execution. Nothing extra.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
