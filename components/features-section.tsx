import { ShieldCheck, Zap, Database, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() \{
  const features = [
    \{
      icon: <ShieldCheck className="h-10 w-10 text-purple-400" />,
      title: "Automated Data Quality",
      description: "Proactive identification and resolution of data inconsistencies.",
    \},
    \{
      icon: <Zap className="h-10 w-10 text-blue-400" />,
      title: "Real-time Monitoring",
      description: "Continuous oversight of data health and performance.",
    \},
    \{
      icon: <Database className="h-10 w-10 text-violet-400" />,
      title: "Intelligent Data Cataloging",
      description: "Comprehensive metadata management for enhanced discoverability.",
    \},
    \{
      icon: <TrendingUp className="h-10 w-10 text-indigo-400" />,
      title: "Predictive Analytics",
      description: "Leverage AI to foresee and prevent data quality issues.",
    \},
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 lg:py-40 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Key Capabilities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">PRIZM</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering your organization with cutting-edge data governance and quality tools.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          \{features.map((feature, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-8 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-purple-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 shadow-lg">
                  \{feature.icon\}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <CardTitle className="text-2xl font-semibold">\{feature.title\}</CardTitle>
                <p className="text-gray-400">\{feature.description\}</p>
              </CardContent>
            </Card>
          ))\}
        </div>
      </div>
    </section>
  )
\}
