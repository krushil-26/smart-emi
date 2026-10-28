export const siteConfig = {
  name: "Smart EMI Calculator",
  description: "Free & accurate online EMI Calculator to calculate Home Loan, Car Loan, & Personal Loan EMIs. Get detailed amortization schedules, payment breakdowns, and loan comparison tools.",
  url: "https://smartemicalculator.com", // Base URL for canonical tags & schema
  ogImage: "https://smartemicalculator.com/og-image.png",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Home Loan EMI", href: "/home-loan-emi-calculator" },
    { title: "Car Loan EMI", href: "/car-loan-emi-calculator" },
    { title: "Personal Loan EMI", href: "/personal-loan-emi-calculator" },
    { title: "Compare Loans", href: "/compare-loans" },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  currencies: [
    { code: "INR", symbol: "₹", name: "Indian Rupee (INR)", locale: "en-IN" },
    { code: "USD", symbol: "$", name: "US Dollar (USD)", locale: "en-US" },
    { code: "EUR", symbol: "€", name: "Euro (EUR)", locale: "en-DE" },
    { code: "GBP", symbol: "£", name: "British Pound (GBP)", locale: "en-GB" },
  ],
};
