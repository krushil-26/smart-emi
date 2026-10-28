"use client";

import React from "react";
import { EMICalculator } from "@/components/emi-calculator";
import { FAQSection, FAQItem } from "@/components/faq-section";
import { SEOContentSection } from "@/components/seo-content-section";
import { BreadcrumbSchema } from "@/components/json-ld-schema";
import { useCurrency } from "@/components/currency-context";
import { Car } from "lucide-react";
import { AdSenseAd } from "@/components/adsense";

const carLoanFaqs: FAQItem[] = [
  {
    question: "What is the typical interest rate range for Car Loans?",
    answer:
      "Car loan interest rates usually range from 8.5% to 12.0% p.a. depending on whether you are buying a new car or a used/pre-owned vehicle, your credit score, and lender policies.",
  },
  {
    question: "What is the maximum tenure for a Car Loan?",
    answer:
      "Most auto lenders offer loan tenures ranging from 1 year to 7 years (12 to 84 months). A 5-year tenure is the most popular choice among car buyers.",
  },
  {
    question: "Is down payment mandatory for a Car Loan?",
    answer:
      "While some banks offer 100% ex-showroom funding for select customers with high CIBIL scores, most lenders fund 80% to 90% of on-road vehicle price, requiring a 10% to 20% down payment.",
  },
];

export function CarLoanClient() {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://smartemicalculator.com" },
          { name: "Car Loan EMI Calculator", url: "https://smartemicalculator.com/car-loan-emi-calculator" },
        ]}
      />

      {/* Hero Intro */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
            <Car className="w-3.5 h-3.5" />
            <span>Auto Finance Calculator</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Car Loan EMI Calculator
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Planning to buy a new car or EV? Calculate monthly auto loan EMIs, compare interest rates, and analyze total payment schedules.
          </p>
        </div>
      </div>

      {/* Calculator Component */}
      <EMICalculator
        initialAmount={1000000} // ₹10 Lakhs default for Car Loan
        initialRate={9.5}       // 9.5% default rate
        initialTenureYears={5}  // 5 yrs default
        currency={currency}
        title="Auto & Car Loan EMI Calculator"
        subtitle="Calculate monthly installments for new, used, or electric vehicles"
        presetAmountOptions={[
          { label: "₹5 Lakh", value: 500000 },
          { label: "₹10 Lakh", value: 1000000 },
          { label: "₹15 Lakh", value: 1500000 },
          { label: "₹25 Lakh", value: 2500000 },
        ]}
      />

      <AdSenseAd />

      {/* SEO Content */}
      <SEOContentSection />

      {/* Car Loan FAQs */}
      <FAQSection faqs={carLoanFaqs} title="Car Loan EMI Frequently Asked Questions" />
    </div>
  );
}
