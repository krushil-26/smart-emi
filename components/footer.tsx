import React from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-400 text-sm border-t border-indigo-900/50 overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-56 h-56 bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2 text-white">
              <div className="bg-gradient-to-br from-brand-500 to-accent-500 p-2 rounded-xl shadow-md shadow-indigo-500/30">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                Smart<span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">EMI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Fast, free, and accurate EMI calculator for Home Loans, Car Loans, and Personal Loans. Built with Next.js for maximum performance and instant calculations.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-indigo-400 bg-indigo-900/30 px-3 py-1.5 rounded-lg border border-indigo-800/50 w-fit">
              <Sparkles className="w-3 h-3" />
              Trusted financial tool
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-xs tracking-wider uppercase">Calculators</h3>
            <ul className="space-y-2 text-xs">
              {[
                { href: "/",                          label: "General EMI Calculator" },
                { href: "/home-loan-emi-calculator",  label: "Home Loan EMI Calculator" },
                { href: "/car-loan-emi-calculator",   label: "Car Loan EMI Calculator" },
                { href: "/personal-loan-emi-calculator", label: "Personal Loan EMI Calculator" },
                { href: "/compare-loans",             label: "Compare Loan Offers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-400 transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2 text-xs">
              {[
                { href: "#emi-formula", label: "EMI Calculation Formula" },
                { href: "#tax-benefits", label: "Home Loan Tax Benefits" },
                { href: "#amortization", label: "Amortization Schedule Guide" },
                { href: "#faq", label: "Frequently Asked Questions" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-brand-400 transition-colors duration-150">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-xs tracking-wider uppercase">Company</h3>
            <ul className="space-y-2 text-xs">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-400 transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-xs tracking-wider uppercase">Disclaimer</h3>
            <div className="flex items-start space-x-2 text-xs text-slate-400 bg-indigo-900/30 p-3 rounded-xl border border-indigo-800/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                The calculated results are for illustrative and planning purposes only. Actual interest rates, EMIs, and processing fees may vary depending on your bank or financial institution.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Smart EMI Calculator. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-indigo-400">
            <Sparkles className="w-3 h-3" />
            <span>Built with precision for financial clarity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
