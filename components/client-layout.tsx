"use client";

import React from "react";
import { CurrencyProvider, useCurrency } from "@/components/currency-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans antialiased">
      <Navbar currency={currency} onCurrencyChange={setCurrency} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-4 sm:pb-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <LayoutContent>{children}</LayoutContent>
    </CurrencyProvider>
  );
}
