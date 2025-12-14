"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 👉 CHANGE THIS TO YOUR OFFICIAL NUMBER
  const whatsappNumber = "919876543210"; // format: countrycode + number

  const sendWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const text = `Hello SAMVRT AI 👋
My name is ${name}
Email: ${email}

Message:
${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">
          Get in touch
        </h2>
        <p className="text-slate-600 mb-6">
          Tell us about your project and we’ll get back to you shortly.
        </p>

        <div className="space-y-4">
          <input
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            rows={5}
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={sendWhatsApp}
            className="flex-1 bg-sky-600 text-white py-3 rounded-md hover:bg-sky-700 transition"
          >
            Send via WhatsApp
          </button>

          {/* Email */}
          <button
            type="button"
            onClick={() =>
              (window.location.href =
                "mailto:info@samvrtai.com?subject=Contact from SAMVRT AI Website")
            }
            className="flex-1 border border-slate-300 py-3 rounded-md hover:bg-slate-100 transition"
          >
            Email Us
          </button>
        </div>

        <div className="mt-8 text-sm text-slate-600">
          <p>
            📧 <span className="font-medium">info@samvrtai.com</span>
          </p>
          <p className="mt-1">
            📞 <span className="font-medium">+91 98765 43210</span>
          </p>
        </div>
      </div>
    </section>
  );
}
