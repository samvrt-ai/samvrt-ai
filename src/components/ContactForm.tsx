"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "919876543210"; // change to your number

  function sendWhatsApp() {
    const text = `Hello, My name is ${name}.\nMy email is ${email}.\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Get in touch</h3>

      <input
        className="w-full border p-3 rounded mb-4"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-3 rounded mb-4"
        placeholder="Your Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded mb-4"
        placeholder="Your Message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <div className="flex gap-4">
        
        {/* Send Message without backend */}
        <button
          type="button"
          onClick={sendWhatsApp}
          className="px-4 py-2 bg-sky-600 text-white rounded-md"
        >
          Send Message
        </button>

        {/* Open email client */}
        <button
          type="button"
          onClick={() =>
            window.location.href = `mailto:your-email@example.com`
          }
          className="px-4 py-2 border rounded-md"
        >
          Open Email Client
        </button>
      </div>
    </form>
  );
}
