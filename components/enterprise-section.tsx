import { Lock, Scale, Settings } from 'lucide-react'
import BookADemoButton from "./book-a-demo-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterpriseSection() \{
  const features = [
    \{
      icon: <Scale className="h-8 w-8 text-white" />,
      title: "Scalable tagging",
      description: "Tag 1 million documents in less than a day with our robust & dynamically scaling infrastructure.",
    \},
    \{
      icon: <Lock className="h-8 w-8 text-white" />,
      title: "Secure deployment",
      description: "Deploy within your private cloud and host Deasy's open-source model in your private environment.",
    \},
    \{
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Ongoing maintenance",
      description: "Automated updates to metadata as data and business definitions evolve over time.",
    \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Enterprise</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Our enterprise customers demand scale, security and quality
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          \{features.map((feature, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500">
                  \{feature.icon\}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-xl font-semibold">\{feature.title\}</CardTitle>
                <p className="text-gray-400">\{feature.description\}</p>
              </CardContent>
            </Card>
          ))\}
        </div>
        <BookADemoButton className="mt-12" />
      </div>
    </section>
  )
\}
