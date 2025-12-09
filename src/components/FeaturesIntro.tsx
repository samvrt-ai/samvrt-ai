"use client";

export default function FeaturesIntro() {
  return (
    <section className="features-section section-paper bg-[#f4f7fb]">
      {/* Intro heading */}
      <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20 pb-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          We Develop <span className="text-lime-500">Mission-Critical Software</span> For Our Clients
        </h2>

        <p className="mt-6 text-center text-lg text-slate-600 max-w-3xl mx-auto">
          Fingent is an award-winning, ISO 27001–certified custom software development company
          specializing in intelligent, future-ready solutions. From AI-powered applications to
          cutting-edge web, mobile, AR/VR, and 3D platforms, we deliver scalable and secure software.
        </p>
      </div>

      {/* --- DARK ROUNDED CARD --- */}
      <div className="max-w-6xl mx-auto px-6 -mt-6 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* background image */}
          <img
            src="/bgmage_blackcard.jpg"
            alt="AI background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 to-slate-900/95"></div>

          {/* CONTENT */}
          <div className="relative px-8 py-12 md:px-12 md:py-16">
            <h3 className="text-center text-2xl md:text-3xl text-white font-semibold">
              AI-Driven, Enterprise Ready
            </h3>

            {/* Pills row */}
            <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
              {/* 1 */}
              <div className="flex flex-col items-center w-full max-w-[220px]">
                <div className="relative -mb-3 z-10">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {/* Smarter Operations Icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.02A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09c0 .69.4 1.31 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.14-.33 1.82V9c.69 0 1.31.4 1.51 1a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09c-.69 0-1.31.4-1.51 1z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow text-slate-900 font-medium">
                  Smarter Operations
                </div>
              </div>

              {/* 2 */}
              <div className="flex flex-col items-center w-full max-w-[220px]">
                <div className="relative -mb-3 z-10">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {/* Cost Savings Icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" stroke="#1e293b" fill="none" strokeWidth="1.8">
                      <path d="M12 1v22M17 5H9a4 4 0 0 0 0 8h6a4 4 0 0 1 0 8H7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow text-slate-900 font-medium">
                  Cost Savings
                </div>
              </div>

              {/* 3 */}
              <div className="flex flex-col items-center w-full max-w-[220px]">
                <div className="relative -mb-3 z-10">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {/* Personalized Experiences Icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" stroke="#1e293b" fill="none" strokeWidth="1.8">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow text-slate-900 font-medium">
                  Personalized Experiences
                </div>
              </div>

              {/* 4 */}
              <div className="flex flex-col items-center w-full max-w-[220px]">
                <div className="relative -mb-3 z-10">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    {/* Revenue Streams Icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" stroke="#1e293b" fill="none" strokeWidth="1.8">
                      <path d="M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow text-slate-900 font-medium">
                  New Revenue Streams
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-lime-500 text-white font-medium rounded-md shadow hover:bg-rose-700 transition"
              >
                Harness AI the Right Way →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
