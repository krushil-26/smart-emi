"use client";

import React, { FormEvent, useState } from "react";

const contactEmail = "kjthakkar00@gmail.com";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const replyEmail = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const body = `${message}\n\nFrom: ${name}\nReply email: ${replyEmail}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full rounded-xl border border-indigo-100 bg-white px-4 py-3 font-normal text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Your email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-xl border border-indigo-100 bg-white px-4 py-3 font-normal text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-semibold text-slate-700">
        Subject
        <input
          required
          name="subject"
          className="w-full rounded-xl border border-indigo-100 bg-white px-4 py-3 font-normal text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <label className="block space-y-2 text-sm font-semibold text-slate-700">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="w-full resize-y rounded-xl border border-indigo-100 bg-white px-4 py-3 font-normal text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Open email app
        </button>
        <p className="text-xs text-slate-500">Your email app will open with your message ready to send.</p>
      </div>

      {submitted && (
        <p role="status" className="text-sm font-medium text-emerald-700">
          If your email app didn’t open, check that one is set up on your device.
        </p>
      )}
    </form>
  );
}
