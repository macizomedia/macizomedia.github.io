import type { Metadata } from "next";
import "./globals.css";

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
  const themeInitScript = `
    (() => {
      try {
        const saved = localStorage.getItem("theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = saved === "light" || saved === "dark" ? saved : (systemDark ? "dark" : "light");
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
      } catch (_) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
