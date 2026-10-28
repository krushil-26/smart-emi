import type { Metadata } from "next";
import { CompareLoansClient } from "@/components/pages/compare-loans-client";

export const metadata: Metadata = {
  title: "Compare Loan Offers - Side-by-Side Interest & EMI Comparison Tool",
  description:
    "Compare two loan offers side-by-side to find the lowest monthly EMI and maximum total interest savings. Works for Home, Car, and Personal Loans.",
  keywords: [
    "Compare loans",
    "Loan comparison tool",
    "Interest rate comparison",
    "Bank EMI comparison",
  ],
};

export default function CompareLoansPage() {
  return <CompareLoansClient />;
}
