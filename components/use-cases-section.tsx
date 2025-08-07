import { Briefcase, Globe, Lightbulb, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCasesSection() \{
  const useCases = [
    \{
      icon: <Briefcase className="h-8 w-8 text-purple-400" />,
      title: "Enterprise Data Governance",
      description: "Ensure compliance and maintain high data standards across your organization.",
    \},
    \{
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Customer 360 Initiatives",
      description: "Build a unified and accurate view of your customers for personalized experiences.",
    \},
    \{
      icon: <Lightbulb className="h-8 w-8 text-violet-400" />,
      title: "AI/ML Model Training",
      description: "Feed clean, high-quality data to your AI and machine learning models for superior performance.",
    \},
    \{
      icon: <Globe className="h-8 w-8 text-indigo-400" />,
      title: "Regulatory Compliance",
      description: "Meet stringent industry regulations with robust data quality and lineage.",
    \},
  ]

  return (
    <section id="use-cases" className="w-full py-20 md:py-32 lg:py-40 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">PRIZM</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how DQLabs PRIZM can address your specific data challenges.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          \{useCases.map((useCase, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-8 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-blue-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 shadow-lg">
                  \{useCase.icon\}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <CardTitle className="text-2xl font-semibold">\{useCase.title\}</CardTitle>
                <p className="text-gray-400">\{useCase.description\}</p>
              </CardContent>
            </Card>
          ))\}
        </div>
      </div>
    </section>
  )
\}
