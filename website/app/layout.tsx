import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melissa Cikara | Strategic Partner for Entrepreneurs",
  description:
    "I help established entrepreneurs separate what's actually moving their business forward from everything else. Strategic partnership with 20 years of experience.",
  openGraph: {
    title: "Melissa Cikara | Strategic Partner for Entrepreneurs",
    description:
      "I don't just help you get clear — I stay in it with you and make sure it actually gets done.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${dmSans.variable} antialiased bg-[#FBF8F3] text-[#2D2A32]`}
      >
        {children}
      </body>
    </html>
  );
}
