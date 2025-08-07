import Image from "next/image"
import BookADemoButton from "./book-a-demo-button"
import { CheckCircle, Cloud, Database, Filter, GitFork, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductOverviewSection() \{
  const features = [
    \{
      icon: <Tag className="h-6 w-6 text-white" />,
      title: "Auto-derived schemas & taxonomies",
      description:
        "Reverse engineer domain-specific metadata tags and taxonomies without ANY input needed from business experts.",
    \},
    \{
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Human-in-the-loop validation & fine-tuning",
      description:
        "Test, validate and fine-tune AI metadata through an easy human-in-the-loop testing studio.",
    \},
    \{
      icon: <Filter className="h-6 w-6 text-white" />,
      title: "Curate data slices",
      description:
        "Leverage metadata to filter and curate relevant sets of files which can be rapidly served to end business or data science teams for their specific use case.",
    \},
    \{
      icon: <Cloud className="h-6 w-6 text-white" />,
      title: "Export relevant metadata",
      description:
        "Directly connect Deasy's metadata to file storage systems or vector databases for easy downstream consumption.",
    \},
  ]

  return (
    <section id="product" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Product</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          The best way to tag, filter and enrich unstructured data at scale
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Data and AI teams use Deasy Labs' metadata workflow to build their underlying data foundation across all
          unstructured content.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">Auto-derived schemas & taxonomies</h3>
            <p className="text-gray-400">
              Reverse engineer domain-specific metadata tags and taxonomies without ANY input needed from business
              experts.
            </p>
            <Image
              src="/schema-diagram.png"
              width=\{500\}
              height=\{300\}
              alt="Schema Diagram"
              className="rounded-lg shadow-xl border border-gray-700"
            />
          </div>
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">Human-in-the-loop validation & fine-tuning</h3>
            <p className="text-gray-400">
              Test, validate and fine-tune AI metadata through an easy human-in-the-loop testing studio.
            </p>
            <Image
              src="/validation-diagram.png"
              width=\{500\}
              height=\{300\}
              alt="Validation Diagram"
              className="rounded-lg shadow-xl border border-gray-700"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-16">
          \{features.map((feature, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500">
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
      </div>
    </section>
  )
\}
