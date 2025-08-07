import { Code, Layout, Rocket, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Product Strategy & Design",
      description: "We help define your product vision, conduct user research, and craft intuitive user experiences.",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Web & Mobile Development",
      description: "Building robust and scalable web and mobile applications using modern technologies.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Launch & Growth",
      description: "Assisting with product launch, marketing strategies, and continuous optimization for growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Consulting & Mentorship",
      description: "Providing expert guidance and mentorship to your team for digital product excellence.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-[#0a0a0a] text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 text-white p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-600"
            >
              <CardHeader className="p-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
