import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-white text-gray-900">
      <div className="container grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Innovating at the Intersection of Design and Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At DeasyLabs, we believe in the power of thoughtful design combined with cutting-edge technology to create
            products that truly resonate with users. Our approach is collaborative, iterative, and focused on delivering
            tangible results that drive growth and engagement for our clients. We are passionate about solving complex
            problems and transforming ideas into intuitive, high-performing digital solutions.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our team comprises experienced designers, developers, and strategists who work seamlessly to bring your vision
            to life. From initial concept and user research to development, deployment, and ongoing support, we are with
            you every step of the way, ensuring a smooth and successful product journey.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/abstract-design-illustration.png"
            width={600}
            height={600}
            alt="About Us Image"
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
