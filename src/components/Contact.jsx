import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-[800px] px-6 sm:px-8 py-16 sm:py-24">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="text-neutral-400 mt-2">Tell us about your project. We typically respond within one business day.</p>
        </header>
        <form className="grid grid-cols-1 gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-neutral-300">Name</span>
            <input
              type="text"
              name="name"
              className="rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Jane Doe"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-neutral-300">Email</span>
            <input
              type="email"
              name="email"
              className="rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="jane@company.com"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-neutral-300">Project Details</span>
            <textarea
              name="message"
              rows={5}
              className="rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="A brief about scope, timeline, and goals"
              required
            />
          </label>
          <div className="pt-2">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium transition-transform duration-200 active:translate-y-[1px]"
              aria-label="Submit contact form"
            >
              <span className="relative z-10">Send request</span>
              <span className="absolute inset-0 rounded-md shadow-[0_8px_0_0_#e5e5e5] group-active:shadow-[0_2px_0_0_#e5e5e5]" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
