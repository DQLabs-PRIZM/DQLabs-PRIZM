import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() \{
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gradient-start to-gradient-end bg-[length:200%_200%] animate-gradient-move text-white overflow-hidden grid-background px-4 py-24 md:py-32 lg:py-48"
    >
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          Unlock the Future of Data Governance with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">PRIZM</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          DQLabs PRIZM provides intelligent, automated data quality and governance solutions for the modern enterprise.
        </p>
        <Button
          asChild
          className="px-8 py-3 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-semibold shadow-lg"
        >
          <Link href="#contact">Discover PRIZM</Link>
        </Button>
      </div>
    </section>
  )
\}
