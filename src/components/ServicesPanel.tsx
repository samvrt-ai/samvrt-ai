"use client";

import React from "react";

export type ServiceKey =
  | "application"
  | "digital"
  | "design"
  | "mobile"
  | "saas"
  | "api"
  | "ai";

export default function ServicesPanel({
  active,
  setActive,
  headerHeight,
}: {
  active: ServiceKey;
  setActive: (k: ServiceKey) => void;
  headerHeight: number;
}) {
  // data: three columns for simplicity (copy / adapt as you like)
  const data: Record<ServiceKey, { title: string; description: string }> = {
    application: {
      title: "Application Solution",
      description: "Create intuitive websites & web apps that boost brand presence.",
    },
    digital: {
      title: "Digital Marketing",
      description: "Performance marketing, SEO, social and conversion optimization.",
    },
    design: {
      title: "Design Solution",
      description: "UX/UI, product design and brand experiences.",
    },
    mobile: {
      title: "Mobile App Development",
      description: "Build dynamic iOS & Android apps to reach vast audiences.",
    },
    saas: {
      title: "SaaS Application",
      description: "Create intuitive, engaging, and high-quality web applications.",
    },
    api: {
      title: "API Development",
      description: "Integrate APIs into the application to optimize performance.",
    },
    ai: {
      title: "AI / ML Development",
      description: "Smart AI / ML solutions that automate tasks and boost performance.",
    },
  };

  // ensure fallback
  const activeData = data[active] ?? data.application;

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8 bg-white border-t border-gray-100 shadow-sm">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column - categories */}
          <div className="col-span-12 md:col-span-3">
            <nav className="bg-white rounded-md">
              <ul>
                {(
                  [
                    "application",
                    "digital",
                    "design",
                    "mobile",
                    "ai",
                    "saas",
                    "api",
                  ] as ServiceKey[]
                ).map((k) => (
                  <li key={k}>
                    <button
                      onClick={() => setActive(k)}
                      className={`w-full text-left px-4 py-3 border-b hover:bg-gray-50 ${
                        active === k ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-700"
                      }`}
                    >
                      {data[k].title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right column - content */}
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                +
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">{activeData.title}</h3>
                <div className="text-sm text-slate-500 mt-1">{activeData.description}</div>
              </div>
            </div>

            {/* grid of services (3 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Hard-coded items (mirror Invoidea layout) */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800">Web Development</h4>
                <p className="text-sm text-slate-500 mt-1">Create intuitive websites & web apps.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800">Mobile App Development</h4>
                <p className="text-sm text-slate-500 mt-1">Build iOS & Android apps.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800">Custom Application</h4>
                <p className="text-sm text-slate-500 mt-1">Tailored applications for your business.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800">AI / ML Development</h4>
                <p className="text-sm text-slate-500 mt-1">Smart automation using AI & ML.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800">SaaS Application</h4>
                <p className="text-sm text-slate-500 mt-1">High-quality SaaS solutions.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800">API Development</h4>
                <p className="text-sm text-slate-500 mt-1">Powerful API integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
