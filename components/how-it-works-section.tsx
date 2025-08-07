import Image from "next/image"
import BookADemoButton from "./book-a-demo-button"
import { Cloud, Database, FileText, GitFork, Search, Tag } from 'lucide-react'

export default function HowItWorksSection() \{
  const steps = [
    \{
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Connect to unstructured data",
      description: "Connect to either raw files or vector databases",
    \},
    \{
      icon: <GitFork className="h-8 w-8 text-white" />,
      title: "AI-assisted schema generation",
      description: "Auto-derive schemas tailored to your use cases with NO input from domain experts (or define tags yourself!)",
    \},
    \{
      icon: <Tag className="h-8 w-8 text-white" />,
      title: "LLM-based tagging at scale",
      description: "Extract ANY of tag from document chunks with automatic synthesis to file-level metadata",
    \},
    \{
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Filter millions of documents to find the most relevant subset for your use case",
      description: "Filter millions of documents to find the most relevant subset for your use case",
    \},
    \{
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "Export and sync data",
      description: "Directly export metadata with cloud storage systems or vector databases",
    \},
    \{
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Maintain metadata taxonomies",
      description: "Automated maintenance and updates of taxonomies as data changes over time",
    \},
  ]

  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">How it works</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          An end-to-end workflow to define, validate, extract and maintain metadata
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left pt-12">
          \{steps.map((step, index) => (
            <div key=\{index\} className="flex items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex-shrink-0">
                \{step.icon\}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">\{step.title\}</h3>
                <p className="text-gray-400">\{step.description\}</p>
              </div>
            </div>
          ))\}
        </div>

        <div className="pt-16">
          <Image
            src="/deasylabs-workflow-screenshot.png"
            width=\{1200\}
            height=\{675\}
            alt="DeasyLabs Workflow Screenshot"
            className="rounded-lg shadow-2xl border border-gray-700 mx-auto"
          />
        </div>

        <div className="pt-16 space-y-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Available as a user-friendly platform or a set of APIs
          </p>
          <BookADemoButton />
        </div>
      </div>
    </section>
  )
\}
