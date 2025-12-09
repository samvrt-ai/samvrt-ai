"use client";

import { useEffect, useRef, useState } from "react";

export default function FeatureCards() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { root: null, rootMargin: "0px 0px -150px 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = [
    {
      title: "AI-Driven Development",
      text: "Build intelligent applications that learn, adapt, and automate using an AI-first development approach.",
      icon: "/card_icons/fin-home-ai-ico-01.webp",
    },
    {
      title: "Data Engineering",
      text: "Transform raw data into actionable insights at scale with optimized data architecture.",
      icon: "/card_icons/fin-home-ai-ico-02.webp",
    },
    {
      title: "Cloud-Native Solutions",
      text: "Deploy secure and scalable applications using modern cloud architectures.",
      icon: "/card_icons/fin-home-ai-ico-03.webp",
    },
  ];

  return (
    <div ref={parentRef} className="relative max-w-7xl mx-auto px-6 -mt-24 mb-24 z-20">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {items.map((it, index) => {
          return (
            <article
              key={it.title}
              className={`
                relative rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-gray-100
                transition-all duration-700 ease-out transform
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Floating image icon */}
              <div className="absolute -top-8 left-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden">
                  <img
                    src={it.icon}
                    alt={it.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">{it.title}</h4>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{it.text}</p>

                <a className="mt-5 inline-block text-sm font-medium text-gray-900 underline" href="#">
                  Learn more →
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
