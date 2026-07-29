"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      fullname: (form.elements.namedItem("fullname") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      engagement: (form.elements.namedItem("engagement") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="form-card" style={{ textAlign: "center", padding: "60px 44px" }}>
        <h2>Thank you!</h2>
        <p className="lead" style={{ marginBottom: 0 }}>We&apos;ve received your message and will get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2 id="form">Send Us a Message</h2>
      <p className="lead">Tell us about the program — SAP version, timeline, and where you need support.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="Your company" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role" placeholder="e.g. Delivery Manager" />
          </div>
          <div className="form-group">
            <label htmlFor="engagement">Engagement Type</label>
            <select id="engagement" name="engagement">
              <option value="">Select an option</option>
              <option value="staff-augmentation">Staff Augmentation</option>
              <option value="subcontract-workstream">Subcontracted Workstream</option>
              <option value="fixed-scope">Fixed-Scope Module</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us about the program — SAP version, object scope, timeline..." />
        </div>
        {error && <p style={{ color: "#c94b4b", fontSize: 14, marginBottom: 16 }}>{error}</p>}
        <button type="submit" className="submit-btn" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
        <p className="form-note">We typically respond within 1–2 business days.</p>
      </form>
    </div>
  );
}
