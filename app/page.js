import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "🎬",
    title: "Exclusive Originals",
    desc: "Handcrafted stories made for the bold. Original web series, short films & more — only on Milk Fish.",
  },
  {
    icon: "🔥",
    title: "Unlimited Bold Content",
    desc: "Dive into India's most daring collection of adult entertainment. No limits, no holds barred.",
  },
  {
    icon: "📱",
    title: "Watch Anywhere",
    desc: "Seamless experience on Android & iOS. Download, watch offline, stream in full HD.",
  },
  {
    icon: "🔒",
    title: "100% Private & Secure",
    desc: "Your watching habits are your own. Military-grade encryption and zero data sharing.",
  },
  {
    icon: "✨",
    title: "New Drops Weekly",
    desc: "Fresh content every week. Be the first to watch new episodes, series and specials.",
  },
  {
    icon: "⚡",
    title: "Zero Buffering",
    desc: "Ultra-fast streaming with adaptive bitrate. Crystal clear HD even on slow networks.",
  },
];

const stats = [
  { value: "10M+", label: "Downloads" },
  { value: "5000+", label: "Hours of Content" },
  { value: "500+", label: "Exclusive Titles" },
  { value: "4.8★", label: "App Rating" },
];

export default function Home() {
  return (
    <div className="min-h-screen mesh-bg noise">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/60 border-b border-white/5">
        <a href="/" className="nav-logo-wrap">
          <Image src="/logo-nav.png" alt="Milk Fish Entertainment" width={148} height={34} priority className="nav-logo" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
          <a href="#about" className="hover:text-[#D4A017] transition-colors">About</a>
          <a href="#features" className="hover:text-[#D4A017] transition-colors">Features</a>
          <a href="#download" className="hover:text-[#D4A017] transition-colors">Download</a>
          <Link href="/terms" className="hover:text-[#D4A017] transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-[#D4A017] transition-colors">Privacy</Link>
        </div>
        <a
          href="#download"
          className=" px-5 py-2 rounded-full text-sm hidden md:block"
        >
          Get the App
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

        {/* Age badge */}
        <div className="mb-8">
          <span className="age-badge inline-block px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
            18+ Only
          </span>
        </div>

        {/* Logo — glow only behind this icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#D4A017]/25 blur-2xl pointer-events-none" aria-hidden />
            <Image
              src="/icon.png"
              alt="Milk Fish Entertainment"
              width={120}
              height={120}
              className="relative rounded-3xl ring-2 ring-[#D4A017]/30 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
          <span className="block text-white">BOLD STORIES.</span>
          <span className="block mt-2">UNAPOLOGETIC</span>
          <span className="block text-white">CONTENT.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed mb-10">
          India&apos;s boldest OTT platform. Exclusive adult web series, short films &amp; originals.
          Stream in HD. Watch anywhere, anytime — fully private.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#download"
            className="btn-gold px-8 py-4 rounded-full text-base font-black tracking-wide inline-flex items-center gap-2"
          >
            <span>📱</span> Download Now — It&apos;s Free
          </a>
          <a
            href="#about"
            className="btn-outline-gold px-8 py-4 rounded-full text-base font-bold tracking-wide inline-flex items-center gap-2"
          >
            <span>▶</span> Learn More
          </a>
        </div>

        {/* Stats row */}
        <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-4 px-2 rounded-2xl bg-white/3 border border-white/5">
              <span className="text-2xl md:text-3xl font-black gold-text">{stat.value}</span>
              <span className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      {/* <div className="gold-divider mx-8 my-0" /> */}

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text side */}
            <div>
              <p className="text-[#D4A017] text-sm font-bold uppercase tracking-widest mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                India&apos;s Home for{" "}
                <span className="gold-text">Bold Entertainment</span>
              </h2>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  Milk Fish Entertainment was born from a simple belief — Indian adults deserve
                  world-class entertainment that doesn&apos;t shy away from bold, authentic storytelling.
                </p>
                <p>
                  We create and curate exclusive adult content — web series, short films, and
                  originals — crafted by India&apos;s most fearless creators for a generation that
                  refuses to be censored.
                </p>
                <p>
                  Every title on our platform is produced responsibly, with full compliance to
                  applicable laws, and is accessible only to verified adults aged 18 and above.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Legal & Compliant", "18+ Verified", "Made in India", "Privacy First"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-[#D4A017]/30 text-[#D4A017] text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#D4A017]/20 blur-2xl pointer-events-none" aria-hidden />
                <div className="relative z-[1] w-full h-full rounded-3xl overflow-hidden border border-[#D4A017]/20 bg-black/40 flex items-center justify-center">
                  <Image
                    src="/logo-with-name.png"
                    alt="Milk Fish Entertainment"
                    width={220}
                    height={220}
                    className="object-contain p-4"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#D4A017] text-black text-xs font-black px-3 py-2 rounded-xl rotate-3">
                NEW 2025
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/5 border border-white/10 text-white text-xs font-medium px-3 py-2 rounded-xl">
                HD Streaming ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      {/* <div className="gold-divider mx-8" /> */}

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] text-sm font-bold uppercase tracking-widest mb-4">Why Milk Fish?</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Everything You <span className="gold-text">Crave</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card rounded-2xl bg-white/3 p-6"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      {/* <div className="gold-divider mx-8" /> */}

      {/* DOWNLOAD CTA */}
      <section id="download" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-6 flex justify-center">
            <div className="relative inline-flex">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#D4A017]/20 blur-xl pointer-events-none" aria-hidden />
              <Image src="/icon.png" alt="Milk Fish" width={80} height={80} className="relative z-[1] rounded-2xl ring-2 ring-[#D4A017]/40" />
            </div>
          </div>
          <p className="text-[#D4A017] text-sm font-bold uppercase tracking-widest mb-4">Download Free</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Ready to Watch?<br />
            <span className="gold-text">Get the App.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Download Milk Fish Entertainment for free. Create your account and start watching
            exclusive bold content in minutes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* Google Play */}
            <a
              href="#"
              className="btn-gold flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-left"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.31.17.66.24 1.02.19l11.67-11.67L12.44 9l-9.26 14.76zm-1.06-1.71V1.95L13.37 12 2.12 22.05zM20.05 10.41l-2.29-1.3-3.07 3.07 3.07 3.06 2.32-1.32c.66-.38.66-1.45-.03-1.51zM4.2.05C3.84 0 3.49.07 3.18.24L12.44 9.52l3.44-3.44L4.2.05z"/>
              </svg>
              <div>
                <div className="text-xs opacity-70">GET IT ON</div>
                <div className="text-base">Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="btn-outline-gold flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-left"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div className="text-xs opacity-70">DOWNLOAD ON THE</div>
                <div className="text-base">App Store</div>
              </div>
            </a>
          </div>

          <p className="text-white/30 text-sm">
            Available on Android 7.0+ and iOS 13+. For adults 18 years and above only.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <Image src="/icon.png" alt="Milk Fish" width={40} height={40} className="rounded-xl" />
              <div>
                <div className="font-black text-sm gold-text">MILK FISH ENTERTAINMENT</div>
                <div className="text-xs text-white/30">Bold Stories. Unapologetic Content.</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <a href="#about" className="hover:text-[#D4A017] transition-colors">About</a>
              <a href="#features" className="hover:text-[#D4A017] transition-colors">Features</a>
              <a href="#download" className="hover:text-[#D4A017] transition-colors">Download</a>
              <Link href="/terms" className="hover:text-[#D4A017] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-[#D4A017] transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div className="gold-divider my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
            <p>© 2025 Milk Fish Entertainment. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="age-badge px-2 py-0.5 rounded text-xs font-black">18+</span>
              <span>This platform contains adult content intended for persons 18 years of age or older.</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
