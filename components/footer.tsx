import Link from "next/link"
import { Mountain } from 'lucide-react'

export default function Footer() \{
  return (
    <footer className="w-full py-12 bg-black text-gray-400 border-t border-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
            <Mountain className="h-6 w-6" />
            <span>DQLabs PRIZM</span>
          </Link>
          <p className="text-sm">Intelligent Data Governance</p>
          <p className="text-sm">&copy; 2024 DQLabs. All rights reserved.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Product</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#features" className="block hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#technology" className="block hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="#use-cases" className="block hover:text-white transition-colors">
              Use Cases
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#" className="block hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#" className="block hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="#contact" className="block hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <nav className="space-y-2 text-sm">
            <Link href="#" className="block hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="block hover:text-white transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
\}
