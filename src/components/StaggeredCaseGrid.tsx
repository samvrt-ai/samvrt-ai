"use client";

import { useEffect, useRef, useState } from "react";

/**
 * StaggeredCaseGrid
 * - Desktop: 2-column staggered cards (fixed)
 * - Mobile: 1 horizontal row of cards
 *   • Cards can be swiped left/right
 *   • Row moves slightly left/right based on page scroll (parallax feel)
 *   • First card always fully visible
 */

const CASES = [
  {
    id: "1",
    client: "OLX",
    tag: "UX / UI",
    title: "21% higher conversion for a top marketplace",
    blurb:
      "Augmenting a highly demanding team with product design experts for rapid, tangible results.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "2",
    client: "Vinted Go",
    tag: "Web Development",
    title: "Ecommerce boost with on-demand team extension",
    blurb:
      "Growing market share with seamless backend integrations and scalable shipping.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "3",
    client: "Acme",
    tag: "Platform",
    title: "Headless platform re-architecture",
    blurb:
      "Modular microservices and streaming pipelines delivering faster updates and lower TCO.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "4",
    client: "RetailX",
    tag: "Commerce",
    title: "Reimagined marketplace UX and checkout",
    blurb:
      "Optimized checkout flow and personalized recommendations increased AOV by 12%.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function StaggeredCaseGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [translateX, setTranslateX] = useState(0);

  // Scroll-linked horizontal motion (mobile)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const rawProgress = 1 - rect.top / vh;
      const progress = Math.min(1, Math.max(0, rawProgress));

      const maxShift = 12; // small so first card never goes out of view
      const value = (0.5 - progress) * 2 * maxShift; // range ~[-12, 12]

      setTranslateX(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Reimagined marketplaces, B2B, and{" "}
          <span className="font-extrabold">retail ecosystems</span>
        </h2>
      </div>

      {/* MOBILE: scroll-linked motion + horizontal swipe */}
      <div className="md:hidden overflow-hidden">
        <div
          className={`
            flex gap-4 pb-4 px-4
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:'none']
            [scrollbar-width:'none']
            transition-transform duration-150 ease-out
          `}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {CASES.map((c) => (
            <article
              key={c.id}
              className="
                snap-center
                shrink-0
                w-[85%]
                rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100
              "
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="text-xs text-slate-500 font-medium">
                  {c.tag} · {c.client}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm">{c.blurb}</p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-xs font-medium text-slate-900 underline"
                    href="#"
                  >
                    Read case study →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DESKTOP/TABLET: original staggered grid, fixed */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 mt-10 md:mt-0">
        {CASES.map((c, idx) => {
          const isRight = idx % 2 === 1;
          const upClass = isRight ? "md:translate-y-6" : "md:-translate-y-6";

          return (
            <article
              key={c.id}
              className={`relative rounded-xl overflow-hidden bg-white shadow-md border border-gray-100 ${upClass}`}
            >
              <div className="w-full h-72 md:h-80 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-sm text-slate-500 font-medium">
                      {c.client}
                    </div>
                    <h3 className="mt-4 text-xl md:text-2xl font-semibold text-slate-900 leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm">{c.blurb}</p>
                    <div className="mt-6">
                      <a
                        className="inline-flex items-center text-sm font-medium text-slate-900 underline"
                        href="#"
                      >
                        Read case study →
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block text-slate-400 text-xs uppercase tracking-wider">
                    {c.tag}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
