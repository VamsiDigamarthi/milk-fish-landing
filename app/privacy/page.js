import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Milk Fish Entertainment",
  description: "Privacy Policy for the Milk Fish Entertainment platform. Learn how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `Milk Fish Entertainment Pvt. Ltd. ("Company", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our Platform.

By using Milk Fish Entertainment, you consent to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our Platform.

This policy applies to all users of the Milk Fish Entertainment mobile application and website.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following categories of information:

ACCOUNT INFORMATION
• Name, email address, and date of birth (for age verification)
• Username and password (stored encrypted)
• Payment information (processed securely through third-party payment processors — we do not store card numbers)
• Phone number (optional, for account recovery)

USAGE DATA
• Content you watch, search, and interact with
• Watch history and preferences
• Device information (device type, OS version, unique device identifiers)
• IP address and approximate geographic location
• App usage patterns and session data

TECHNICAL DATA
• Log files and crash reports
• Performance metrics
• Browser type and version (for web users)

We do NOT collect sensitive personal data beyond what is necessary for providing our services.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, operate, and improve the Platform
• Verify your age and identity to comply with legal requirements
• Process payments and manage your subscription
• Personalize your content recommendations and user experience
• Send service-related communications (account updates, receipts, policy changes)
• Send promotional communications (with your consent — you can opt out at any time)
• Detect, prevent, and respond to fraud, abuse, or illegal activities
• Comply with legal obligations and respond to lawful requests from authorities
• Analyze usage trends and improve our services

We do NOT sell your personal information to third parties for their marketing purposes.`,
  },
  {
    title: "4. Data Sharing & Disclosure",
    content: `We may share your information in the following limited circumstances:

SERVICE PROVIDERS
We share data with trusted third-party vendors who help us operate the Platform (payment processors, cloud hosting, analytics, customer support). These parties are contractually bound to keep your data confidential.

LEGAL COMPLIANCE
We may disclose your information when required by law, legal process, or government request, including to law enforcement agencies in cases of suspected illegal activity.

BUSINESS TRANSFERS
In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity, subject to the same privacy protections.

SAFETY & PROTECTION
We may share information to protect the rights, property, or safety of the Company, our users, or others.

We will NEVER share, sell, or rent your personal information to advertisers or data brokers.`,
  },
  {
    title: "5. Age Verification & Minors",
    content: `The Platform is strictly for adults aged 18 and above. We take the protection of minors very seriously.

• We collect date of birth during registration to verify age
• We may require additional age verification documentation at our discretion
• We do not knowingly collect personal information from individuals under 18
• If we discover that a minor has created an account, we will immediately terminate the account and delete associated data

If you believe a minor has accessed our Platform, please contact us immediately at safety@milkfishentertainment.com.`,
  },
  {
    title: "6. Data Security",
    content: `We implement industry-standard security measures to protect your personal information:

• SSL/TLS encryption for all data transmission
• AES-256 encryption for stored sensitive data
• Regular security audits and penetration testing
• Access controls limiting employee access to personal data
• Multi-factor authentication for administrative access
• Secure data centers with physical access controls

While we employ best-in-class security practices, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your data. In the event of a data breach, we will notify affected users within 72 hours as required by applicable law.`,
  },
  {
    title: "7. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your experience:

ESSENTIAL COOKIES
Required for the Platform to function (login sessions, security tokens).

PREFERENCE COOKIES
Remember your settings and preferences (language, content preferences).

ANALYTICS COOKIES
Help us understand how users interact with the Platform so we can improve it.

You can control cookie preferences through your device/browser settings. Disabling certain cookies may affect Platform functionality. We do not use third-party advertising cookies or cross-site tracking.`,
  },
  {
    title: "8. Your Rights & Choices",
    content: `You have the following rights regarding your personal data:

RIGHT TO ACCESS — Request a copy of the personal data we hold about you.

RIGHT TO CORRECTION — Request correction of inaccurate or incomplete data.

RIGHT TO DELETION — Request deletion of your personal data ("right to be forgotten"), subject to legal retention requirements.

RIGHT TO PORTABILITY — Request your data in a machine-readable format.

RIGHT TO OBJECT — Object to certain processing of your data, including for marketing.

RIGHT TO WITHDRAW CONSENT — Withdraw consent for optional data processing at any time.

To exercise any of these rights, contact us at privacy@milkfishentertainment.com. We will respond within 30 days.`,
  },
  {
    title: "9. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services. Specifically:

• Account data: Retained while account is active + 30 days after deletion
• Payment records: Retained for 7 years as required by financial regulations
• Usage/analytics data: Retained for 24 months in aggregated form
• Legal hold data: Retained as required by applicable law

Upon account deletion, we will delete or anonymize your personal data within 30 days, except where retention is required by law.`,
  },
  {
    title: "10. Third-Party Links & Services",
    content: `The Platform may contain links to third-party websites or integrate with third-party services (payment gateways, social logins). This Privacy Policy does not apply to those third parties.

We encourage you to review the privacy policies of any third-party services you interact with. We are not responsible for the privacy practices of third parties.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes by:

• Posting a notice on the Platform
• Sending an email to your registered address
• Displaying an in-app notification

Your continued use of the Platform after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: "12. Contact & Grievances",
    content: `For any privacy-related questions, requests, or grievances:

DATA PROTECTION OFFICER
Email: privacy@milkfishentertainment.com
Response time: Within 30 days

GRIEVANCE OFFICER (as required under Indian IT Act)
Name: [Grievance Officer Name]
Email: grievance@milkfishentertainment.com
Address: Milk Fish Entertainment Pvt. Ltd., [Registered Address], India

Last Updated: January 1, 2025`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/80 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="Milk Fish" width={32} height={32} className="rounded-xl" />
          <span className="font-black text-sm gold-text">MILK FISH</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-white/50">
          <Link href="/terms" className="hover:text-[#D4A017] transition-colors">Terms &amp; Conditions</Link>
          <Link href="/" className="btn-gold px-4 py-2 rounded-full text-xs font-bold">← Home</Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A017]/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-[100px] pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/30 text-[#D4A017] text-xs font-bold uppercase tracking-widest mb-6">
            <span>🔒</span> Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Your privacy matters to us. Here is exactly how we handle your data — clearly, transparently, with no hidden surprises.
          </p>
          <p className="text-white/25 text-sm mt-3">Effective Date: January 1, 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* Highlights */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🚫", title: "We Never Sell Your Data", desc: "Your personal information is never sold to advertisers or data brokers." },
            { icon: "🔐", title: "End-to-End Encrypted", desc: "All your data is encrypted in transit and at rest using industry standards." },
            { icon: "🗑️", title: "Delete Anytime", desc: "Request full deletion of your account and all data at any time." },
          ].map((h, i) => (
            <div key={i} className="p-5 rounded-2xl border border-[#D4A017]/20 bg-[#D4A017]/3 text-center">
              <div className="text-3xl mb-2">{h.icon}</div>
              <p className="font-bold text-white text-sm mb-1">{h.title}</p>
              <p className="text-white/40 text-xs">{h.desc}</p>
            </div>
          ))}
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
