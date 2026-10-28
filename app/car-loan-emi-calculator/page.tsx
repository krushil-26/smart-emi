import type { Metadata } from "next";
import { CarLoanClient } from "@/components/pages/car-loan-client";

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator - Calculate Auto Loan Installments Online",
  description:
    "Free online Car Loan EMI Calculator. Calculate monthly installments for new cars, used cars, and electric vehicles (EVs). Compare interest rates and amortization schedules.",
  keywords: [
    "Car loan EMI calculator",
    "Auto loan calculator",
    "Vehicle loan interest calculator",
    "New car loan EMI",
    "EV loan calculator",
  ],
};

export default function CarLoanPage() {
  return <CarLoanClient />;
}
