"use client";

import React, { useEffect, useRef } from "react";
import { formatCurrency, formatCompactNumber } from "@/lib/emi-math";
import { Percent, CreditCard, ArrowUpRight, TrendingUp } from "lucide-react";

interface EMISummaryCardsProps {
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principalAmount: number;
  currency: string;
}

function AnimatedNumber({ value, currency }: { value: number; currency: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prev.current === value) return;
    prev.current = value;
    el.classList.remove("animate-scale-in");
    void el.offsetWidth; // reflow
    el.classList.add("animate-scale-in");
  }, [value]);

  return (
    <span ref={ref} className="inline-block">
      {formatCurrency(value, currency)}
    </span>
  );
}

export function EMISummaryCards({
  monthlyEMI,
  totalInterest,
  totalPayment,
  principalAmount,
  currency,
}: EMISummaryCardsProps) {
  const interestPercentage = Math.round((totalInterest / totalPayment) * 100) || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* ── Monthly EMI Card ── */}
      <div className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-accent-600 text-white rounded-2xl p-6 shadow-xl shadow-brand-300/40 overflow-hidden animate-pulse-glow group hover:scale-[1.02] transition-transform duration-300">
        {/* shimmer overlay */}
        <div className="absolute inset-0 shimmer-bg opacity-20 pointer-events-none" />
        {/* decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">
            Monthly Loan EMI
          </span>
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="relative text-3xl sm:text-4xl font-extrabold tracking-tight my-2">
          <AnimatedNumber value={monthlyEMI} currency={currency} />
        </div>

        <div className="relative flex items-center gap-1.5 mt-2">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-200" />
          <p className="text-xs text-indigo-200">Payable every month for your selected tenure</p>
        </div>
      </div>

      {/* ── Total Interest Card ── */}
      <div className="relative glass rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-amber-100/60 hover:scale-[1.02] transition-all duration-300 group overflow-hidden border border-amber-100">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-100/60 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-amber-700 transition-colors">
            Total Interest Payable
          </span>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-2 rounded-xl border border-amber-200 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
            <Percent className="w-5 h-5 text-amber-600" />
          </div>
        </div>

        <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight my-2">
          <AnimatedNumber value={totalInterest} currency={currency} />
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-16 h-1.5 rounded-full bg-amber-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-700"
                style={{ width: `${interestPercentage}%` }}
              />
            </div>
            <span className="text-xs text-slate-500">{interestPercentage}% of total</span>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            {formatCompactNumber(totalInterest, currency)}
          </span>
        </div>
      </div>

      {/* ── Total Amount Card ── */}
      <div className="relative glass rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-emerald-100/60 hover:scale-[1.02] transition-all duration-300 group overflow-hidden border border-emerald-100">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-100/60 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-700 transition-colors">
            Total Amount (Principal + Interest)
          </span>
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-2 rounded-xl border border-emerald-200 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all">
            <ArrowUpRight className="w-5 h-5 text-emerald-600" />
          </div>
        </div>

        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight my-2">
          <AnimatedNumber value={totalPayment} currency={currency} />
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-500">
            Principal: {formatCompactNumber(principalAmount, currency)}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            {formatCompactNumber(totalPayment, currency)}
          </span>
        </div>
      </div>

    </div>
  );
}
