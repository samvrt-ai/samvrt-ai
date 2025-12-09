"use client";

import React from "react";

type CaseStudy = {
  id: string;
  tag: string;
  company?: string;
  title: string;
  excerpt: string;
  image?: string;
  href?: string;
};

const CASES: CaseStudy[] = [
  {
    id: "zabka",
    tag: "CLOUD DEVELOPMENT",
    company: "żabka",
    title: "System Architecture for Autonomous Stores by żabka",
    excerpt:
      "Architecture, implementing, and maintaining autonomous stores architecture to reduce human intervention and scale operations.",
    image: "/case_zabka.jpg",
  },
  {
    id: "ubs",
    tag: "MOBILE APP REDESIGN",
    company: "UBS",
    title: "Team extension for mobile design revamp at speed",
    excerpt:
      "Design and engineering sprint to fast-track a modernized mobile experience for the bank's customer base.",
    image: "/case_ubs.jpg",
  },
  {
    id: "metro",
    tag: "E-COMMERCE",
    company: "Metro Brazil",
    title: "Ecommerce platform modernization",
    excerpt: "Modern, high-performance eCommerce platform to improve conversion and scale throughput.",
    image: "/case_metro.jpg",
  },
];

export default function AboutPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative bg-white ${compact ? "py-8" : "py-14"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row / page heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">About us</h2>
          <div className="mt-3 text-slate-600 max-w-3xl">
            Learn about our mission, culture, and how we deliver end-to-end digital products for global brands.
          </div>
          <div className="mt-6 border-t border-gray-100" />
        </div>

        {/* layout: left mini-nav + content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* left column: mini nav */}
          <aside className="lg:col-span-3">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Learn more</div>

              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-slate-800 font-medium hover:text-sky-600 block">About Netguru</a>
                </li>
                <li>
                  <a href="#" className="text-slate-800 font-medium hover:text-sky-600 block">Sustainability</a>
                </li>
                <li>
                  <a href="#" className="text-slate-800 font-medium hover:text-sky-600 block">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-slate-800 font-medium hover:text-sky-600 block">Contact</a>
                </li>
              </ul>
            </div>
          </aside>

          {/* main content: case study cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CASES.map((c) => (
                <article key={c.id} className="bg-white border border-gray-50 rounded-md overflow-hidden shadow-sm">
                  <div className="h-44 md:h-52 w-full bg-gray-100 overflow-hidden">
                    {/* use real images in public/ and replace paths */}
                    <img
                      src={c.image ?? "/placeholder_case.jpg"}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-slate-400 tracking-wide font-semibold">{c.tag}</div>

                    <div className="mt-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {c.company ? <span className="mr-2 text-slate-700 font-medium">{c.company}</span> : null}
                        {c.title}
                      </h3>
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{c.excerpt}</p>
                    </div>

                    <div className="mt-5">
                      <a href={c.href ?? "#"} className="text-sm font-medium text-sky-600 hover:underline">
                        Read case study →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* optionally more content / pagination */}
            <div className="mt-8 text-center">
              <a href="#" className="inline-block px-5 py-2 border rounded-md text-slate-700 hover:bg-slate-50">
                View more case studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
