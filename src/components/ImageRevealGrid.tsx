"use client";

import React, { useState } from "react";

type Card = {
  id: string;
  title: string;
  tag?: string;
  desc?: string;
  image: string;
  href?: string;
};

const CARDS: Card[] = [
  {
    id: "c1",
    title: "HRM Solution",
    tag: "HRM",
    desc:
      "Augment teams with product design experts and streamline employee workflows.",
    image: "/card_icons/hrms.jpg",
    href: "#",
  },
  {
    id: "c2",
    title: "CRM Solution",
    tag: "Sales",
    desc:
      "Track leads, convert customers, and manage relationships with rich analytics.",
    image: "/card_icons/crm.jpg",
    href: "#",
  },
  {
    id: "c3",
    title: "ERP Solution",
    tag: "Enterprise",
    desc:
      "Integrated ERP modules for finance, inventory, operations and reporting.",
    image: "/card_icons/erp.jpg",
    href: "#",
  },
  {
    id: "c4",
    title: "LMS Solution",
    tag: "Learning",
    desc:
      "Deliver courseware, assessments and learner analytics on a modern LMS.",
    image: "/card_icons/lms.jpg",
    href: "#",
  },
  {
    id: "c5",
    title: "POS Solution",
    tag: "Retail",
    desc:
      "Point-of-sale with inventory & billing integrated into your stack.",
    image: "/card_icons/pos.jpg",
    href: "#",
  },
  {
    id: "c6",
    title: "CMS Solution",
    tag: "Web",
    desc:
      "Flexible CMS and publishing workflows so content teams move faster.",
    image: "/card_icons/cms.jpg",
    href: "#",
  },
];

export default function CaseGrid() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // prevent jumping to top when href="#"
    e.preventDefault();
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-sky-600 mb-2">
          INNOVATIVE WEB DEVELOPMENT SOLUTION
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
          Custom-Built Systems for a Smarter, Scalable Business
        </h2>
        <p className="mt-4 text-slate-600 max-w-4xl">
          Take your business to new heights with our custom, intelligent, &amp;
          adaptable web design and development services — trusted by clients
          worldwide. We build powerful and innovative platforms that simplify
          operations, automate workflows, &amp; drive productivity.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => {
          const isOpen = openCardId === c.id;

          return (
            <a
              key={c.id}
              href={c.href}
              onClick={(e) => handleCardClick(e, c.id)}
              className="group block relative rounded-2xl overflow-hidden shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
            >
              {/* image container */}
              <div className="w-full h-[260px] md:h-[260px] bg-slate-100 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* bottom title strip (always visible) */}
              <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
                <div className="px-6 py-4 bg-black/45 text-white flex items-center">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <span className="ml-auto opacity-90">→</span>
                </div>

                {/* overlay: opens on tap (isOpen) and on hover/focus (desktop) */}
                <div
                  className={`absolute left-0 right-0 bottom-0 transition-transform duration-500 ease-out
                    group-hover:translate-y-0 group-focus-within:translate-y-0
                    ${isOpen ? "translate-y-0" : "translate-y-full"}`}
                  aria-hidden="true"
                >
                  <div className="px-6 py-6 bg-gradient-to-t from-black/90 to-black/70 text-white pointer-events-auto">
                    <div className="text-sm text-sky-100 mb-3">{c.tag}</div>
                    <div className="text-sm text-slate-100">{c.desc}</div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
