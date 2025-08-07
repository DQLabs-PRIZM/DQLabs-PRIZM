"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "DeasyLabs transformed our complex ideas into a beautifully designed and highly functional product. Their team is incredibly talented and a pleasure to work with.",
      clientName: "Jane Doe",
      company: "Tech Innovations Inc.",
      logo: "/generic-company-logo-1.png",
    },
    {
      quote:
        "The attention to detail and commitment to quality from DeasyLabs was outstanding. They delivered beyond our expectations and on time.",
      clientName: "John Smith",
      company: "Global Solutions Ltd.",
      logo: "/generic-company-logo-2.png",
    },
    {
      quote:
        "Working with DeasyLabs was a seamless experience. Their expertise in product development helped us achieve our goals efficiently.",
      clientName: "Emily White",
      company: "Creative Ventures Co.",
      logo: "/abstract-geometric-logo.png",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 text-gray-900">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">What Our Clients Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-white shadow-lg rounded-lg p-8 md:p-10">
                    <CardContent className="flex flex-col items-center justify-center space-y-6">
                      <p className="text-xl md:text-2xl italic leading-relaxed text-gray-700">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex flex-col items-center space-y-2">
                        <p className="text-lg font-semibold text-gray-800">{testimonial.clientName}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          width={150}
                          height={50}
                          alt={`${testimonial.company} Logo`}
                          className="mt-4 opacity-75"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
