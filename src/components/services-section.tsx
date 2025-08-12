"use client"

import { useState } from "react"
import { Code, FileCode, BarChart3, Globe, Layers, Brain, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    id: "full-stack",
    icon: Code,
    title: "Full Stack Blockchain Development",
    description:
      "Building comprehensive decentralized applications (dApps), robust smart contracts, and seamless Web3 integrations for clients across finance, gaming, and NFT sectors. Our expert team develops and maintains scalable blockchain-based backends, intuitive APIs, and user-friendly interfaces, integrating seamlessly with existing cloud infrastructure for optimal performance and reliability.",
  },
  {
    id: "smart-contract",
    icon: FileCode,
    title: "Smart Contract & dApp Development",
    description:
      "Specializing in the development, rigorous testing, and comprehensive auditing of secure smart contracts using Solidity and Rust for leading blockchain platforms like Ethereum, Solana, and Polygon. We create custom tokens (ERC20, ERC721, ERC1155), innovative NFT minting platforms, and robust DAO frameworks, ensuring the highest standards of security and efficiency.",
  },
  {
    id: "data-science",
    icon: BarChart3,
    title: "Data Science & Blockchain Analytics",
    description:
      "Leveraging the power of blockchain data to provide actionable insights. Our consultants analyze on-chain data to identify key trends, detect potential fraud, and optimize tokenomics. We build intuitive dashboards and comprehensive reporting tools to visualize complex data for businesses and investors, and implement advanced machine learning models for predictive analytics in crypto trading, NFT valuation, and user behavior analysis.",
  },
  {
    id: "web3-development",
    icon: Globe,
    title: "Web3 Full Stack Development",
    description:
      "Delivering end-to-end solutions for the decentralized web. Our skilled developers build modern and engaging web frontends using technologies like React, Next.js, and Vue, coupled with robust backends using Node.js and Django. We ensure seamless blockchain integrations and offer comprehensive cloud deployment and DevOps services for decentralized applications, guaranteeing secure and scalable hosting on platforms like AWS and GCP, utilizing Docker and Kubernetes.",
  },
  {
    id: "api-microservices",
    icon: Layers,
    title: "API & Microservices Architecture with Blockchain Integration",
    description:
      "Designing and developing secure and efficient APIs and microservices that bridge the gap between traditional web applications and blockchain networks. We empower businesses to seamlessly integrate crypto payment gateways, innovative NFT functionalities, and secure token-based authentication into their existing platforms, expanding their capabilities in the Web3 ecosystem.",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI/ML-Enabled Blockchain Solutions",
    description:
      "Pioneering the integration of Artificial Intelligence and Machine Learning with blockchain technology. We develop intelligent AI-powered tools for enhanced blockchain functionality, including sophisticated fraud detection bots, automated trading systems, and personalized NFT recommendation engines. Our team expertly integrates advanced AI models into blockchain applications, such as image recognition for NFT platforms, unlocking new levels of innovation.",
  },
  {
    id: "content-consulting",
    icon: FileText,
    title: "Technical Content Creation & Blockchain Consulting",
    description:
      "Providing expert technical documentation, insightful whitepapers, and engaging educational content tailored for blockchain startups and established tech companies. Our experienced consultants offer strategic guidance on blockchain adoption, robust architecture design, and implementation of security best practices, ensuring your successful navigation of the decentralized landscape.",
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("full-stack")

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="brutalist-section-title text-3xl sm:text-4xl md:text-5xl text-tech-mono-2">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive blockchain solutions tailored to your business needs
          </p>
        </div>

        <Tabs defaultValue="full-stack" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 overflow-x-auto pb-2">
            <TabsList className="w-full justify-start md:justify-center flex-nowrap">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2 whitespace-nowrap">
                  <service.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                activeTab === service.id ? "border-primary" : ""
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
