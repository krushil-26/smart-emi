"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQSchema } from "@/components/json-ld-schema";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6" id="faq">
      <FAQSchema faqs={faqs} />

      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
          <HelpCircle className="w-6 h-6 text-brand-600" />
          <span>{title}</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Everything you need to know about loan EMI calculations, formulas, and repayment strategies.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-100/70 transition-colors text-sm sm:text-base focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                    isOpen ? "rotate-180 text-brand-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
