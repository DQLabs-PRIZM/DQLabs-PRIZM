export default function MetricsSection() \{
  const metrics = [
    \{ value: "15%", label: "Increase in retrieval accuracy from metadata" \},
    \{ value: "10k", label: "Files tagged every 25 mins (assuming 75 page docs)" \},
    \{ value: "93%", label: "Average metadata classification accuracy" \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          \{metrics.map((metric, index) => (
            <div key=\{index\} className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                \{metric.value\}
              </h3>
              <p className="text-lg text-gray-300">\{metric.label\}</p>
            </div>
          ))\}
        </div>
      </div>
    </section>
  )
\}
