"use client";

import React, { useState } from "react";
import {
  formatCurrency,
  AmortizationMonth,
  AmortizationYear,
} from "@/lib/emi-math";
import { Download, Calendar, Table2 } from "lucide-react";

interface AmortizationTableProps {
  yearlySchedule: AmortizationYear[];
  monthlySchedule: AmortizationMonth[];
  currency: string;
}

export function AmortizationTable({
  yearlySchedule,
  monthlySchedule,
  currency,
}: AmortizationTableProps) {
  const [viewMode, setViewMode] = useState<"yearly" | "monthly">("yearly");

  const downloadCSV = () => {
    const headers = ["Period", "Payment (EMI)", "Principal Paid", "Interest Paid", "Balance Remaining"];
    const rows =
      viewMode === "yearly"
        ? yearlySchedule.map((y) => [
            `Year ${y.year}`,
            y.totalPayment,
            y.principalPaid,
            y.interestPaid,
            y.endingBalance,
          ])
        : monthlySchedule.map((m) => [
            `Month ${m.month} (Year ${m.year})`,
            m.emi,
            m.principalPaid,
            m.interestPaid,
            m.endingBalance,
          ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `EMI_Amortization_Schedule_${viewMode}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass border border-indigo-100 rounded-2xl p-6 shadow-lg shadow-indigo-50" id="amortization">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-indigo-100/60">
        <div>
          <h3 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
            <span className="bg-gradient-to-br from-brand-500 to-accent-500 p-1.5 rounded-lg text-white">
              <Table2 className="w-4 h-4" />
            </span>
            <span>Loan Amortization Schedule</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Complete breakdown of principal, interest, and remaining balance over loan lifetime.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Toggle */}
          <div className="flex bg-indigo-50 p-1 rounded-xl border border-indigo-100">
            {(["yearly", "monthly"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  viewMode === mode
                    ? "bg-white text-brand-700 shadow-sm"
                    : "text-slate-500 hover:text-brand-600"
                }`}
              >
                {mode === "yearly" ? "Yearly Summary" : "Monthly Breakdown"}
              </button>
            ))}
          </div>

          {/* Export */}
          <button
            onClick={downloadCSV}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm shadow-brand-300/40 hover:shadow-brand-400/50"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-96 rounded-xl border border-indigo-100">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead className="bg-gradient-to-r from-brand-50 to-indigo-50 text-slate-700 sticky top-0 font-semibold border-b border-indigo-100 z-10">
            <tr>
              <th className="py-3 px-4">Period</th>
              <th className="py-3 px-4 text-right">Principal Paid</th>
              <th className="py-3 px-4 text-right">Interest Paid</th>
              <th className="py-3 px-4 text-right">Total Payment</th>
              <th className="py-3 px-4 text-right">Ending Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-50 bg-white/60">
            {viewMode === "yearly"
              ? yearlySchedule.map((row, i) => (
                  <tr
                    key={row.year}
                    className="hover:bg-brand-50/50 transition-colors duration-150 group"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <td className="py-3 px-4 font-semibold text-slate-800 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-brand-400 group-hover:text-brand-600 transition-colors" />
                      <span>Year {row.year}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-slate-700">
                      {formatCurrency(row.principalPaid, currency)}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-amber-600">
                      {formatCurrency(row.interestPaid, currency)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-slate-900">
                      {formatCurrency(row.totalPayment, currency)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">
                      <span className="text-brand-600 bg-brand-50 px-2 py-0.5 rounded-lg text-xs">
                        {formatCurrency(row.endingBalance, currency)}
                      </span>
                    </td>
                  </tr>
                ))
              : monthlySchedule.map((row) => (
                  <tr key={row.month} className="hover:bg-brand-50/50 transition-colors duration-150">
                    <td className="py-2.5 px-4 font-medium text-slate-800">
                      Month {row.month}{" "}
                      <span className="text-slate-400 text-xs">(Yr {row.year})</span>
                    </td>
                    <td className="py-2.5 px-4 text-right font-medium text-slate-700">
                      {formatCurrency(row.principalPaid, currency)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-medium text-amber-600">
                      {formatCurrency(row.interestPaid, currency)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-semibold text-slate-900">
                      {formatCurrency(row.emi, currency)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-semibold">
                      <span className="text-brand-600 bg-brand-50 px-2 py-0.5 rounded-lg text-xs">
                        {formatCurrency(row.endingBalance, currency)}
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
