import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ServiceWorkerManager from "@/components/service-worker-manager"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlockSpark Labs | Blockchain Development Agency",
  description: "Expert blockchain solutions for decentralized applications, smart contracts, and Web3 integrations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ServiceWorkerManager />
        {children}
      </body>
    </html>
  )
}
