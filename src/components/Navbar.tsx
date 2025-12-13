"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ServicesPanel, { ServiceKey } from "./ServicesPanel";
import SolutionsPanel from "./SolutionsPanel";
import IndustriesPanel from "./IndustriesPanel";
import InsightsPanel from "./InsightsPanel";
import AboutPanel from "./AboutPanel";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);

  // which panels visible (desktop)
  const [showServices, setShowServices] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // mobile menu open?
  const [mobileOpen, setMobileOpen] = useState(false);

  // active choices inside panels
  const [activeService, setActiveService] = useState<ServiceKey>("application");
  const [activeSolution, setActiveSolution] = useState<"app" | "enterprise">("app");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastY = useRef(0);

  // header height for panel positioning
  const [headerHeight, setHeaderHeight] = useState(72);

  // whether any menu is open (desktop)
  const menuOpen = showServices || showSolutions || showIndustries || showInsights || showAbout;

  // block body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // scroll show/hide and background change
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const hero = document.querySelector("[data-hero]") as HTMLElement | null;
      const threshold = hero ? Math.round(hero.offsetHeight * 0.55) : 240;

      setSolid(y > threshold);

      if (y > lastY.current && y > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // measure header height so panels sit below
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const r = () => setHeaderHeight(Math.ceil(el.getBoundingClientRect().height));
    r();
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  // click outside closes desktop panels
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setShowServices(false);
        setShowSolutions(false);
        setShowIndustries(false);
        setShowInsights(false);
        setShowAbout(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // helper to close all desktop panels
  const closeAll = () => {
    setShowServices(false);
    setShowSolutions(false);
    setShowIndustries(false);
    setShowInsights(false);
    setShowAbout(false);
  };

  // close mobile when navigation happens (optional)
  useEffect(() => {
    if (!mobileOpen) return;
    // when route changes you may want to close: basic listener approach using popstate
    const onPop = () => setMobileOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [mobileOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* NAVBAR */}
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className={`transition-colors duration-300 ease-in-out ${solid || menuOpen || mobileOpen ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className={`text-2xl font-semibold transition-colors ${solid || menuOpen || mobileOpen ? "text-slate-900" : "text-white"}`}>
              SAMVRT <span className="font-bold">AI</span>
            </Link>

            {/* Links (desktop) */}
            <nav className="hidden md:flex gap-8 items-center">
              {/* Services */}
              <div
                className={`relative cursor-pointer select-none ${solid || menuOpen ? "text-slate-700" : "text-white/90"}`}
                onMouseEnter={() => { setShowServices(true); setShowSolutions(false); setShowIndustries(false); setShowInsights(false); setShowAbout(false); }}
                onClick={(e) => { e.preventDefault(); setShowServices(s => !s); }}
              >
                <span className="hover:underline">Services</span>
              </div>

              {/* Solutions */}
              <div
                className={`relative cursor-pointer select-none ${solid || menuOpen ? "text-slate-700" : "text-white/90"}`}
                onMouseEnter={() => { setShowSolutions(true); setShowServices(false); setShowIndustries(false); setShowInsights(false); setShowAbout(false); }}
                onClick={(e) => { e.preventDefault(); setShowSolutions(s => !s); }}
              >
                <span className="hover:underline">Solutions</span>
              </div>

              {/* Industries */}
              <div
                className={`relative cursor-pointer select-none ${solid || menuOpen ? "text-slate-700" : "text-white/90"}`}
                onMouseEnter={() => { setShowIndustries(true); setShowServices(false); setShowSolutions(false); setShowInsights(false); setShowAbout(false); }}
                onClick={(e) => { e.preventDefault(); setShowIndustries(s => !s); }}
              >
                <span className="hover:underline">Industries</span>
              </div>

              {/* Insights */}
              <div
                className={`relative cursor-pointer select-none ${solid || menuOpen ? "text-slate-700" : "text-white/90"}`}
                onMouseEnter={() => { setShowInsights(true); setShowServices(false); setShowSolutions(false); setShowIndustries(false); setShowAbout(false); }}
                onClick={(e) => { e.preventDefault(); setShowInsights(s => !s); }}
              >
                <span className="hover:underline">Insights</span>
              </div>

              {/* About */}
              <div
                className={`relative cursor-pointer select-none ${solid || menuOpen ? "text-slate-700" : "text-white/90"}`}
                onMouseEnter={() => { setShowAbout(true); setShowServices(false); setShowSolutions(false); setShowIndustries(false); setShowInsights(false); }}
                onClick={(e) => { e.preventDefault(); setShowAbout(s => !s); }}
              >
                <span className="hover:underline">About us</span>
              </div>
            </nav>

            {/* CTA & mobile hamburger */}
            <div className="flex items-center gap-4">

              <Link
    href="/hrms"
    className={`hidden md:inline-block px-4 py-2 rounded-md border transition-all ${
      (solid || menuOpen || mobileOpen)
        ? "bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100"
        : "bg-transparent text-white border-white/60 hover:bg-white/10"
    }`}
  >
    Employee Login
  </Link>
              <Link
                href="/contact"
                className={`hidden md:inline-block px-4 py-2 rounded-md border transition-all ${ (solid || menuOpen || mobileOpen) ? "bg-white text-sky-600 border-sky-600" : "bg-transparent text-white border-white/60" }`}
              >
                Get in touch
              </Link>

              {/* MOBILE HAMBURGER — small change: add onClick to toggle mobileOpen */}
              <button
                aria-label="open menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden p-2 rounded-md border transition ${ (solid || menuOpen || mobileOpen) ? "border-slate-200 text-slate-900" : "border-white/60 text-white" }`}
              >
                {/* simple icon: switch between hamburger / X */}
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (drawer) */}
      <div
        className={`md:hidden fixed inset-0 z-50 pointer-events-none transition-opacity ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        aria-hidden={!mobileOpen}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* drawer */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg font-bold">SAMVRT AI</Link>
              <button onClick={() => setMobileOpen(false)} aria-label="close" className="p-1">✕</button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); setShowServices(true); }} className="py-2 border-b">Services</Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); setShowSolutions(true); }} className="py-2 border-b">Solutions</Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); setShowIndustries(true); }} className="py-2 border-b">Industries</Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); setShowInsights(true); }} className="py-2 border-b">Insights</Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); setShowAbout(true); }} className="py-2 border-b">About us</Link> 

              <Link
  href="/hrms"
  onClick={() => setMobileOpen(false)}
  className="py-2 border-b font-medium text-slate-700"
>
  Employee Login
</Link>


              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-4 px-4 py-2 bg-sky-600 text-white rounded text-center">Get in touch</Link>
            </nav>

            <div className="mt-auto text-sm text-slate-600">
              <div>Phone: +91 98765 43210</div>
              <div className="mt-2">Email: hello@samvrtai.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* PANELS (rendered fixed below header) */}
      {showServices && (
        <div style={{ top: headerHeight }} className="fixed left-0 right-0 z-40" onMouseLeave={() => closeAll()}>
          <ServicesPanel active={activeService} setActive={setActiveService} headerHeight={headerHeight} />
        </div>
      )}

      {showSolutions && (
        <div style={{ top: headerHeight }} className="fixed left-0 right-0 z-40" onMouseLeave={() => closeAll()}>
          <SolutionsPanel active={activeSolution} setActive={(k) => setActiveSolution(k)} headerHeight={headerHeight} />
        </div>
      )}

      {showIndustries && (
        <div style={{ top: headerHeight }} className="fixed left-0 right-0 z-40" onMouseLeave={() => closeAll()}>
          <IndustriesPanel compact />
        </div>
      )}

      {showInsights && (
        <div style={{ top: headerHeight }} className="fixed left-0 right-0 z-40" onMouseLeave={() => closeAll()}>
          <InsightsPanel compact />
        </div>
      )}

      {showAbout && (
        <div style={{ top: headerHeight }} className="fixed left-0 right-0 z-40" onMouseLeave={() => closeAll()}>
          <AboutPanel compact />
        </div>
      )}
    </div>
  );
}
