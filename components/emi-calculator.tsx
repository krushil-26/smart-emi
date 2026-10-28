"use client";

import React, { useState, useMemo } from "react";
import { calculateEMI, formatCurrency } from "@/lib/emi-math";
import { EMISummaryCards } from "@/components/emi-summary-cards";
import { EMIChart } from "@/components/emi-chart";
import { AmortizationTable } from "@/components/amortization-table";
import { RefreshCw, Calculator as CalcIcon, Sparkles } from "lucide-react";

interface EMICalculatorProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenureYears?: number;
  currency: string;
  onCurrencyChange?: (code: string) => void;
  presetAmountOptions?: { label: string; value: number }[];
  title?: string;
  subtitle?: string;
}

export function EMICalculator({
  initialAmount = 2500000,
  initialRate = 8.5,
  initialTenureYears = 20,
  currency,
  presetAmountOptions = [
    { label: "₹5 Lakh", value: 500000 },
    { label: "₹25 Lakh", value: 2500000 },
    { label: "₹50 Lakh", value: 5000000 },
    { label: "₹1 Crore", value: 10000000 },
  ],
  title = "EMI Calculator",
  subtitle = "Calculate your monthly installment, total interest, and full repayment schedule",
}: EMICalculatorProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [interestRate, setInterestRate] = useState<number>(initialRate);
  const [tenure, setTenure] = useState<number>(initialTenureYears);
  const [isTenureYears, setIsTenureYears] = useState<boolean>(true);

  const result = useMemo(() => {
    return calculateEMI(amount, interestRate, tenure, isTenureYears);
  }, [amount, interestRate, tenure, isTenureYears]);

  const handleReset = () => {
    setAmount(initialAmount);
    setInterestRate(initialRate);
    setTenure(initialTenureYears);
    setIsTenureYears(true);
  };

  return (
    <div className="space-y-8">
      {/* ── Main Input Card ── */}
      <div className="relative glass rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/60 overflow-hidden animate-fade-in">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-gradient-to-tr from-violet-400/15 to-brand-300/15 blur-2xl" />

        {/* Header */}
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-indigo-100/60">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span className="bg-gradient-to-br from-brand-500 to-accent-500 p-2 rounded-xl text-white shadow-md shadow-indigo-300/40">
                <CalcIcon className="w-6 h-6" />
              </span>
              <span>{title}</span>
              <Sparkles className="w-5 h-5 text-accent-400 animate-float" />
            </h1>
            <p className="text-sm text-slate-500 mt-1 ml-1">{subtitle}</p>
          </div>

          <button
            onClick={handleReset}
            className="self-start sm:self-center flex items-center space-x-1.5 text-xs font-semibold text-brand-600 hover:text-white bg-brand-50 hover:bg-brand-600 border border-brand-200 px-3 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-brand-300/40"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Inputs Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 1. Loan Amount */}
          <div className="space-y-3 bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 group">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
                Loan Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-36 text-right font-extrabold text-slate-900 bg-white border border-indigo-100 rounded-xl px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 focus:outline-none shadow-sm transition-all"
                />
              </div>
            </div>

            <input
              type="range"
              min={10000}
              max={20000000}
              step={10000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ "--range-progress": `${((amount - 10000) / (20000000 - 10000)) * 100}%` } as React.CSSProperties}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex flex-wrap gap-1.5 pt-1">
              {presetAmountOptions.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setAmount(preset.value)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                    amount === preset.value
                      ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white border-brand-500 shadow-sm shadow-brand-300/40 scale-105"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Interest Rate */}
          <div className="space-y-3 bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 group">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
                Interest Rate (% p.a.)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="30"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                  className="w-24 text-right font-extrabold text-slate-900 bg-white border border-indigo-100 rounded-xl px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 focus:outline-none shadow-sm transition-all"
                />
              </div>
            </div>

            <input
              type="range"
              min={1}
              max={30}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              style={{ "--range-progress": `${((interestRate - 1) / 29) * 100}%` } as React.CSSProperties}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-medium pt-1">
              <span>1%</span>
              <span className="text-brand-400 font-bold">{interestRate}%</span>
              <span>30%</span>
            </div>
          </div>

          {/* 3. Tenure */}
          <div className="space-y-3 bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
                  Tenure
                </label>
                {/* Yr / Mo toggle */}
                <div className="flex bg-indigo-50 p-0.5 rounded-lg text-[10px] font-bold border border-indigo-100">
                  <button
                    onClick={() => setIsTenureYears(true)}
                    className={`px-2 py-0.5 rounded-md transition-all duration-200 ${
                      isTenureYears
                        ? "bg-white text-brand-700 shadow-sm"
                        : "text-slate-500 hover:text-brand-600"
                    }`}
                  >
                    Yr
                  </button>
                  <button
                    onClick={() => setIsTenureYears(false)}
                    className={`px-2 py-0.5 rounded-md transition-all duration-200 ${
                      !isTenureYears
                        ? "bg-white text-brand-700 shadow-sm"
                        : "text-slate-500 hover:text-brand-600"
                    }`}
                  >
                    Mo
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={isTenureYears ? 40 : 480}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value) || 1)}
                  className="w-24 text-right font-extrabold text-slate-900 bg-white border border-indigo-100 rounded-xl px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-400 focus:outline-none shadow-sm transition-all"
                />
              </div>
            </div>

            <input
              type="range"
              min={1}
              max={isTenureYears ? 40 : 480}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              style={{ "--range-progress": `${((tenure - 1) / ((isTenureYears ? 40 : 480) - 1)) * 100}%` } as React.CSSProperties}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-medium pt-1">
              <span>1 {isTenureYears ? "Yr" : "Mo"}</span>
              <span className="text-brand-400 font-bold">{tenure} {isTenureYears ? "Yrs" : "Mos"}</span>
              <span>{isTenureYears ? "40 Yrs" : "480 Mos"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <EMISummaryCards
          monthlyEMI={result.monthlyEMI}
          totalInterest={result.totalInterest}
          totalPayment={result.totalPayment}
          principalAmount={result.principalAmount}
          currency={currency}
        />
      </div>

      {/* Chart */}
      <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <EMIChart
          principalAmount={result.principalAmount}
          totalInterest={result.totalInterest}
          currency={currency}
          yearlySchedule={result.yearlySchedule}
        />
      </div>

      {/* Amortization Table */}
      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <AmortizationTable
          yearlySchedule={result.yearlySchedule}
          monthlySchedule={result.amortizationSchedule}
          currency={currency}
        />
      </div>
    </div>
  );
}
