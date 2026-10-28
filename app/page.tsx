"use client";

import React from "react";
import { EMICalculator } from "@/components/emi-calculator";
import { SEOContentSection } from "@/components/seo-content-section";
import { FAQSection, FAQItem } from "@/components/faq-section";
import { BreadcrumbSchema } from "@/components/json-ld-schema";
import { useCurrency } from "@/components/currency-context";
import { AdSenseAd } from "@/components/adsense";

const homeFaqs: FAQItem[] = [
  {
    question: "What is an EMI Calculator and how does it help?",
    answer:
      "An EMI (Equated Monthly Installment) calculator is an online financial tool that calculates the exact amount you need to pay each month to repay a loan. It helps you plan your monthly budget and compare different interest rates and loan tenures instantly.",
  },
  {
    question: "Can I prepay my loan to reduce total interest?",
    answer:
      "Yes! Most financial institutions allow partial or full prepayments on loans. Making extra payments directly reduces your principal balance, which in turn significantly decreases total interest paid and shortens your overall loan tenure.",
  },
  {
    question: "What is the difference between Fixed and Floating interest rates?",
    answer:
      "A Fixed Interest Rate remains unchanged throughout your loan tenure, ensuring constant EMI payments. A Floating Interest Rate fluctuates based on central bank benchmark rates (like RBI repo rates), meaning your monthly EMI or tenure may increase or decrease over time.",
  },
  {
    question: "How accurate is this online EMI Calculator?",
    answer:
      "Our calculator uses the standard banking math formula used by top banks worldwide. It provides 99.9% precision for monthly EMI, interest total, and amortization balance.",
  },
];

export default function HomePage() {
  const { currency } = useCurrency();

  return (
    <div className="space-y-8">
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://smartemicalculator.com" }]}
      />

      {/* Main EMI Calculator */}
      <EMICalculator
        currency={currency}
        title="EMI Calculator"
        subtitle="Calculate your monthly installment, total interest, and full repayment schedule"
      />

      <AdSenseAd />

      {/* SEO Content Section */}
      <SEOContentSection />

      {/* FAQ Section */}
      <FAQSection faqs={homeFaqs} title="Frequently Asked Questions on EMI" />
    </div>
  );
}
