import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milk Fish Entertainment — Bold Stories. Unapologetic Content.",
  description: "India's boldest OTT platform. Exclusive adult content, web series, short films. Download the Milk Fish app now.",
  keywords: "adult content, OTT platform, web series, India, streaming, exclusive content",
  openGraph: {
    title: "Milk Fish Entertainment",
    description: "Bold Stories. Unapologetic Content. India's boldest OTT platform.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080808] text-white">
        {children}
      </body>
    </html>
  );
}
