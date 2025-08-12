"use client"

import { useRef } from "react"
import { Award, Shield, Users, Clock, Lightbulb, Headphones } from "lucide-react"
import { motion, useInView } from "framer-motion"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of blockchain specialists, experienced developers, and industry veterans with a proven track record in delivering cutting-edge decentralized solutions.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize security at every stage of development, implementing rigorous testing, audits, and best practices to protect your blockchain applications and smart contracts.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "With a portfolio of successful projects across various industries, we've established ourselves as a trusted partner for businesses entering the blockchain space.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We understand the importance of meeting deadlines in the fast-paced blockchain industry, ensuring your projects launch on schedule without compromising quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We stay at the forefront of blockchain technology, constantly researching and implementing the latest advancements to provide innovative solutions for our clients.",
  },
  {
    icon: Headphones,
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We maintain clear communication, provide regular updates, and tailor our solutions to meet your specific business needs and objectives.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="brutalist-section-title text-3xl sm:text-4xl md:text-5xl text-tech-mono-2">Why Choose Us</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with Abquanta for unparalleled expertise and innovation in blockchain development
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
