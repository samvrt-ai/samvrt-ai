"use client";

import React from "react";

type InsightItem = { id: string; title: string; desc: string; href?: string };

const LEFT: InsightItem[] = [
  { id: "about", title: "About Us", desc: "Discover our mission and expertise in delivering unique application, digital marketing, and design solutions." },
  { id: "portfolio", title: "Portfolio", desc: "Explore portfolio showcasing our success stories." },
  { id: "contact", title: "Contact", desc: "Connect with us and take your business to the next level." },
  { id: "blogs", title: "Blogs", desc: "Follow blog for insights, tips, & trends in digital marketing." },
  { id: "career", title: "Career", desc: "Join us and build career in app development, tech, & marketing." },
];

export default function InsightsPanel({
  compact = false,
}: {
  compact?: boolean; // if used in dropdown, pass compact = true
}) {
  return (
    <section className={`relative bg-white ${compact ? "py-6" : "py-12"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* watermark */}
        <div className="relative overflow-visible">
          <span className="absolute left-6 top-0 text-7xl md:text-8xl font-extrabold text-sky-50 select-none pointer-events-none" style={{ letterSpacing: -2 }}>
            INSIGHTS
          </span>

          {/* header */}
          <div className="relative z-10 flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-sky-50 text-sky-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18M12 3v18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <h2 className="text-lg md:text-2xl font-semibold text-slate-800">Insights</h2>
              <p className="text-sm text-slate-500">Knowledge, news, and resources to help your digital transformation.</p>
            </div>
          </div>

          <div className="border-t border-gray-100 mb-8" />
        </div>

        {/* content grid: left list, middle content, right promo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* left list */}
          <div className="lg:col-span-4">
            <ul className="space-y-6">
              {LEFT.map((it) => (
                <li key={it.id}>
                  <a href={it.href ?? "#"} className="block text-slate-800 font-medium hover:text-sky-600">{it.title}</a>
                  <p className="mt-2 text-sm text-slate-500">{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* middle info */}
          <div className="lg:col-span-5">
            <div className="h-full bg-sky-50 p-6 rounded-md">
              <h3 className="text-lg font-semibold text-slate-900">Trusted Worldwide for Cutting-Edge, Premium IT Solutions</h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                From website development to enterprise-grade apps and next-gen software systems, we create world-class digital solutions for maximum impact, stability, and best user experiences.
              </p>

              <div className="mt-6 text-sm text-slate-700">
                <div className="mb-3">Mail Us - <strong className="text-slate-900">contact@yourcompany.com</strong></div>

                <div className="flex gap-3">
                  <div className="flex items-center gap-3 bg-white border rounded-md px-3 py-2">
                    <span className="text-xs">🇮🇳</span>
                    <div>
                      <div className="text-sm font-medium">Indian Office</div>
                      <div className="text-xs text-slate-500">+91 7292 050505</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white border rounded-md px-3 py-2">
                    <span className="text-xs">🇺🇸</span>
                    <div>
                      <div className="text-sm font-medium">USA Office</div>
                      <div className="text-xs text-slate-500">+1 205 465 0505</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right promo */}
          <div className="lg:col-span-3">
            <div className="bg-white border rounded-md overflow-hidden shadow-sm p-4">
              <h4 className="text-lg font-semibold text-slate-800">Mobile Development</h4>
              <p className="text-sm text-slate-500 mt-2">We Build Apps that Build Businesses.</p>
              <div className="mt-4">
                <img src="/placeholder_promo.jpg" alt="mobile" className="w-full h-36 object-cover rounded-md" />
              </div>
              <div className="mt-4">
                <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md">Let's Build Your App</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
