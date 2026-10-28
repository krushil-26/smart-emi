import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ClientLayout } from "@/components/client-layout";
import { WebAppSchema } from "@/components/json-ld-schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EMI Calculator - Free Home Loan, Car Loan & Personal Loan EMI Calculator",
    template: "%s | Smart EMI Calculator",
  },
  description: siteConfig.description,
  keywords: [
    "EMI calculator",
    "Home loan EMI calculator",
    "Car loan EMI calculator",
    "Personal loan EMI calculator",
    "Loan comparison tool",
    "Amortization schedule",
    "Interest rate calculator",
    "Loan repayment schedule",
  ],
  authors: [{ name: "Smart EMI Calculator Team" }],
  creator: "Smart EMI Calculator",
  publisher: "Smart EMI Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "EMI Calculator - Free Home, Car & Personal Loan EMI Calculator",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Smart EMI Calculator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI Calculator - Free Home, Car & Personal Loan EMI Calculator",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <WebAppSchema />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
