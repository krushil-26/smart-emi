export const dynamic = "force-dynamic";

export function GET() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const publisherId = clientId?.match(/^ca-pub-(\d{16})$/)?.[1];

  if (!publisherId) {
    return new Response("AdSense publisher ID is not configured.\n", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "Retry-After": "3600",
      },
    });
  }

  return new Response(`google.com, pub-${publisherId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
