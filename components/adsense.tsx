"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const publisherId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const defaultSlotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

declare global {
  interface Window {
    adsbygoogle?: { push: (value: Record<string, never>) => unknown };
  }
}

const AdSenseReadyContext = createContext(false);

export function AdSenseProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const privacyPage = pathname === "/privacy-policy";

  return (
    <AdSenseReadyContext.Provider value={ready}>
      {publisherId && !privacyPage && (
        <Script
          id="google-adsense"
          async
          crossOrigin="anonymous"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
          onLoad={() => setReady(true)}
        />
      )}
      {children}
    </AdSenseReadyContext.Provider>
  );
}

export function AdSenseAd({ slot = defaultSlotId }: { slot?: string }) {
  const ready = useContext(AdSenseReadyContext);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ready || !publisherId || !slot || pushed.current) return;

    try {
      (
        window.adsbygoogle =
          window.adsbygoogle || ([] as unknown as NonNullable<Window["adsbygoogle"]>)
      ).push({});
      pushed.current = true;
    } catch (error) {
      console.error("Unable to load the AdSense ad unit.", error);
    }
  }, [ready, slot]);

  if (!publisherId || !slot) return null;

  return (
    <div className="mx-auto my-6 w-full max-w-5xl overflow-hidden text-center">
      <ins
        className="adsbygoogle block min-h-[90px] w-full"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
