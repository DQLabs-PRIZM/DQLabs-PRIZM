import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookADemoButtonProps \{
  className?: string;
\}

export default function BookADemoButton(\{ className \}: BookADemoButtonProps) \{
  return (
    <Button
      asChild
      variant="outline"
      className=\{`px-8 py-3 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors $\{className\}`\}
    >
      <Link href="#contact">Book a Demo</Link>
    </Button>
  )
\}
