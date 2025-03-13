import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ahmed Sakr",
    bio: "Ahmed Sakr is a seasoned financial expert with over 15 years of experience in investment banking and fixed income markets. With extensive international exposure, Ahmed specializes in developing robust investment strategies and managing complex risk profiles across global markets. His strategic approach to navigating diverse financial landscapes has been instrumental in optimizing portfolio performance and mitigating risks for clients worldwide.",
  },
  {
    name: "Samar Gad",
    bio: "Samar Gad is a distinguished business development and investor relations professional with extensive experience in the financial sector. Her exceptional ability to forge strategic partnerships and communicate complex financial products to diverse stakeholders has been instrumental in AGYAL's growth. Samar's expertise in sales strategy, client relationship management, and market positioning has helped establish AGYAL as a trusted name in the fixed income investment space across multiple regions.",
  },
]

export default function ManagementTeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Team</h1>
        <p className="mb-8 text-lg">
          Meet the financial experts behind AGYAL's success. Our leadership team brings together decades of experience
          in finance, technology, and Islamic banking to provide you with the best fixed income opportunities.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-2">Executive Member</p>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AGYAL. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

