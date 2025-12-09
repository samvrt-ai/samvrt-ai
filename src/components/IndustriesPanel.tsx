"use client";

export default function IndustriesPanel({ compact }: { compact?: boolean }) {
  // Simple static list used both as a compact dropdown and a full panel
  const items = [
    { title: "Ecommerce & Multivendor", desc: "Build a smart eCommerce platform to grow reach and brand value." },
    { title: "EdTech & E-Learning", desc: "Create learning platforms that engage and boost your brand." },
    { title: "Real Estate & Construction", desc: "Real estate web and apps built to attract, convert, and engage." },
    { title: "Travel & Hospitality", desc: "Travel applications made to simplify booking for a safe journey." },
    { title: "Medical & Healthcare", desc: "Custom healthcare applications to improve care and visibility." },
    { title: "Transportation & Logistics", desc: "Logistics applications built to track, manage, and deliver fast." },
  ];

  return (
    <div className={`w-full ${compact ? "" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 bg-white border-t border-gray-100 shadow-sm">
        <div className="py-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">+</div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Industries</h3>
              <p className="text-sm text-slate-500">We empower leading brands to transform with domain-led solutions.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.title}>
                <h4 className="text-lg font-semibold text-slate-800">{it.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
