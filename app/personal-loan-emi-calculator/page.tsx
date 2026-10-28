import type { Metadata } from "next";
import { PersonalLoanClient } from "@/components/pages/personal-loan-client";

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator - Calculate Unsecured Loan Repayments",
  description:
    "Free Personal Loan EMI Calculator. Calculate monthly installments, total interest, and complete repayment schedules for instant personal loans.",
  keywords: [
    "Personal loan EMI calculator",
    "Unsecured loan calculator",
    "Instant loan EMI",
    "Personal loan interest rate calculator",
  ],
};

export default function PersonalLoanPage() {
  return <PersonalLoanClient />;
}
