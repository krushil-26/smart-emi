"use client";

import React from "react";
import { EMICalculator } from "@/components/emi-calculator";
import { FAQSection, FAQItem } from "@/components/faq-section";
import { SEOContentSection } from "@/components/seo-content-section";
import { BreadcrumbSchema } from "@/components/json-ld-schema";
import { useCurrency } from "@/components/currency-context";
import { UserCheck } from "lucide-react";
import { AdSenseAd } from "@/components/adsense";

const personalLoanFaqs: FAQItem[] = [
  {
    question: "Why are Personal Loan interest rates higher than Home Loans?",
    answer:
      "Personal loans are unsecured loans that do not require any collateral or asset security. Because the bank takes a higher credit risk, interest rates range higher (typically 10.5% to 24% p.a.).",
  },
  {
    question: "Can I repay a Personal Loan early?",
    answer:
      "Yes, most banks allow foreclosure or partial prepayments after a lock-in period (usually 6 to 12 months). Some lenders may charge a nominal foreclosure fee (1% to 4%).",
  },
];

export function PersonalLoanClient() {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://smartemicalculator.com" },
          { name: "Personal Loan EMI Calculator", url: "https://smartemicalculator.com/personal-loan-emi-calculator" },
        ]}
      />

      {/* Hero Intro */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-400/30">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Personal Credit Tool</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Personal Loan EMI Calculator
          </h1>
          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Calculate instant monthly EMIs for unsecured personal loans, medical emergencies, travel, or debt consolidation.
          </p>
        </div>
      </div>

      {/* Calculator Component */}
      <EMICalculator
        initialAmount={500000} // ₹5 Lakhs default
        initialRate={12.5}     // 12.5% default rate
        initialTenureYears={3} // 3 yrs default
        currency={currency}
        title="Personal Loan EMI Calculator"
        subtitle="Estimate monthly EMIs for unsecured personal financing"
        presetAmountOptions={[
          { label: "₹1 Lakh", value: 100000 },
          { label: "₹3 Lakh", value: 300000 },
          { label: "₹5 Lakh", value: 500000 },
          { label: "₹10 Lakh", value: 1000000 },
        ]}
      />

      <AdSenseAd />

      {/* SEO Content */}
      <SEOContentSection />

      {/* Personal Loan FAQs */}
      <FAQSection faqs={personalLoanFaqs} title="Personal Loan EMI Frequently Asked Questions" />
    </div>
  );
}
