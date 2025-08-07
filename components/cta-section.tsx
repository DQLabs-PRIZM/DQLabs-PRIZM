import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-[#0a0a0a] text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Start Your Project?</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Let&apos;s work together to bring your next big idea to life.
        </p>
        <Button
          variant="outline"
          className="px-8 py-3 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
        >
          Let&apos;s Work Together
        </Button>
      </div>
    </section>
  )
}
