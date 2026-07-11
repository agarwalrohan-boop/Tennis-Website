"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-body text-sm font-medium text-court-950"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-court-950/15 bg-white px-4 py-3 font-body text-sm text-court-950 outline-none transition-colors focus:border-ace"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-body text-sm font-medium text-court-950"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-court-950/15 bg-white px-4 py-3 font-body text-sm text-court-950 outline-none transition-colors focus:border-ace"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-body text-sm font-medium text-court-950"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-court-950/15 bg-white px-4 py-3 font-body text-sm text-court-950 outline-none transition-colors focus:border-ace"
          placeholder="Tell us about your goals, availability, and preferred location"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-court-950 px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-chalk transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="font-body text-sm text-court-800">
            Message sent — we'll get back to you within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="font-body text-sm text-clay">
            Something went wrong sending your message. Please try again or
            email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
