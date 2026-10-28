"use client";

import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { formatCurrency, AmortizationYear } from "@/lib/emi-math";
import { PieChart as PieIcon, TrendingDown } from "lucide-react";

interface EMIChartProps {
  principalAmount: number;
  totalInterest: number;
  currency: string;
  yearlySchedule: AmortizationYear[];
}

export function EMIChart({
  principalAmount,
  totalInterest,
  currency,
  yearlySchedule,
}: EMIChartProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"donut" | "schedule">("donut");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="glass border border-indigo-100 rounded-2xl p-6 h-80 flex items-center justify-center text-slate-400 animate-pulse">
        Loading interactive chart…
      </div>
    );
  }

  const donutData = [
    { name: "Principal Amount", value: principalAmount, color: "#6366f1" },
    { name: "Total Interest",   value: totalInterest,   color: "#f59e0b" },
  ];

  const chartScheduleData = yearlySchedule.map((item) => ({
    name: `Yr ${item.year}`,
    Balance:       item.endingBalance,
    PrincipalPaid: item.principalPaid,
    InterestPaid:  item.interestPaid,
  }));

  return (
    <div className="glass border border-indigo-100 rounded-2xl p-6 shadow-lg shadow-indigo-50">

      {/* Tab Switcher */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-indigo-100/60">
        <h3 className="font-bold text-slate-900 flex items-center space-x-2">
          <span className="bg-gradient-to-br from-brand-500 to-accent-500 p-1.5 rounded-lg text-white">
            {activeTab === "donut"
              ? <PieIcon className="w-4 h-4" />
              : <TrendingDown className="w-4 h-4" />}
          </span>
          <span>{activeTab === "donut" ? "Loan Breakup Ratio" : "Balance Amortization Trend"}</span>
        </h3>

        <div className="flex bg-indigo-50 p-1 rounded-xl border border-indigo-100">
          {(["donut", "schedule"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-brand-700 shadow-sm"
                  : "text-slate-500 hover:text-brand-600"
              }`}
            >
              {tab === "donut" ? "Breakup Pie" : "Tenure Schedule"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Donut View ── */}
      {activeTab === "donut" && (
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 animate-fade-in">
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  <radialGradient id="grad-principal" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </radialGradient>
                  <radialGradient id="grad-interest" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="#fcd34d" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </radialGradient>
                </defs>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={68}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={900}
                >
                  <Cell fill="url(#grad-principal)" stroke="none" />
                  <Cell fill="url(#grad-interest)"  stroke="none" />
                </Pie>
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value, currency), ""]}
                  contentStyle={{
                    backgroundColor: "#1e1b4b",
                    borderRadius: "14px",
                    color: "#e0e7ff",
                    border: "none",
                    fontSize: "12px",
                    padding: "10px 14px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50 border border-brand-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-sm shadow-brand-300" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Principal Amount</div>
                  <div className="text-base font-bold text-slate-900">
                    {formatCurrency(principalAmount, currency)}
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-brand-700 bg-white px-3 py-1 rounded-full border border-brand-200 shadow-sm">
                {Math.round((principalAmount / (principalAmount + totalInterest)) * 100)}%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm shadow-amber-300" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Total Interest</div>
                  <div className="text-base font-bold text-amber-700">
                    {formatCurrency(totalInterest, currency)}
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-white px-3 py-1 rounded-full border border-amber-200 shadow-sm">
                {Math.round((totalInterest / (principalAmount + totalInterest)) * 100)}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Schedule Chart View ── */}
      {activeTab === "schedule" && (
        <div className="w-full h-72 animate-fade-in">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartScheduleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#a5b4fc" fontSize={11} tickLine={false} />
              <YAxis
                stroke="#a5b4fc"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e7ff" />
              <Tooltip
                formatter={(value: number) => formatCurrency(value, currency)}
                contentStyle={{
                  backgroundColor: "#1e1b4b",
                  borderRadius: "14px",
                  color: "#e0e7ff",
                  border: "none",
                  fontSize: "12px",
                  padding: "10px 14px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", color: "#64748b" }} />
              <Area
                type="monotone"
                dataKey="Balance"
                stroke="#6366f1"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorBalance)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
