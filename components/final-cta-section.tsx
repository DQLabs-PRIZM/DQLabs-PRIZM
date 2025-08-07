import BookADemoButton from "./book-a-demo-button"

export default function FinalCtaSection() \{
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
          Rethink your approach to metadata today
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Start your free trial today and discover the significant difference our solutions can make for you.
        </p>
        <BookADemoButton />
      </div>
    </section>
  )
\}
