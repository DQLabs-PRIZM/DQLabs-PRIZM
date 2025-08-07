import Link from "next/link"
import { Mountain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black text-gray-400 border-t border-gray-800">
      <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6 space-y-4 md:space-y-0">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">DeasyLabs</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </nav>
        <p className="text-sm">&copy; 2024 DeasyLabs. All rights reserved.</p>
      </div>
    </footer>
  )
}
