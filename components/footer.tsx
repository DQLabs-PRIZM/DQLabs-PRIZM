import Link from "next/link"
import { Mountain } from 'lucide-react'

export default function Footer() \{
  return (
    <footer className="w-full py-12 bg-black text-gray-400 border-t border-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
            <Mountain className="h-6 w-6" />
            <span>DeasyLabs</span>
          </Link>
          <p className="text-sm">Metadata for AI workflows</p>
          <p className="text-sm">&copy; 2024 Deasy Labs</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#product" className="block hover:text-white transition-colors">
              Product
            </Link>
            <Link href="#how-it-works" className="block hover:text-white transition-colors">
              How it works
            </Link>
            <Link href="#enterprise" className="block hover:text-white transition-colors">
              Enterprise
            </Link>
            <Link href="#use-cases" className="block hover:text-white transition-colors">
              Features
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#blog" className="block hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="block hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="block hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="block hover:text-white transition-colors">
              DSAR
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#about-us" className="block hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#careers" className="block hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="#contact" className="block hover:text-white transition-colors">
              Book a Demo
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
\}
