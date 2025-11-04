import React, { Suspense, lazy } from 'react';

// Lazy-load Spline to keep initial bundle small
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-black to-neutral-900" />}>          
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Suspense>
        {/* Subtle gradient to improve text contrast. Pointer events disabled so 3D remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 pt-24 pb-20 flex flex-col gap-8">
        <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
          Building clean, high‑performance digital products.
        </h1>
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg">
          We craft modern web and software experiences with an obsessive focus on speed, accessibility, and minimalist design.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium transition-transform duration-200 active:translate-y-[1px]"
          >
            <span className="relative z-10">Start a project</span>
            <span className="absolute inset-0 rounded-md shadow-[0_8px_0_0_#e5e5e5] group-active:shadow-[0_2px_0_0_#e5e5e5]" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
