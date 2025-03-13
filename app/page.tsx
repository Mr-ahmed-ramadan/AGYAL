"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Updated mock data for yield comparisons
const yieldData = {
  // GCC Countries
  UAE: { traditional: { high: 2.2, average: 1.5 }, agyal: { high: 4.5, average: 3.8 } },
  "Saudi Arabia": { traditional: { high: 2.4, average: 1.7 }, agyal: { high: 4.7, average: 4.0 } },
  Qatar: { traditional: { high: 2.3, average: 1.6 }, agyal: { high: 4.6, average: 3.9 } },
  Kuwait: { traditional: { high: 2.1, average: 1.4 }, agyal: { high: 4.4, average: 3.7 } },
  Bahrain: { traditional: { high: 2.5, average: 1.8 }, agyal: { high: 4.8, average: 4.1 } },
  Oman: { traditional: { high: 2.6, average: 1.9 }, agyal: { high: 4.9, average: 4.2 } },

  // Key EU Countries
  Germany: { traditional: { high: 1.8, average: 1.1 }, agyal: { high: 4.1, average: 3.4 } },
  France: { traditional: { high: 1.9, average: 1.2 }, agyal: { high: 4.2, average: 3.5 } },
  Italy: { traditional: { high: 2.3, average: 1.6 }, agyal: { high: 4.6, average: 3.9 } },
  Spain: { traditional: { high: 2.2, average: 1.5 }, agyal: { high: 4.5, average: 3.8 } },
  Netherlands: { traditional: { high: 1.7, average: 1.0 }, agyal: { high: 4.0, average: 3.3 } },

  // UK and US
  UK: { traditional: { high: 2.2, average: 1.5 }, agyal: { high: 4.5, average: 3.8 } },
  USA: { traditional: { high: 2.5, average: 1.8 }, agyal: { high: 4.8, average: 4.1 } },

  // Other Key Countries
  Japan: { traditional: { high: 1.2, average: 0.5 }, agyal: { high: 3.5, average: 2.8 } },
  Singapore: { traditional: { high: 1.8, average: 1.1 }, agyal: { high: 4.1, average: 3.4 } },
  Australia: { traditional: { high: 2.3, average: 1.6 }, agyal: { high: 4.6, average: 3.9 } },
  Canada: { traditional: { high: 2.4, average: 1.7 }, agyal: { high: 4.7, average: 4.0 } },
  Switzerland: { traditional: { high: 1.5, average: 0.8 }, agyal: { high: 3.8, average: 3.1 } },
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("UAE")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-accent">
      <main className="flex-1 flex flex-col">
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Your Gateway to <span className="text-primary">Fixed Income Opportunities</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg">
                Discover access to exclusive fixed-income securities and Sharia-compliant options with higher yields
                than traditional banks. AGYAL offers a unique platform for global investment opportunities.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  asChild
                  className="w-full text-base sm:text-lg py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  <Link href="/results" className="relative overflow-hidden group">
                    <span className="relative z-10">Explore Opportunities</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-full"></div>
                  </Link>
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                Access higher yields through our efficient, low-cost solution
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center bg-muted/50">
          <div className="container px-4 sm:px-6">
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Global Yield Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Country
                    </label>
                    <Select onValueChange={(value) => setSelectedCountry(value)} defaultValue={selectedCountry}>
                      <SelectTrigger id="country-select">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(yieldData).map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Traditional Banks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          High: {yieldData[selectedCountry as keyof typeof yieldData].traditional.high}%
                        </p>
                        <p className="text-sm">
                          Average: {yieldData[selectedCountry as keyof typeof yieldData].traditional.average}%
                        </p>
                        <p className="text-xs mt-2 text-muted-foreground">
                          Based on average yields from top 5 banks in {selectedCountry}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base sm:text-lg">AGYAL Platform</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-primary font-bold">
                          High: {yieldData[selectedCountry as keyof typeof yieldData].agyal.high}%
                        </p>
                        <p className="text-sm text-primary font-bold">
                          Average: {yieldData[selectedCountry as keyof typeof yieldData].agyal.average}%
                        </p>
                        <p className="text-xs mt-2 text-muted-foreground">
                          AGYAL offers competitive yields through innovative financial products and efficient operations
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-sm text-center text-muted-foreground">
                    <p>
                      AGYAL consistently outperforms traditional banks by leveraging advanced technology and a global
                      network of opportunities.
                    </p>
                    <p className="mt-2">
                      Note: Yields are indicative and subject to change. Always consider your investment goals and risk
                      tolerance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="w-full py-4 sm:py-6 px-4 sm:px-6 border-t border-border/40">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2023 AGYAL. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

