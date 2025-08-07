"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mountain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Mountain className="h-6 w-6" />
          <span>DeasyLabs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-l border-gray-800">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold mb-6">
              <Mountain className="h-6 w-6" />
              <span>DeasyLabs</span>
            </Link>
            <div className="grid gap-4 py-6">
              <Link href="#home" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-lg font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="#work" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Work
              </Link>
              <Link href="#contact" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
