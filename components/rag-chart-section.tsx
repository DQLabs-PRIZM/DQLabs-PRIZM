"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function RagChartSection() \{
  const chartData = [
    \{ documents: 250, withMetadata: 94, withoutMetadata: 84 \},
    \{ documents: 500, withMetadata: 92, withoutMetadata: 83 \},
    \{ documents: 750, withMetadata: 94, withoutMetadata: 76 \},
    \{ documents: 1000, withMetadata: 90, withoutMetadata: 70 \},
    \{ documents: 1250, withMetadata: 88, withoutMetadata: 69 \},
    \{ documents: 1500, withMetadata: 86, withoutMetadata: 68 \},
    \{ documents: 1750, withMetadata: 89, withoutMetadata: 71 \},
    \{ documents: 2000, withMetadata: 89, withoutMetadata: 66 \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">RAG</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Metadata to enhance RAG</h2>
        <Card className="w-full max-w-5xl mx-auto bg-[#1a1a1a] border border-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Retrieval Accuracy vs. Number of Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config=\{\{
                withMetadata: \{
                  label: "With Metadata Orchestration",
                  color: "hsl(150 84.2% 60.2%)", // Greenish color
                \},
                withoutMetadata: \{
                  label: "Without Metadata Orchestration",
                  color: "hsl(0 84.2% 60.2%)", // Reddish color
                \},
              \}\}
              className="h-[400px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data=\{chartData\} margin=\{\{ top: 5, right: 30, left: 20, bottom: 5 \}\}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="documents" stroke="#888" label=\{\{ value: "Number of Documents", position: "insideBottom", offset: 0, fill: "#888" \}\} />
                  <YAxis stroke="#888" label=\{\{ value: "Retrieval Accuracy", angle: -90, position: "insideLeft", fill: "#888" \}\} tickFormatter=\{(value) => `$\{value\}%`\} />
                  <ChartTooltip content=\{<ChartTooltipContent />\} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="withMetadata"
                    stroke="var(--color-withMetadata)"
                    name="With Metadata Orchestration"
                    activeDot=\{\{ r: 8 \}\}
                  />
                  <Line
                    type="monotone"
                    dataKey="withoutMetadata"
                    stroke="var(--color-withoutMetadata)"
                    name="Without Metadata Orchestration"
                    activeDot=\{\{ r: 8 \}\}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
\}
