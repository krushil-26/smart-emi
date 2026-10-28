import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Smart EMI Calculator team with questions, feedback, or correction requests.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 py-8 sm:py-12">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-indigo-700">
          <MessageCircle className="h-4 w-4" /> Contact
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact Us</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Have feedback about the calculator, spotted an issue, or have a question about the site? We’d like to hear from you.
        </p>
      </header>

      <section className="glass space-y-6 rounded-2xl p-6 sm:p-8">
        <div>
          <h2 className="font-bold text-slate-900">Send us a message</h2>
          <p className="mt-1 text-sm text-slate-600">Please don’t include sensitive financial or account information.</p>
        </div>
        <ContactForm />
      </section>
    </article>
  );
}
