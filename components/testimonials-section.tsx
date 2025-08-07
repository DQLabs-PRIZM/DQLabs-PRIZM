import Image from "next/image"
import BookADemoButton from "./book-a-demo-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TestimonialsSection() \{
  const testimonials = [
    \{
      quote:
        "Since I started using the Deasy platform, extracting metadata from my medical texts has become incredibly straightforward, even with a high volume of data. With just a few clicks, the tool suggests tags or allows me to create my own, greatly streamlining my workflow.",
      clientName: "Andres Vargas",
      title: "AI engineer in healthcare domain",
      avatar: "/male-avatar.png",
    \},
    \{
      quote:
        "What didn't exist was a good approach for measuring data quality and relevance for unstructured data... Nobody was directly solving the issue of matching every generative AI use case with the 'best' possible set of data. Deasy Labs has developed novel approaches in this domain.",
      clientName: "Kyle Wiggers",
      title: "TechCrunch",
      avatar: "/male-avatar.png",
    \},
    \{
      quote:
        "Deasy Labs' metadata tagging solution for unstructured data has profoundly transformed our enterprise's knowledge management landscape. Their speed has allowed us to have the visibility of our in-house AI product far quicker than expected, with their data preparation capability playing a critical role in our success.",
      clientName: "Sam Grice",
      title: "CEO of Octopus Legacy (Financial Data)",
      avatar: "/male-avatar.png",
    \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Testimonials</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Hear from those who know Deasy</h2>

        <div className="grid gap-8 md:grid-cols-3 pt-12">
          \{testimonials.map((testimonial, index) => (
            <Card
              key=\{index\}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-start text-left space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600"
            >
              <CardContent className="p-0 space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  &ldquo;\{testimonial.quote\}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    width=\{40\}
                    height=\{40\}
                    alt=\{testimonial.clientName\}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">\{testimonial.clientName\}</p>
                    <p className="text-sm text-gray-500">\{testimonial.title\}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))\}
        </div>

        <div className="pt-16 space-y-6">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            &quot;What didn&apos;t exist was a good approach for measuring data quality and relevance for unstructured data ... Nobody was directly solving the issue of matching every generative AI use case with the &apos;best&apos; possible set of data. Deasy Labs has developed novel approaches in this domain.&quot;
          </p>
          <Image
            src="/techcrunch-logo.png"
            width=\{200\}
            height=\{50\}
            alt="TechCrunch Logo"
            className="mx-auto opacity-80"
          />
        </div>
        <BookADemoButton className="mt-12" />
      </div>
    </section>
  )
\}
