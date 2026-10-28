"use client";

import React from "react";
import { LoanComparison } from "@/components/loan-comparison";
import { BreadcrumbSchema } from "@/components/json-ld-schema";
import { useCurrency } from "@/components/currency-context";

export function CompareLoansClient() {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://smartemicalculator.com" },
          { name: "Compare Loans", url: "https://smartemicalculator.com/compare-loans" },
        ]}
      />

      <LoanComparison currency={currency} />
    </div>
  );
}
