import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { AccessibilitySkipLink } from "@/components/accessibility-skip-link"

export const metadata: Metadata = {
  title: "Tana Impact - Transforming Communities Through Blockchain Technology",
  description:
    "A community-driven impact organization using blockchain technology to deliver measurable environmental and social outcomes in Kenya's Tana River Basin.",
  generator: "v0.app",
  keywords: ["blockchain", "impact", "sustainability", "Kenya", "Tana River", "community development", "environmental"],
  authors: [{ name: "Tana Impact Organization" }],
  openGraph: {
    title: "Tana Impact - Transforming Communities Through Blockchain Technology",
    description:
      "A community-driven impact organization using blockchain technology to deliver measurable environmental and social outcomes in Kenya's Tana River Basin.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <AccessibilitySkipLink />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
