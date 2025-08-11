"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    position: "CTO, FinTech Innovations",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "BlockSpark Labs transformed our traditional finance platform with their blockchain expertise. Their team delivered a secure, scalable solution that exceeded our expectations and opened new revenue streams for our business.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    position: "Founder, NFT Collective",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with BlockSpark Labs on our NFT marketplace was a game-changer. Their technical knowledge combined with their understanding of the NFT space resulted in a platform that artists and collectors love to use.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    position: "Lead Developer, GameChain",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The smart contract architecture BlockSpark Labs developed for our gaming platform is nothing short of brilliant. Secure, gas-efficient, and perfectly aligned with our complex requirements.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    position: "Operations Director, DeFi Protocol",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "BlockSpark Labs' attention to detail and security-first approach gave us complete confidence in our DeFi protocol launch. Their team was responsive, professional, and delivered exactly what we needed.",
    rating: 4,
  },
]

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about working with BlockSpark Labs
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
