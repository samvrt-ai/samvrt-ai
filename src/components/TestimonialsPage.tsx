"use client";

import React, { useEffect, useRef, useState } from "react";

type Testimonial = {
  logo: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoy_ve7UId7BQCu5UTzlSdmnxXVbnDZfwJsegCf7didnIztOJlwoU868x_pS7RiYSrEmo&usqp=CAU",
    quote:
      "SAMVRT AI helped us accelerate our model experimentation pipeline dramatically.",
    name: "Ananya Rao",
    role: "Head of Product, Sarvam AI",
    avatar: "/clients/client1.jpg",
  },
  {
    logo:
      "https://mms.businesswire.com/media/20250204723028/en/2372414/5/KrutrimLogo.jpg?download=1",
    quote:
      "Their engineering expertise helped us deploy production-ready systems faster than expected.",
    name: "Rahul Verma",
    role: "Founder & CTO, Krutrim AI",
    avatar: "/clients/client2.jpg",
  },
  {
    logo:
      "data:image/png;base64,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",
    quote:
      "The collaboration was smooth, structured, and focused on measurable outcomes.",
    name: "Neha Kulkarni",
    role: "VP Engineering, Wysa",
    avatar: "/clients/client3.jpg",
  },
  {
    logo:
      "data:image/png;base64,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",
    quote:
      "SAMVRT AI enabled us to integrate AI services at scale without disrupting our release cycles.",
    name: "Pratik Shah",
    role: "Co-founder, TrueFoundry",
    avatar: "/clients/client4.jpg",
  },
  {
    logo: "https://e42.ai/wp-content/uploads/2021/09/E_42-logo.png",
    quote:
      "We saw faster iteration and more reliable deployments after partnering with SAMVRT AI.",
    name: "Siddharth Iyer",
    role: "Product Lead, E42.ai",
    avatar: "/clients/client5.jpg",
  },
  {
    logo:
      "https://media.licdn.com/dms/image/v2/D5622AQGTDYUhsLZUjA/feedshare-shrink_800/feedshare-shrink_800/0/1700653517585?e=2147483647&v=beta&t=tWYyFvS-9ZwK3XIg4tKJaScVpXWFOsZFHoYkUoKHpac",
    quote:
      "A highly capable team that understands both deep technical details and product constraints.",
    name: " Menon",
    role: "Director of Engineering, Rephrase.ai",
    avatar: "/clients/client6.jpg",
  },
];

const Testimonials: React.FC = () => {
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

      const maxShift = 12; // match case cards
      const value = (0.5 - progress) * 2 * maxShift;

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
    <section className="bg-[#f4f7fb]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">
          Check our <span className="font-black">clients&apos; feedback</span>
        </h2>

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
            {TESTIMONIALS.map((t, idx) => (
              <article
                key={idx}
                className="
                  snap-center
                  shrink-0
                  w-[85%]
                  bg-white p-6 mb-6 shadow-sm rounded-lg
                "
              >
                {/* Logo */}
                <div className="mb-4 flex items-center h-16">
                  <img
                    src={t.logo}
                    alt={`${t.name} company logo`}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
                  “{t.quote}”
                </p>

                {/* Person */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DESKTOP/TABLET: original masonry grid */}
        <div className="hidden md:block">
          <div className="ng-masonry">
            {TESTIMONIALS.map((t, idx) => (
              <article
                key={idx}
                className="ng-card bg-white p-6 mb-6 shadow-sm rounded-lg"
              >
                <div className="mb-4 flex items-center h-16">
                  <img
                    src={t.logo}
                    alt={`${t.name} company logo`}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
                  “{t.quote}”
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry layout for desktop/tablet */}
      <style jsx>{`
        .ng-masonry {
          column-count: 2;
          column-gap: 36px;
        }
        .ng-masonry .ng-card {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
        }
        @media (max-width: 768px) {
          .ng-masonry {
            column-count: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
