import React from "react";
import { BookOpen, CheckCircle, Percent, Lightbulb, Landmark } from "lucide-react";

export function SEOContentSection() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
      {/* What is EMI */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-brand-600" />
          <span>What is Equated Monthly Installment (EMI)?</span>
        </h2>
        <p>
          An <strong>Equated Monthly Installment (EMI)</strong> is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full.
        </p>
        <p>
          During the initial years of a loan, a larger portion of your EMI goes toward paying off interest. As the loan matures and the principal balance decreases, a larger proportion of the EMI is allocated toward reducing the principal amount.
        </p>
      </section>

      {/* Math Formula Breakdown */}
      <section className="space-y-4 bg-blue-50/60 p-6 rounded-2xl border border-blue-100" id="emi-formula">
        <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Percent className="w-5 h-5 text-brand-600" />
          <span>How is EMI Calculated? (Mathematical Formula)</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          The mathematical formula used to calculate EMI is:
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-xl text-center font-mono text-base sm:text-lg tracking-widest shadow-inner my-2 overflow-x-auto">
          E = P × r × (1 + r)ⁿ / ((1 + r)ⁿ - 1)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="bg-white p-3 rounded-lg border border-blue-100">
            <strong className="text-brand-700">E:</strong> Equated Monthly Installment (EMI)
          </div>
          <div className="bg-white p-3 rounded-lg border border-blue-100">
            <strong className="text-brand-700">P:</strong> Principal Loan Amount
          </div>
          <div className="bg-white p-3 rounded-lg border border-blue-100">
            <strong className="text-brand-700">r:</strong> Monthly Interest Rate (Annual Rate / 12 / 100)
          </div>
        </div>
      </section>

      {/* Factors Affecting Loan EMI */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Key Factors Influencing Your Loan EMI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">1. Loan Principal Amount</h3>
            <p className="text-xs text-slate-600">
              The total money borrowed from the bank. Higher principal amounts directly increase your monthly EMI.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">2. Interest Rate</h3>
            <p className="text-xs text-slate-600">
              The annual interest percentage charged by the lender. Fixed rates remain constant, while floating rates fluctuate with market conditions.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">3. Loan Tenure</h3>
            <p className="text-xs text-slate-600">
              The time period over which the loan is repaid. Longer tenures reduce monthly EMI but increase total interest paid over time.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Benefits Guide */}
      <section className="space-y-4 bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100" id="tax-benefits">
        <h2 className="text-lg sm:text-xl font-bold text-emerald-950 flex items-center space-x-2">
          <Landmark className="w-5 h-5 text-emerald-600" />
          <span>Home Loan Tax Benefits & Exemptions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-emerald-100 space-y-2">
            <h3 className="font-bold text-emerald-900">Section 80C Deduction</h3>
            <p className="text-slate-600">
              Deduction of up to <strong>₹1.5 Lakh per fiscal year</strong> on the principal repayment component of a Home Loan.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-100 space-y-2">
            <h3 className="font-bold text-emerald-900">Section 24(b) Deduction</h3>
            <p className="text-slate-600">
              Deduction of up to <strong>₹2.0 Lakh per fiscal year</strong> on the interest paid towards a self-occupied property.
            </p>
          </div>
        </div>
      </section>

      {/* Tips to Reduce Loan EMI */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>Pro Tips to Lower Your Monthly EMI</span>
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Make a higher down payment:</strong> Reduces principal amount and total interest burden.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Opt for prepayments:</strong> Even 1 extra EMI per year or partial lump sum payments significantly reduce total loan tenure.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Negotiate interest rates:</strong> Maintaining a credit score (CIBIL) above 750 helps secure lower interest rates from banks.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
