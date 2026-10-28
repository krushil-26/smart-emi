import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Smart EMI Calculator handles information and how advertising cookies may be used on the site.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-8 py-8 sm:py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Smart EMI Calculator</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: October 29, 2026</p>
      </header>

      <div className="glass space-y-8 rounded-2xl p-6 text-sm leading-relaxed text-slate-700 sm:p-8">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">About this policy</h2>
          <p>This policy explains how Smart EMI Calculator handles information when you visit this website. It applies to the calculator and related pages on smartemicalculator.com.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Information you enter in the calculator</h2>
          <p>The loan amount, interest rate, tenure, and currency you enter are used to display calculations in your browser. The site does not ask you to create an account or enter bank credentials to use the calculator. Do not enter sensitive personal or financial information.</p>
          <p>Our hosting provider may process standard technical information, such as IP address, browser details, and server request data, to deliver and protect the site.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Cookies and advertising</h2>
          <p>When Google AdSense is enabled, Google and its advertising partners may use cookies, device identifiers, IP addresses, or similar technologies to serve, measure, and personalize ads. Depending on your location, choices, and settings, ads may be personalized based on your visits to this site or other sites.</p>
          <p>You can manage personalized advertising through <a className="font-semibold text-indigo-700 underline underline-offset-2" href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">Google Ads Settings</a>. You can also learn about opting out of some participating companies’ personalized advertising at <a className="font-semibold text-indigo-700 underline underline-offset-2" href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">aboutads.info</a>. Your browser settings may provide additional cookie controls.</p>
          <p>Read <a className="font-semibold text-indigo-700 underline underline-offset-2" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from sites or apps that use its services</a> for more details.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Third-party services and links</h2>
          <p>Advertising and other third-party services may process information under their own privacy policies. This site does not control their practices. External links take you to sites governed by their own terms and policies.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Your choices and this policy</h2>
          <p>Cookie controls are available in your browser, and Google provides advertising controls linked above. Privacy and consent requirements can depend on where you live. For example, Google requires publishers serving personalized ads in the EEA, UK, and Switzerland to use a certified consent management platform. Please review your AdSense privacy and consent settings for the regions you serve.</p>
          <p>We may update this policy as the site or its services change. The date at the top indicates when it was last revised.</p>
        </section>
      </div>
    </article>
  );
}
