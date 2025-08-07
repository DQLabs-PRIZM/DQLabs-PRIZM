import BookADemoButton from "./book-a-demo-button"

export default function HeroSection() \{
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] bg-[length:200%_200%] animate-gradient-move text-white overflow-hidden grid-background"
    >
      <div className="absolute inset-0 z-0 opacity-20"></div> \{/* Grid overlay */\}
      <div className="relative z-10 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
          Unstructured data governance for AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          An automated workflow to tag, filter and enrich unstructured content
        </p>
        <BookADemoButton />
      </div>
    </section>
  )
\}
