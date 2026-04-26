import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Milk Fish Entertainment",
  description: "Terms and Conditions for using the Milk Fish Entertainment platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing, downloading, or using the Milk Fish Entertainment application or website ("Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Platform.

These Terms constitute a legally binding agreement between you ("User") and Milk Fish Entertainment Pvt. Ltd. ("Company", "we", "us", "our"). We reserve the right to update these Terms at any time, and continued use of the Platform constitutes acceptance of the updated Terms.`,
  },
  {
    title: "2. Age Restriction — 18+ Only",
    content: `THE PLATFORM CONTAINS ADULT CONTENT INTENDED EXCLUSIVELY FOR PERSONS WHO ARE 18 YEARS OF AGE OR OLDER.

By using this Platform, you represent and warrant that:
• You are at least 18 years of age
• You are legally permitted to access adult content in your jurisdiction
• You are not accessing the Platform from any jurisdiction where adult content is prohibited
• You will not permit any minor to access the Platform through your account

We reserve the right to request age verification at any time and to suspend accounts where age verification fails.`,
  },
  {
    title: "3. Account Registration",
    content: `To access certain features, you may need to create an account. You agree to:
• Provide accurate, current, and complete information during registration
• Maintain the security and confidentiality of your login credentials
• Notify us immediately of any unauthorized use of your account
• Not share your account with any other person, especially minors
• Not create more than one account per person

You are solely responsible for all activities that occur under your account. Milk Fish Entertainment is not liable for any loss resulting from unauthorized account access.`,
  },
  {
    title: "4. Subscription & Payments",
    content: `Certain content on the Platform requires a paid subscription. By subscribing, you agree to:
• Pay all applicable fees as described at the time of purchase
• Provide valid payment information
• Authorize us to charge your payment method on a recurring basis for subscription plans

All prices are inclusive of applicable taxes where required by law. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date. Refunds are issued at our sole discretion and in accordance with applicable law.`,
  },
  {
    title: "5. Content & Intellectual Property",
    content: `All content available on the Platform, including but not limited to videos, images, text, logos, and trademarks, is the exclusive property of Milk Fish Entertainment or its licensors and is protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable, revocable license to access and view content solely for personal, non-commercial purposes.

You may NOT:
• Download, copy, distribute, or reproduce any content without prior written permission
• Reverse-engineer, decompile, or attempt to extract source code
• Use content for commercial purposes or public display
• Share, sell, or transfer your account credentials to others`,
  },
  {
    title: "6. Prohibited Conduct",
    content: `You agree NOT to use the Platform to:
• Access the Platform if you are under 18 years of age
• Upload, share, or distribute any content that is illegal, harmful, or infringes third-party rights
• Harass, abuse, or harm other users
• Circumvent any security, access control, or geographic restriction measures
• Use bots, scrapers, or automated tools to access or collect data from the Platform
• Engage in any fraudulent activity or misrepresent your identity
• Attempt to gain unauthorized access to any part of the Platform or its systems
• Violate any applicable local, national, or international laws or regulations`,
  },
  {
    title: "7. Content Standards & Compliance",
    content: `All content on the Platform is produced and curated in compliance with applicable laws. We do not permit:
• Content involving minors in any sexual context (zero tolerance policy)
• Non-consensual content of any kind
• Content that promotes violence, trafficking, or exploitation

We cooperate fully with law enforcement agencies and will report any illegal content or activities to the appropriate authorities. All performers on the Platform have provided verified proof of age and informed consent.`,
  },
  {
    title: "8. Disclaimers & Limitation of Liability",
    content: `THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.

To the maximum extent permitted by law, Milk Fish Entertainment shall not be liable for:
• Any indirect, incidental, special, or consequential damages
• Loss of data, profits, or goodwill
• Interruptions in service or technical failures
• Actions of third parties or other users on the Platform

Our total liability to you for any claims shall not exceed the amount paid by you to us in the 12 months preceding the claim.`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to suspend or terminate your account at any time, with or without notice, for:
• Violation of these Terms
• Fraudulent or illegal activity
• Behavior that harms other users or the Company
• Non-payment of applicable fees

Upon termination, your right to use the Platform ceases immediately. Provisions of these Terms that by their nature should survive termination shall survive.`,
  },
  {
    title: "10. Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [City], India.

Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation for a period of 30 days.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions about these Terms, please contact us at:

Milk Fish Entertainment Pvt. Ltd.
Email: legal@milkfishentertainment.com
Address: [Registered Address], India

Last Updated: January 2025`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/80 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="Milk Fish" width={32} height={32} className="rounded-xl" />
          <span className="font-black text-sm gold-text">MILK FISH</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-white/50">
          <Link href="/privacy" className="hover:text-[#D4A017] transition-colors">Privacy Policy</Link>
          <Link href="/" className="btn-gold px-4 py-2 rounded-full text-xs font-bold">← Home</Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A017]/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-[100px] pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/30 text-[#D4A017] text-xs font-bold uppercase tracking-widest mb-6">
            <span>📋</span> Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Terms &amp; <span className="gold-text">Conditions</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Please read these terms carefully before using the Milk Fish Entertainment platform.
          </p>
          <p className="text-white/25 text-sm mt-3">Effective Date: January 1, 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* Important notice */}
        <div className="mb-10 p-6 rounded-2xl border border-[#D4A017]/40 bg-[#D4A017]/5">
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-[#D4A017] mb-1">Important Notice</p>
              <p className="text-white/60 text-sm leading-relaxed">
                This platform contains adult content and is strictly for users aged 18 and above.
                By using Milk Fish Entertainment, you confirm you are a legal adult in your jurisdiction
                and agree to all terms outlined below.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="feature-card rounded-2xl bg-white/2 p-8">
              <h2 className="text-xl font-black text-white mb-4 pb-3 border-b border-[#D4A017]/20">
                {section.title}
              </h2>
              <div className="text-white/55 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/20 text-xs">
        <p>© 2025 Milk Fish Entertainment Pvt. Ltd. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/terms" className="hover:text-[#D4A017] transition-colors">Terms &amp; Conditions</Link>
          <Link href="/privacy" className="hover:text-[#D4A017] transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-[#D4A017] transition-colors">Home</Link>
        </div>
      </footer>
    </div>
  );
}
