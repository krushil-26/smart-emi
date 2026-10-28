import type { Metadata } from "next";
import { HomeLoanClient } from "@/components/pages/home-loan-client";

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator - Calculate Monthly Housing Loan Payments & Tax Savings",
  description:
    "Free Home Loan EMI Calculator online. Estimate monthly housing loan installments, total interest payable, tax benefits under Section 80C & Section 24b, and download yearly amortization schedules.",
  keywords: [
    "Home loan EMI calculator",
    "Housing loan calculator",
    "Property loan EMI",
    "Section 80C home loan tax benefit",
    "Section 24b tax deduction",
    "Home loan interest rate calculator",
  ],
};

export default function HomeLoanPage() {
  return <HomeLoanClient />;
}
