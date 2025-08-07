import Image from "next/image"

export default function PartnersSection() \{
  const partners = [
    \{ src: "/mit-logo.png", alt: "MIT Logo" \},
    \{ src: "/mercedes-benz-logo.png", alt: "Mercedes Benz Logo" \},
    \{ src: "/amazon-logo.png", alt: "Amazon Logo" \},
    \{ src: "/cambridge-logo.png", alt: "University of Cambridge Logo" \},
    \{ src: "/qdrant-logo.png", alt: "Qdrant Logo" \},
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Developed by award-winning team in enterprise software for AI and data governance.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          \{partners.map((partner, index) => (
            <Image
              key=\{index\}
              src={partner.src || "/placeholder.svg"}
              width=\{150\}
              height=\{50\}
              alt=\{partner.alt\}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 h-12 object-contain"
            />
          ))\}
        </div>
      </div>
    </section>
  )
\}
