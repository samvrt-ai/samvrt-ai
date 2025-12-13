"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function HRMSWelcomePage() {
  useEffect(() => {
    const end = Date.now() + 2000;

    const frame = () => {
      confetti({
        particleCount: 5,
        spread: 70,
        startVelocity: 20,
        gravity: 0.7,
        origin: { x: Math.random(), y: 0.6 },
        colors: ["#fda4af", "#fbcfe8", "#fde68a", "#bbf7d0"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-sky-50 px-6">
      <div className="max-w-md w-full text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10">
        {/* <img src="/logo.png" alt="SAMVRT AI" className="h-14 mx-auto mb-6" /> */}

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome to HRMS 🌸
        </h1>

        <p className="text-slate-600 mb-8">
          SAMVRT AI Employee Self-Service Portal
        </p>

        <a
          href="https://people.zoho.in/zp"
          className="block w-full py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
        >
          Continue to HRMS
        </a>

        <p className="mt-6 text-xs text-slate-500">
          Authorized employees only
        </p>
      </div>
    </div>
  );
}
