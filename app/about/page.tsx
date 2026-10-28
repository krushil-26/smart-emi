import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ChartNoAxesCombined, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Smart EMI Calculator and the tools it offers for planning and comparing loan repayments.",
};

const features = [
  {
    icon: Calculator,
    title: "Clear monthly estimates",
    description: "Estimate monthly installments from a loan amount, interest rate, and repayment term.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Understand repayment",
    description: "Review principal and interest totals, charts, and an amortization schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Plan with context",
    description: "Compare scenarios and use the results as a starting point for conversations with lenders.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10 py-8 sm:py-12">
      <header className="space-y-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-indigo-700">
          <Calculator className="h-4 w-4" /> About Smart EMI Calculator
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Make loan numbers easier to understand</h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Smart EMI Calculator is a free online tool for exploring loan repayments. It helps you estimate EMIs, see how interest adds up, and compare common loan scenarios before speaking with a lender.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="What you can do">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="glass rounded-2xl p-5 shadow-sm">
            <Icon className="mb-4 h-6 w-6 text-indigo-600" />
            <h2 className="mb-2 font-bold text-slate-900">{title}</h2>
            <p className="text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        ))}
      </section>

      <section className="glass space-y-4 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">How to use the results</h2>
        <p className="leading-relaxed text-slate-600">
          Change the amount, annual interest rate, or tenure to explore different outcomes. Calculations are estimates for general information and planning. A lender’s final terms, fees, rate changes, and repayment rules may differ.
        </p>
        <p className="leading-relaxed text-slate-600">
          The calculator does not offer loans or make lending decisions. Please confirm current rates and terms directly with the financial institution you choose.
        </p>
        <Link href="/" className="inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700">
          Open the EMI calculator
        </Link>
      </section>
    </article>
  );
}
