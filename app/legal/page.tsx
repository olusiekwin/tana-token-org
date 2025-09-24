import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Globe, AlertTriangle, CheckCircle } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Compliance & Legal Framework
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">
                Legal & Compliance
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Comprehensive legal framework ensuring regulatory compliance and protecting all stakeholders.
              </p>
            </div>

            <Card className="mb-8 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Regulatory Compliance Status
                </CardTitle>
                <CardDescription>
                  Current compliance status across key jurisdictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Kenya</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Central Bank of Kenya (CBK) consultation completed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Capital Markets Authority (CMA) guidance obtained</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>National Environment Management Authority (NEMA) approval</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Data Protection Act compliance certified</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">International</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>GDPR compliance framework implemented</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>AML/KYC procedures established</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>FATF guidelines compliance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>UN Sustainable Development Goals alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Token Classification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Utility Token Status</h4>
                      <p className="text-sm text-muted-foreground">
                        TANA is classified as a utility token providing access to ecosystem services and governance rights. 
                        It is not considered a security under Kenyan or international law.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Characteristics</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Provides access to platform services</li>
                        <li>• Enables governance participation</li>
                        <li>• Facilitates impact measurement rewards</li>
                        <li>• No expectation of profit from others' efforts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-500" />
                    Legal Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Corporate Structure</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Tana Impact Foundation:</strong> Non-profit entity (Kenya)</li>
                        <li>• <strong>Tana Technologies Ltd:</strong> Commercial entity (Kenya)</li>
                        <li>• <strong>Tana Token Foundation:</strong> Token governance (Switzerland)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Governance Framework</h4>
                      <p className="text-sm text-muted-foreground">
                        Hybrid governance combining traditional corporate governance with decentralized autonomous 
                        organization (DAO) principles for community decision-making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    International Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Anti-Money Laundering (AML)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Customer Due Diligence (CDD) procedures</li>
                        <li>• Transaction monitoring systems</li>
                        <li>• Suspicious activity reporting</li>
                        <li>• Regular compliance audits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Know Your Customer (KYC)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Identity verification requirements</li>
                        <li>• Risk-based approach to verification</li>
                        <li>• Ongoing monitoring procedures</li>
                        <li>• Enhanced due diligence for high-risk users</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Risk Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Identified Risks</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Regulatory changes in key jurisdictions</li>
                        <li>• Technology risks and smart contract vulnerabilities</li>
                        <li>• Market volatility and liquidity risks</li>
                        <li>• Operational risks in community implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mitigation Strategies</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Continuous regulatory monitoring and engagement</li>
                        <li>• Regular security audits and bug bounty programs</li>
                        <li>• Diversified treasury management</li>
                        <li>• Comprehensive insurance coverage</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Data Protection & Privacy</CardTitle>
                <CardDescription>
                  Comprehensive data protection framework ensuring user privacy and regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Data Collection Principles</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Minimization:</strong> Collect only necessary data for platform operation</li>
                      <li>• <strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                      <li>• <strong>Transparency:</strong> Clear communication about data use</li>
                      <li>• <strong>User Control:</strong> Users can access, modify, and delete their data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technical Safeguards</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• End-to-end encryption for sensitive data</li>
                      <li>• Decentralized storage using IPFS</li>
                      <li>• Zero-knowledge proofs for privacy-preserving verification</li>
                      <li>• Regular security assessments and penetration testing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Environmental & Social Compliance</CardTitle>
                <CardDescription>
                  Alignment with international environmental and social standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">International Standards Compliance</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• UN Sustainable Development Goals (SDGs)</li>
                        <li>• Paris Climate Agreement alignment</li>
                        <li>• IFC Performance Standards</li>
                        <li>• Global Reporting Initiative (GRI) Standards</li>
                      </ul>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• ISO 14001 Environmental Management</li>
                        <li>• ISO 26000 Social Responsibility</li>
                        <li>• TCFD Climate-related Financial Disclosures</li>
                        <li>• SASB Sustainability Accounting Standards</li>
                      </ul>
                    </div>
               \
