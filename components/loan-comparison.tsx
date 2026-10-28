"use client";

import React, { useState } from "react";
import { calculateEMI, formatCurrency } from "@/lib/emi-math";
import { GitCompare, CheckCircle2, TrendingDown, ArrowRight } from "lucide-react";

interface LoanComparisonProps {
  currency: string;
}

export function LoanComparison({ currency }: LoanComparisonProps) {
  // Loan 1 state
  const [amount1, setAmount1] = useState(2500000);
  const [rate1, setRate1] = useState(8.5);
  const [tenure1, setTenure1] = useState(20);

  // Loan 2 state
  const [amount2, setAmount2] = useState(2500000);
  const [rate2, setRate2] = useState(9.2);
  const [tenure2, setTenure2] = useState(20);

  const loan1 = calculateEMI(amount1, rate1, tenure1, true);
  const loan2 = calculateEMI(amount2, rate2, tenure2, true);

  const emiDiff = Math.abs(loan1.monthlyEMI - loan2.monthlyEMI);
  const interestDiff = Math.abs(loan1.totalInterest - loan2.totalInterest);

  const betterEMI = loan1.monthlyEMI < loan2.monthlyEMI ? "Loan Option 1" : "Loan Option 2";
  const betterInterest = loan1.totalInterest < loan2.totalInterest ? "Loan Option 1" : "Loan Option 2";

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
          <GitCompare className="w-6 h-6 text-brand-600" />
          <span>Compare Loan Offers Side-by-Side</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Compare interest rates, monthly EMIs, and total interest payable across two different loan offers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Loan Option 1 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-extrabold text-slate-900 text-lg">Loan Option 1</h3>
            <span className="text-xs bg-blue-100 text-brand-700 px-2.5 py-1 rounded-full font-bold">
              Option A
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Loan Amount</label>
              <input
                type="number"
                value={amount1}
                onChange={(e) => setAmount1(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={rate1}
                onChange={(e) => setRate1(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Tenure (Years)</label>
              <input
                type="number"
                value={tenure1}
                onChange={(e) => setTenure1(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Monthly EMI:</span>
              <span className="font-extrabold text-brand-700 text-lg">
                {formatCurrency(loan1.monthlyEMI, currency)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Total Interest:</span>
              <span className="font-bold text-amber-600">
                {formatCurrency(loan1.totalInterest, currency)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Total Payable:</span>
              <span className="font-bold text-slate-900">
                {formatCurrency(loan1.totalPayment, currency)}
              </span>
            </div>
          </div>
        </div>

        {/* Loan Option 2 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-extrabold text-slate-900 text-lg">Loan Option 2</h3>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
              Option B
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Loan Amount</label>
              <input
                type="number"
                value={amount2}
                onChange={(e) => setAmount2(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={rate2}
                onChange={(e) => setRate2(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Tenure (Years)</label>
              <input
                type="number"
                value={tenure2}
                onChange={(e) => setTenure2(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Monthly EMI:</span>
              <span className="font-extrabold text-brand-700 text-lg">
                {formatCurrency(loan2.monthlyEMI, currency)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Total Interest:</span>
              <span className="font-bold text-amber-600">
                {formatCurrency(loan2.totalInterest, currency)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Total Payable:</span>
              <span className="font-bold text-slate-900">
                {formatCurrency(loan2.totalPayment, currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Summary Banner */}
      <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-600 text-white p-3 rounded-xl">
            <TrendingDown className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-extrabold text-emerald-950 text-base">Comparison Insight</h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              {betterEMI} offers a lower monthly EMI by{" "}
              <strong className="font-bold">{formatCurrency(emiDiff, currency)}/month</strong>. Total interest savings:{" "}
              <strong className="font-bold">{formatCurrency(interestDiff, currency)}</strong> with {betterInterest}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
