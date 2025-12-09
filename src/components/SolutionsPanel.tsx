"use client";

import React from "react";

type SolKey = "app" | "enterprise";
type Item = { id: string; title: string; desc: string; href?: string };

const DATA: Record<SolKey, { title: string; items: Item[] }> = {
  app: {
    title: "App Solutions",
    items: [
      { id: "food", title: "Food Delivery", desc: "Create intuitive apps for easy food search, order, and delivery." },
      { id: "grocery", title: "Grocery Delivery", desc: "Build custom apps for quick shopping and smooth grocery delivery." },
      { id: "taxi", title: "Taxi Service", desc: "Travel safely with a quick, easy, and smooth taxi booking app." },
      { id: "fintech", title: "Fintech", desc: "Smart AI solutions to enhance financial services and operations." },
      { id: "fitness", title: "Fitness/Gym", desc: "Achieve fitness goals with a personalized workout tracking app." },
      { id: "dating", title: "Dating", desc: "Develop an AI-driven dating app for smart matching experience." },
      { id: "matrimonial", title: "Matrimonial Application", desc: "Build a matrimonial website that helps people find the right match." },
      { id: "astrology", title: "Astrology", desc: "Develop astrology apps with horoscopes, predictions, & guidance." },
    ],
  },
  enterprise: {
    title: "Enterprise Solutions",
    items: [
      { id: "erp", title: "ERP Platforms", desc: "Enterprise resource planning solutions for complex organizations." },
      { id: "crm", title: "CRM Systems", desc: "Customer relationship systems to manage sales and service." },
      { id: "scm", title: "Supply Chain", desc: "Supply chain & logistics orchestration platforms." },
      { id: "hr", title: "HR Tech", desc: "HR management systems for recruitment, payroll and attendance." },
      { id: "analytics", title: "Data & Analytics", desc: "Enterprise-grade analytics and reporting platforms." },
      { id: "security", title: "Security & Compliance", desc: "Security-first systems with compliance tooling." },
    ],
  },
};

export default function SolutionsPanel({
  active = "app",
  setActive = () => {},
  headerHeight = 72,
}: {
  active?: SolKey;
  setActive?: (k: SolKey) => void;
  headerHeight?: number;
}) {
  const data = DATA[active] ?? DATA.app;

  return (
    <div
      id="solutions-panel"
      className="w-full bg-white shadow-xl border-t border-gray-100"
      role="dialog"
      aria-labelledby="solutions-title"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex">
        {/* LEFT nav */}
        <div className="w-64 border-r border-gray-100 pr-6">
          <ul className="space-y-3">
            <li
              onMouseEnter={() => setActive("app")}
              onClick={() => setActive("app")}
              className={`p-3 cursor-pointer rounded-md ${active === "app" ? "bg-sky-50 text-sky-600 font-semibold" : "text-slate-700 hover:bg-gray-50"}`}
            >
              App Solutions
            </li>

            <li
              onMouseEnter={() => setActive("enterprise")}
              onClick={() => setActive("enterprise")}
              className={`p-3 cursor-pointer rounded-md ${active === "enterprise" ? "bg-sky-50 text-sky-600 font-semibold" : "text-slate-700 hover:bg-gray-50"}`}
            >
              Enterprise Solutions
            </li>
          </ul>
        </div>

        {/* RIGHT content */}
        <div className="flex-1 pl-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 text-sky-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18M12 3v18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <h3 id="solutions-title" className="text-xl font-semibold text-slate-800">{data.title}</h3>
              <div className="text-sm text-slate-500 mt-1">Choose a solution category to learn more</div>
            </div>
          </div>

          <div className="border-t border-gray-100 mb-6" />

          {/* grid content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.items.map((it) => (
              <div key={it.id}>
                <a href={it.href ?? "#"} className="block text-slate-800 font-medium hover:text-sky-600">{it.title}</a>
                <p className="mt-2 text-sm text-slate-500">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
