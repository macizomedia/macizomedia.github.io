"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const projects = [
  {
    title: "DeFi Trading Platform",
    description:
      "A comprehensive decentralized exchange with advanced trading features, liquidity pools, and yield farming capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    challenge:
      "Creating a secure, high-performance decentralized exchange with complex trading features and optimal gas efficiency.",
    solution:
      "We developed a custom smart contract architecture optimized for gas efficiency and implemented an intuitive frontend with real-time data visualization. The platform includes automated market makers, liquidity pools, and staking mechanisms.",
    results:
      "The platform now processes over $10M in daily trading volume with 50,000+ active users, establishing itself as a leading DeFi solution in the market.",
  },
  {
    title: "NFT Marketplace",
    description:
      "A feature-rich NFT marketplace supporting multiple blockchains, with advanced minting, trading, and royalty management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["NFT", "Marketplace", "Multi-chain"],
    challenge:
      "Building a scalable NFT marketplace that supports multiple blockchains while ensuring a seamless user experience.",
    solution:
      "We implemented a modular architecture that abstracts blockchain-specific logic, allowing for easy integration of new chains. The platform features lazy minting, gasless transactions, and comprehensive royalty management.",
    results:
      "The marketplace has facilitated over 100,000 NFT transactions across five different blockchains, with a growing community of 30,000+ artists and collectors.",
  },
  {
    title: "DAO Governance Platform",
    description:
      "A decentralized autonomous organization framework with advanced voting mechanisms, proposal management, and treasury controls.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["DAO", "Governance", "Voting"],
    challenge:
      "Developing a flexible DAO framework that balances decentralization with efficient decision-making processes.",
    solution:
      "We created a modular DAO framework with customizable voting mechanisms, including quadratic voting and delegation. The platform includes on-chain proposal execution, treasury management, and comprehensive analytics.",
    results:
      "The framework has been adopted by 15+ DAOs managing combined treasuries of over $50M, with successful implementation of 200+ governance proposals.",
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful blockchain projects and case studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </DialogHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-lg">Challenge</h4>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Solution</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Results</h4>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
