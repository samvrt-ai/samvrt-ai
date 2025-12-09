"use client";

import React from "react";

const stats = [
  { value: "5+", label: "Years of innovation" },
  { value: "40+", label: "AI experts & engineers" },
  { value: "150+", label: "Successful AI deployments" },
  { value: "98%", label: "Client satisfaction rate" },
];

const WhySamvrtSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/samvrt-title-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        {/* Left: Heading */}
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400/80">
            Why SAMVRT AI?
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Build intelligent products with
            <span className="text-emerald-400"> SAMVRT AI.</span>
          </h2>
        </div>

        {/* Right: Description */}
        <div className="max-w-lg text-sm leading-relaxed text-neutral-200 sm:text-base">
          <p>
            From strategy to deployment, we help you design, build, and scale
            AI solutions that actually move the needle. With battle-tested
            practices, a dedicated expert team, and an obsession for quality,
            SAMVRT AI becomes your long-term partner for intelligent products.
          </p>
        </div>
      </div>

      {/* Scrollable stats cards */}
      <div className="relative z-20 mx-auto mb-10 mt-2 max-w-6xl">
        <div className="-mx-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] lg:min-w-[320px] h-[150px]
                           rounded-2xl bg-neutral-900/70 backdrop-blur-xl
                           border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.6)]
                           flex flex-col items-center justify-center
                           snap-start"
              >
                <p className="text-4xl font-semibold sm:text-5xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-300 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySamvrtSection;
