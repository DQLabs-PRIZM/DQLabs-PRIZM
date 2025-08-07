import Image from "next/image"

export default function CustomerLogosSection() \{
  const customerLogos = [
    \{ src: "/logo-placeholder-1.png", alt: "Customer Logo 1" \},
    \{ src: "/logo-placeholder-2.png", alt: "Customer Logo 2" \},
    \{ src: "/logo-placeholder-3.png", alt: "Customer Logo 3" \},
    \{ src: "/logo-placeholder-4.png", alt: "Customer Logo 4" \},
    \{ src: "/logo-placeholder-5.png", alt: "Customer Logo 5" \},
    \{ src: "/logo-placeholder-6.png", alt: "Customer Logo 6" \},
  ]

  return (
    <section id="customers" className="w-full py-20 md:py-32 lg:py-40 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Leading organizations rely on DQLabs PRIZM for their data governance needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-12">
          \{customerLogos.map((logo, index) => (
            <Image
              key=\{index\}
              src={logo.src || "/placeholder.svg"}
              width=\{180\}
              height=\{60\}
              alt=\{logo.alt\}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 h-16 object-contain"
            />
          ))\}
        </div>
      </div>
    </section>
  )
\}
