"use client";

import React from "react";

/**
 * ClientsGrid.tsx
 * - Place logos into public/logos/ e.g. /logos/logo1.svg ... logo12.svg
 * - This reproduces the Netguru-style section: pale bg, headline left, paragraph right,
 *   centered logo grid with large gaps and consistent icon sizing.
 */

const LOGOS = [
  "/logos/Dmodot.png",
  "/logos/Ecozen-Logo.png",
  "/logos/InsightAI.png",
  "/logos/MeshDefend.webp",
  "/logos/Miko Technologies.png",
  "/logos/ONYA.jpg",
  "/logos/The kenko Life.png",
  "/logos/logo8.svg",
  "/logos/logo9.svg",
  "/logos/logo10.svg",
  "/logos/logo11.svg",
  "/logos/logo12.svg",
];

const ClientsGrid: React.FC = () => {
  return (
    <section className="bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: heading */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
              Benefit from our wide{" "}
              <span className="relative">
                <span className="rounded-full px-3 py-1 -ml-1 inline-block" style={{ background: "linear-gradient(90deg,#d8f7e6,#e8fff0)" }}>
                  <span className="text-slate-900">commerce footprint</span>
                </span>
              </span>
            </h2>
          </div>

          {/* Right: paragraph */}
          <div className="col-span-1">
            <p className="text-slate-600 max-w-md">
              We empower leading brands to transform B2B solutions, marketplaces, and retail ecosystems with cutting-edge technology, AI-powered personalization, and scalable digital solutions.
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Logo grid — centered and roomy */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <ul className="grid grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-8 items-center justify-items-center">
              {LOGOS.map((src, i) => (
                <li key={i} className="flex items-center justify-center w-full">
                  <div className="flex items-center justify-center" style={{ width: 120, height: 64 }}>
                    {/* Keep the logos scaled and centered */}
                    <img src={src} alt={`client-${i}`} className="max-h-full max-w-full object-contain" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Slight bottom padding to match screenshot spacing */}
      <div className="h-8"></div>
    </section>
  );
};

export default ClientsGrid;
