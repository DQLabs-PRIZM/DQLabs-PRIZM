import Image from "next/image"

export default function ProductVideoSection() \{
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">Product video</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Watch our 60s product video:</h2>
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          <Image
            src="/video-placeholder.png"
            alt="Product Video Placeholder"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <PlayIcon className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
\}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) \{
  return (
    <svg
      \{...props\}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
\}
