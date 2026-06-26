import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Ashik S — Engineer · Developer · Founder",
  description:
    "Mechanical Engineering student, Embedded Systems Developer, Full Stack Developer, and MedTech Startup Co-Founder. Building at the intersection of hardware, software, and healthcare.",
  keywords: [
    "Muhammed Ashik",
    "portfolio",
    "mechanical engineer",
    "embedded systems",
    "MedTech",
    "Next.js developer",
    "Kerala",
    "Arogya Smart",
  ],
  openGraph: {
    title: "Muhammed Ashik S — Engineer · Developer · Founder",
    description: "Full stack developer, embedded systems engineer, and MedTech startup co-founder from Kerala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
