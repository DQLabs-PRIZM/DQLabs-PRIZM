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

export default function WorkSection() {
  const projects = [
    {
      image: "/modern-project-dashboard.png",
      title: "Enterprise Dashboard",
      category: "SaaS Platform",
    },
    {
      image: "/mobile-app-design-concept.png",
      title: "Fitness Mobile App",
      category: "Mobile Application",
    },
    {
      image: "/modern-ecommerce-website.png",
      title: "E-commerce Redesign",
      category: "Web Development",
    },
    {
      image: "/data-visualization-abstract.png",
      title: "Data Visualization Tool",
      category: "Data Analytics",
    },
    {
      image: "/ai-chatbot-interface.png",
      title: "AI Chatbot Interface",
      category: "Artificial Intelligence",
    },
  ]

  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32 bg-white text-gray-900">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Our Recent Work</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <div className="relative w-full h-60 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white text-center">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-300">{project.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 w-full text-left">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.category}</p>
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
