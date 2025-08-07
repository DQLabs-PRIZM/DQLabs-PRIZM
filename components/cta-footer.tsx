import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaFooter() \{
  return (
    <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-center grid-background">
      <div className="container px-4 md:px-6 space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
          Ready to Transform Your Data Landscape?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Connect with our experts to see how DQLabs PRIZM can empower your data strategy.
        </p>
        <Button
          asChild
          className="px-8 py-3 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-semibold shadow-lg"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  )
\}
