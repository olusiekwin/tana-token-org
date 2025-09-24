import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Code, BookOpen, Shield, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Documentation Hub
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Comprehensive Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Everything you need to understand our impact methodology, technology stack, and community governance model.
          </p>
        </div>

        {/* Quick Start Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>White Paper</CardTitle>
                <CardDescription>Our comprehensive vision for blockchain-enabled community impact</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/docs/whitepaper">
                    Read White Paper <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Vision & Mission</CardTitle>
                <CardDescription>Understanding our core values and long-term community goals</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/vision-mission">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Impact Methodology</CardTitle>
                <CardDescription>How we measure and track environmental and social outcomes</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/docs/impact-methodology">
                    Explore Methods <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Technical Documentation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technical Documentation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Architecture Overview</CardTitle>
                <CardDescription>
                  Technical architecture of our blockchain infrastructure and mobile integration
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/architecture">System Design</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/docs/api">API Reference</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Security protocols, audit reports, and regulatory compliance documentation
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/docs/security">Security Model</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/legal">Legal Framework</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Governance & Economics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Governance & Economics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tokenomics</CardTitle>
                <CardDescription>Token distribution, economic model, and incentive structures</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/tokenomics">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Governance Model</CardTitle>
                <CardDescription>Community decision-making processes and voting mechanisms</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/governance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Roadmap</CardTitle>
                <CardDescription>Development timeline and future milestones</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto justify-start" asChild>
                  <Link href="/roadmap">
                    View Timeline <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Resources & Reports */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Resources & Reports</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Impact Reports</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/reports/q4-2024" className="text-primary hover:underline">
                      Q4 2024 Impact Report
                    </Link>
                    <p className="text-sm text-muted-foreground">Quarterly environmental and social impact metrics</p>
                  </li>
                  <li>
                    <Link href="/reports/annual-2024" className="text-primary hover:underline">
                      2024 Annual Report
                    </Link>
                    <p className="text-sm text-muted-foreground">Comprehensive yearly impact assessment</p>
                  </li>
                  <li>
                    <Link href="/reports/community-feedback" className="text-primary hover:underline">
                      Community Feedback Summary
                    </Link>
                    <p className="text-sm text-muted-foreground">Insights from community stakeholders</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/docs/api" className="text-primary hover:underline">
                      API Documentation
                    </Link>
                    <p className="text-sm text-muted-foreground">Complete API reference and integration guides</p>
                  </li>
                  <li>
                    <Link href="/docs/sdk" className="text-primary hover:underline">
                      Developer SDK
                    </Link>
                    <p className="text-sm text-muted-foreground">Tools for building on our platform</p>
                  </li>
                  <li>
                    <Link href="/docs/mobile-integration" className="text-primary hover:underline">
                      Mobile Integration Guide
                    </Link>
                    <p className="text-sm text-muted-foreground">NFC and mobile money integration documentation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
