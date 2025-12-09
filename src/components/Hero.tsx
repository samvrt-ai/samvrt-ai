import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-hero
      className="relative h-[90vh] min-h-[560px] w-full flex items-center overflow-hidden"
    >
      {/* Background video with slow zoom (Ken Burns) */}
      <video
        className="absolute inset-0 w-full h-full object-cover hero-zoom"
        src="/hero_full_vi.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* strong overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content (left column) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24">
        <div className="w-full lg:w-[52%]">
          {/* Clamped responsive heading (clamp: 40px -> 78px) */}
          <h1 className="font-extrabold leading-[1.04] tracking-tight text-white text-[clamp(40px,8vw,78px)]">
            Accelerate
            <br />
            <span className="block text-lime-500">digital</span>
          </h1>

          {/* subtext */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl fade-up">
            We power digital commerce with AI-driven platforms, scalable marketplaces, and omnichannel
            experiences.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-black font-medium rounded-md shadow-md hover:bg-slate-200 transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Right floating card */}
      <div className="absolute right-10 bottom-16 hidden lg:block">
        <div className="w-72 bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
          <div className="p-5">
            <div className="h-28 bg-slate-900/30 rounded-lg flex items-center justify-center text-white/80">
              <span className="text-sm">Next in Commerce</span>
            </div>

            <h4 className="mt-4 text-white text-base font-semibold leading-snug">
              Insights that help you lead, <br /> not follow
            </h4>

            <a
              href="#insights"
              className="mt-3 inline-block text-sm text-white/80 underline hover:text-white"
            >
              Subscribe →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
