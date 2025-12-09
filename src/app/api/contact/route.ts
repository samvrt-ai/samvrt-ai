// /app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ReqBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const CONTACT_TO = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

// In-memory rate limit (small, resets on server restart)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 min
const RATE_LIMIT_MAX = 6;
const ipMap = new Map<string, { count: number; firstAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry) {
    ipMap.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (now - entry.firstAt > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, firstAt: now });
    return false;
  }
  entry.count += 1;
  ipMap.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = (await req.json()) as ReqBody;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "New contact request from website").trim();
    const message = (body.message || "").trim();

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass || !CONTACT_TO) {
      console.error("SMTP configuration missing.");
      return NextResponse.json({ error: "Server email configuration is incomplete." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const html = `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Arial; color:#111">
        <h2>New contact from website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${nl2br(escapeHtml(message))}</p>
        <hr />
        <p style="font-size:12px;color:#666">Received at ${new Date().toISOString()}</p>
      </div>
    `;

    const mailOptions = {
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: `${name || ""} <${email}> says:\n\n${message}`,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl2br(s: string) {
  return s.replace(/\n/g, "<br/>");
}
