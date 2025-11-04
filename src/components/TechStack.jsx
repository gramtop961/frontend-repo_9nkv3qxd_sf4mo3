import React from 'react';

const items = [
  { name: 'React' },
  { name: 'Node' },
  { name: 'Python' },
  { name: 'FastAPI' },
  { name: 'Tailwind' },
  { name: 'Three.js' },
];

const TechStack = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16 sm:py-24">
        <header className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tech Stack</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">A pragmatic set of modern, reliable technologies.</p>
        </header>

        <div className="relative mx-auto h-72 sm:h-80 max-w-3xl">
          {/* Orbit container */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div
            className="absolute inset-0 motion-reduce:animate-none"
            style={{ animation: 'spin 16s linear infinite' }}
            aria-hidden="true"
          >
            {items.map((it, i) => {
              const angle = (i / items.length) * Math.PI * 2;
              const radius = 120;
              const x = Math.cos(angle) * radius + 160;
              const y = Math.sin(angle) * radius + 120;
              return (
                <div
                  key={it.name}
                  className="absolute"
                  style={{ left: x, top: y }}
                >
                  <div className="rounded-md border border-white/15 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur-sm">
                    {it.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium shadow-[0_10px_0_#e5e5e5]">
              Core
            </div>
          </div>
        </div>

        {/* Inline keyframes for lightweight orbit; respects prefers-reduced-motion */}
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .motion-reduce\\:animate-none { animation: none !important; }
          }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </div>
    </section>
  );
};

export default TechStack;
