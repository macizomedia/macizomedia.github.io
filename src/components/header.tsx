"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                BSL
              </div>
            </div>
            <span className="hidden font-bold sm:inline-block">Abquanta Labs</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#why-choose-us" className="text-sm font-medium hover:text-primary">
            Why Choose Us
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
            Portfolio
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Get a Free Consultation</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link href="#services" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#why-choose-us" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Why Choose Us
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="#contact" onClick={toggleMenu}>
                Get a Free Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
