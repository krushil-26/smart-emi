import React from "react";

interface JsonLdProps {
  type: "WebApplication" | "FAQPage" | "BreadcrumbList" | "FinancialProduct";
  data: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export function WebAppSchema() {
  const data = {
    name: "Smart EMI Calculator",
    url: "https://smartemicalculator.com",
    description: "Free & accurate online EMI Calculator for Home Loan, Car Loan, and Personal Loan with amortization schedules.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Smart Financial Tools",
    },
  };

  return <JsonLd type="WebApplication" data={data} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd type="FAQPage" data={data} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd type="BreadcrumbList" data={data} />;
}
