import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PieChart, TrendingUp, Users, Lock, Coins, Target } from "lucide-react"
import Link from "next/link"

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Economic Model
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Tokenomics</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A sustainable economic model designed to incentivize positive impact and community participation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    Token Fundamentals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Token Name</span>
                      <span className="font-semibold">Tana Token</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Symbol</span>
                      <span className="font-semibold">TANA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Standard</span>
                      <span className="font-semibold">ERC-20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Supply</span>
                      <span className="font-semibold">1,000,000,000 TANA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Decimals</span>
                      <span className="font-semibold">18</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-blue-500" />
                    Token Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Community Rewards</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-blue-500 rounded"></div>
                        <span className="text-sm font-semibold">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Impact Fund</span>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-2 bg-green-500 rounded"></div>
                        <span className="text-sm font-semibold">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Team & Advisors</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-2 bg-orange-500 rounded"></div>
                        <span className="text-sm font-semibold">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Treasury</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-2 bg-purple-500 rounded"></div>
                        <span className="text-sm font-semibold">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Detailed Allocation Breakdown
                </CardTitle>
                <CardDescription>
                  How tokens are distributed to maximize community impact and sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Community Rewards (400M TANA)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Environmental actions: 200M TANA</li>
                      <li>• Social impact activities: 100M TANA</li>
                      <li>• Governance participation: 50M TANA</li>
                      <li>• Early adopter incentives: 50M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-500">Impact Fund (300M TANA)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Water infrastructure projects: 150M TANA</li>
                      <li>• Reforestation initiatives: 100M TANA</li>
                      <li>• Education and healthcare: 50M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-500">Team & Advisors (200M TANA)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Core development team: 120M TANA</li>
                      <li>• Strategic advisors: 50M TANA</li>
                      <li>• Community leaders: 30M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-500">Treasury (100M TANA)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Emergency reserves: 50M TANA</li>
                      <li>• Future development: 30M TANA</li>
                      <li>• Partnership incentives: 20M TANA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-red-500" />
                    Vesting Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Community Rewards</span>
                        <span className="text-sm text-green-500">No Vesting</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Impact Fund</span>
                        <span className="text-sm text-blue-500">Project-based Release</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Team & Advisors</span>
                        <span className="text-sm text-orange-500">4-year Linear</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Treasury</span>
                        <span className="text-sm text-purple-500">DAO Controlled</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Value Accrual Mechanisms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Impact Staking:</strong> Earn rewards by locking tokens for verified impact projects
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Governance Rights:</strong> Vote on project funding and community decisions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Transaction Fees:</strong> Reduced fees for TANA holders in the ecosystem
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Buyback Program:</strong> Portion of ecosystem revenue used to buy back tokens
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Earning Opportunities
                </CardTitle>
                <CardDescription>
                  Multiple ways for community members to earn TANA tokens through positive impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Environmental Actions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tree planting: 5 TANA per tree</li>
                      <li>• Water conservation: 10 TANA per project</li>
                      <li>• Waste cleanup: 2 TANA per kg</li>
                      <li>• Solar installation: 100 TANA per kW</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Social Impact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Education sessions: 15 TANA per hour</li>
                      <li>• Healthcare support: 25 TANA per day</li>
                      <li>• Community organizing: 50 TANA per event</li>
                      <li>• Skills training: 20 TANA per session</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Economic Participation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Local commerce: 1% cashback in TANA</li>
                      <li>• Governance voting: 5 TANA per vote</li>
                      <li>• Impact verification: 10 TANA per report</li>
                      <li>• Referral program: 25 TANA per signup</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/governance">
                  Next: Governance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/architecture">Back to Architecture</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
