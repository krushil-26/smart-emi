"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Menu, X, Coins, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface NavbarProps {
  currency: string;
  onCurrencyChange: (code: string) => void;
}

export function Navbar({ currency, onCurrencyChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-indigo-100/60 border-b border-indigo-100"
          : "bg-white/60 backdrop-blur-md border-b border-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 text-white p-2 rounded-xl shadow-md shadow-indigo-300/50 group-hover:shadow-indigo-400/60 group-hover:scale-105 transition-all duration-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Smart<span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">EMI</span>
              </span>
              <span className="hidden sm:inline-flex ml-2 items-center gap-1 text-[10px] px-2 py-0.5 bg-gradient-to-r from-brand-50 to-accent-50 text-brand-700 font-bold rounded-full border border-brand-200">
                <Sparkles className="w-2.5 h-2.5" />
                Calculator
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-50 text-brand-700 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-brand-700 hover:bg-brand-50/70"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Currency Selector */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-xl border border-indigo-100 shadow-sm hover:border-brand-300 transition-colors">
              <Coins className="w-4 h-4 text-brand-500" />
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                aria-label="Select Currency"
              >
                {siteConfig.currencies.map((curr) => (
                  <option key={curr.code} value={curr.code}>
                    {curr.symbol} {curr.code}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-700 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-indigo-100 px-4 pt-2 pb-4 space-y-1 animate-fade-in">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
