import BookADemoButton from "./book-a-demo-button"
import { Book, Database, FileText, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCasesSection() \{
  const useCases = [
    \{
      icon: <Book className="h-8 w-8 text-white" />,
      title: "A managed metadata service for RAG",
      description:
        "The easiest way to build a structured dataset from unstructured data to support search use cases.",
    \},
    \{
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Building structured datasets for search",
      description:
        "The quickest way to build a structured dataset from unstructured data to support search use cases.",
    \},
    \{
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Enhancing retrieval performance",
      description:
        "Apply tagging and other metadata that can be embedded or used for routing to improve its speed & retrieval accuracy.",
    \},
    \{
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Curating data products for end consumers",
      description:
        "A new way for enterprise data teams to curate 'data products' and serve to business or data science teams.",
    \},
    \{
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Feature engineering across unstructured data",
      description:
        "Creating data slices to derive engineer domain-specific feature sets without input from domain experts.",
    \},
    \{
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Sensitivity classification & cataloging",
      description:
        "Highly accurate classification and tagging across all unstructured content for compliance & governance.",
    \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Use cases</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Our metadata layer powers AI, cataloging & compliance use cases
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Data & AI teams use Deasy Labs as their horizontal metadata capability to support a range of use cases.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-12">
          \{useCases.map((useCase, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500">
                  \{useCase.icon\}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-xl font-semibold">\{useCase.title\}</CardTitle>
                <p className="text-gray-400">\{useCase.description\}</p>
              </CardContent>
            </Card>
          ))\}
        </div>
        <BookADemoButton className="mt-12" />
      </div>
    </section>
  )
\}
