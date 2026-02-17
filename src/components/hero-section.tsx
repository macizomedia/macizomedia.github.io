"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const WireframeGrid = dynamic(
  () => import("@/components/wireframe-grid").then((mod) => mod.WireframeGrid),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 w-full h-full bg-transparent" aria-hidden="true" />,
  }
)

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Wireframe Grid Background */}
        <WireframeGrid />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70"></div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center relative">
          {/* Main Title */}
          <motion.h1
            className="brutalist-hero text-tech-mono-2 mb-8 select-none relative"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Welcome text above title */}
            <motion.div
              className="absolute -top-8 md:-top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-base md:text-lg lg:text-xl text-tech-mono-3 font-space-mono font-normal">
                Welcome to our lab
              </span>
            </motion.div>
            
            <span className="block">DECENTRALIZED</span>
            <span className="block -mt-4 text-tech-mono-5">FUTURE</span>
          </motion.h1>
          <motion.p
            className="brutalist-subtitle text-tech-mono-3 mb-8 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            EXPERT BLOCKCHAIN SOLUTIONS
          </motion.p>
          <motion.p
            className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Abquanta specializes in building cutting-edge decentralized applications, secure smart contracts, and
            seamless Web3 integrations that transform businesses and empower innovation in the blockchain ecosystem.
          </motion.p>
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
