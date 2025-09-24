import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            White Paper v2.1
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Tana Impact White Paper</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            A Community-Driven Digital Currency for Impact, Inclusion & Sustainability in the Tana River Basin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/tana-token/whitepaper" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#abstract" className="block text-primary hover:underline">
                  1. Abstract
                </Link>
                <Link href="#problem-statement" className="block text-primary hover:underline">
                  2. Problem Statement
                </Link>
                <Link href="#vision-mission" className="block text-primary hover:underline">
                  3. Vision & Mission
                </Link>
                <Link href="#use-cases" className="block text-primary hover:underline">
                  4. Use Cases
                </Link>
                <Link href="#architecture" className="block text-primary hover:underline">
                  5. Technical Architecture
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="#tokenomics" className="block text-primary hover:underline">
                  6. Tokenomics
                </Link>
                <Link href="#governance" className="block text-primary hover:underline">
                  7. Governance Model
                </Link>
                <Link href="#roadmap" className="block text-primary hover:underline">
                  8. Implementation Roadmap
                </Link>
                <Link href="#team" className="block text-primary hover:underline">
                  9. Team & Advisors
                </Link>
                <Link href="#legal" className="block text-primary hover:underline">
                  10. Legal Framework
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Abstract Section */}
        <section id="abstract" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Abstract</h2>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              The Tana Token represents a pioneering approach to impact funding, designed as a community-driven digital
              currency that transforms traditional aid models into sustainable, locally-owned economic systems. Built on
              Ethereum's robust blockchain infrastructure, Tana Token creates a transparent, accountable framework for
              delivering measurable environmental and social outcomes in Kenya's Tana River Basin.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our innovative approach combines blockchain technology with mobile money integration and NFC-enabled
              accessibility, ensuring that digital financial tools reach even the most remote communities. Every
              transaction within the Tana ecosystem directly correlates with verified impact metrics, creating an
              immutable record of positive change while empowering local communities to own and operate their
              development initiatives.
            </p>

            <p className="text-lg leading-relaxed">
              Through democratic governance mechanisms and transparent fund allocation, Tana Token establishes a new
              paradigm for impact investment—one where communities are not merely beneficiaries but active stakeholders
              in their own transformation. This white paper outlines our technical architecture, economic model, and
              implementation strategy for creating lasting, measurable impact through blockchain-enabled community
              empowerment.
            </p>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Ownership</CardTitle>
                <CardDescription>
                  Local communities own and operate projects, ensuring long-term sustainability and cultural alignment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transparent Impact</CardTitle>
                <CardDescription>
                  Every transaction creates immutable records of environmental and social outcomes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  NFC and mobile money integration ensures accessibility across all community members
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Democratic Governance</CardTitle>
                <CardDescription>
                  Community-driven decision making through transparent blockchain governance mechanisms
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Navigation to other sections */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button variant="outline" className="h-auto p-6 flex flex-col items-start bg-transparent" asChild>
              <Link href="/problem-statement">
                <span className="font-semibold mb-2">Problem Statement</span>
                <span className="text-sm text-muted-foreground text-left">
                  Understanding the challenges we're addressing in the Tana River Basin
                </span>
              </Link>
            </Button>

            <Button variant="outline" className="h-auto p-6 flex flex-col items-start bg-transparent" asChild>
              <Link href="/architecture">
                <span className="font-semibold mb-2">Technical Architecture</span>
                <span className="text-sm text-muted-foreground text-left">
                  Deep dive into our blockchain and mobile integration technology
                </span>
              </Link>
            </Button>

            <Button variant="outline" className="h-auto p-6 flex flex-col items-start bg-transparent" asChild>
              <Link href="/tokenomics">
                <span className="font-semibold mb-2">Tokenomics</span>
                <span className="text-sm text-muted-foreground text-left">
                  Economic model and token distribution strategy
                </span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
