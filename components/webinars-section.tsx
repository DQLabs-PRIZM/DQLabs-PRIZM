import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cloud, Database, Play } from 'lucide-react'

export default function WebinarsSection() \{
  const webinars = [
    \{
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "Google Cloud",
      description: "Using Deasy with Vertex and Gemini for enterprise search",
      status: "Video available soon",
      link: "#",
    \},
    \{
      icon: <Database className="h-8 w-8 text-white" />,
      title: "LlamaIndex",
      description: "Improving RAG with Advanced Parsing / Metadata Extraction",
      status: "Watch Video",
      link: "#",
    \},
    \{
      icon: <Play className="h-8 w-8 text-white" />,
      title: "Qdrant",
      description: "Managed metadata service for your vector database",
      status: "Watch Video",
      link: "#",
    \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Resources</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Watch our webinars on using Deasy alongside leading AI companies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          \{webinars.map((webinar, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-start text-left space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500">
                  \{webinar.icon\}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-xl font-semibold">\{webinar.title\}</CardTitle>
                <p className="text-gray-400">\{webinar.description\}</p>
                <Link href=\{webinar.link\} className="flex items-center gap-2 text-blue-400 hover:underline">
                  \{webinar.status\} <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))\}
        </div>
      </div>
    </section>
  )
\}
