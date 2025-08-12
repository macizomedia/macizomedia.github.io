import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abquanta | Blockchain Development Agency",
  description: "Expert blockchain solutions for decentralized applications, smart contracts, and Web3 integrations. Transform your business with cutting-edge blockchain technology.",
  keywords: "blockchain development, smart contracts, web3, DeFi, NFT, dApp development, cryptocurrency, ethereum, solidity",
  authors: [{ name: "Abquanta" }],
  creator: "Abquanta",
  publisher: "Abquanta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macizomedia.github.io",
    siteName: "Abquanta",
    title: "Abquanta | Blockchain Development Agency",
    description: "Expert blockchain solutions for decentralized applications, smart contracts, and Web3 integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abquanta | Blockchain Development Agency",
    description: "Expert blockchain solutions for decentralized applications, smart contracts, and Web3 integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${spaceMono.variable} antialiased min-h-screen bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
