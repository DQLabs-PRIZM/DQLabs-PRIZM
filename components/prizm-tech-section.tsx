import Image from "next/image"
import { CheckCircle, Settings, Cloud } from 'lucide-react'

export default function PrizmTechSection() \{
  return (
    <section id="technology" className="w-full py-20 md:py-32 lg:py-40 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">PRIZM</span> Works
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A deep dive into the intelligent architecture powering DQLabs PRIZM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Automated Data Ingestion</h3>
                <p className="text-gray-400">
                  Seamlessly connect to diverse data sources and automatically ingest data for analysis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">AI-Powered Quality Checks</h3>
                <p className="text-gray-400">
                  Utilize advanced AI algorithms to detect anomalies, inconsistencies, and errors in real-time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Intelligent Remediation</h3>
                <p className="text-gray-400">
                  Automated suggestions and actions to correct identified data quality issues efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/prizm-diagram-placeholder.png"
              width=\{600\}
              height=\{400\}
              alt="PRIZM Technology Diagram"
              className="rounded-lg shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
\}
