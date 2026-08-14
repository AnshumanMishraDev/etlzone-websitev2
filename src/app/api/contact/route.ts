/* API route for contact form - sends email via Resend */
/* Requires RESEND_API_KEY in Vercel env vars */
/* Optional: set RESEND_FROM (defaults to onboarding@resend.dev) */
/* Optional: set CONTACT_TO (defaults to officials@etlzone.com) */
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured. Please email us directly at officials@etlzone.com." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { fullname, company, role, engagement, email, message } = await request.json();

    if (!fullname || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fromAddr = process.env.RESEND_FROM || "Etlzone Contact <onboarding@resend.dev>";
    const toAddr = process.env.CONTACT_TO || "cool.anshuman1112@gmail.com";

    await resend.emails.send({
      from: fromAddr,
      to: [toAddr],
      subject: `New Contact Form Submission from ${fullname} (${company})`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">Name</td><td style="padding:8px;border:1px solid #ddd">${fullname}</td></tr>
          <tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">Company</td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">Role</td><td style="padding:8px;border:1px solid #ddd">${role || ""}</td></tr>
          <tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">Engagement</td><td style="padding:8px;border:1px solid #ddd">${engagement || ""}</td></tr>
          <tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${message || "No message provided."}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email us directly at officials@etlzone.com." },
      { status: 500 }
    );
  }
}
