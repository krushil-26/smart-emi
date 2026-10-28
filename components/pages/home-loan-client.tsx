"use client";

import React from "react";
import { EMICalculator } from "@/components/emi-calculator";
import { FAQSection, FAQItem } from "@/components/faq-section";
import { SEOContentSection } from "@/components/seo-content-section";
import { BreadcrumbSchema } from "@/components/json-ld-schema";
import { useCurrency } from "@/components/currency-context";
import { Home } from "lucide-react";

const homeLoanFaqs: FAQItem[] = [
  {
    question: "What is the maximum tenure available for a Home Loan?",
    answer:
      "Most banks and housing finance companies (HFCs) offer home loan tenures up to 30 years (360 months), depending on the applicant's age, income stability, and retirement age.",
  },
  {
    question: "How do I claim Tax Benefits under Section 80C and Section 24(b)?",
    answer:
      "You can claim up to ₹1.5 Lakhs for principal repayment under Section 80C and up to ₹2.0 Lakhs for interest paid under Section 24(b) by obtaining an annual Home Loan Interest Certificate from your bank and presenting it during IT return filing.",
  },
  {
    question: "What is LTV (Loan-to-Value) ratio in Home Loans?",
    answer:
      "LTV is the percentage of property value that a bank is willing to finance. Usually, banks fund 75% to 90% of property cost, requiring the home buyer to pay the remaining 10% to 25% as down payment.",
  },
];

export function HomeLoanClient() {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://smartemicalculator.com" },
          { name: "Home Loan EMI Calculator", url: "https://smartemicalculator.com/home-loan-emi-calculator" },
        ]}
      />

      {/* Hero Intro */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
            <Home className="w-3.5 h-3.5" />
            <span>Home Buying Financial Tool</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Home Loan EMI Calculator
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Plan your dream home purchase with confidence. Calculate exact monthly payments, total interest burden, and tax deduction benefits for housing loans up to 30 years.
          </p>
        </div>
      </div>

      {/* Calculator Component */}
      <EMICalculator
        initialAmount={5000000} // ₹50 Lakhs default for Home Loan
        initialRate={8.5}      // 8.5% default rate
        initialTenureYears={20} // 20 yrs
        currency={currency}
        title="Housing Loan EMI Calculator"
        subtitle="Estimate monthly EMIs for property purchases, plot loans, & construction"
        presetAmountOptions={[
          { label: "₹25 Lakh", value: 2500000 },
          { label: "₹50 Lakh", value: 5000000 },
          { label: "₹75 Lakh", value: 7500000 },
          { label: "₹1.5 Crore", value: 15000000 },
        ]}
      />

      {/* SEO Content */}
      <SEOContentSection />

      {/* Home Loan FAQs */}
      <FAQSection faqs={homeLoanFaqs} title="Home Loan EMI Frequently Asked Questions" />
    </div>
  );
}
