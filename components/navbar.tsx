"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mountain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function Navbar() \{
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => \{
    const handleScroll = () => \{
      if (window.scrollY > 50) \{
        setIsScrolled(true)
      \} else \{
        setIsScrolled(false)
      \}
    \}

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  \}, [])

  return (
    <header
      className=\{`fixed top-0 left-0 right-0 z-50 transition-all duration-300 $\{
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      \}`\}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Mountain className="h-6 w-6" />
          <span>DQLabs PRIZM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#hero" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Features
          </Link>
          <Link href="#technology" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Technology
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Use Cases
          </Link>
          <Link href="#customers" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Customers
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
              <span>DQLabs PRIZM</span>
            </Link>
            <div className="grid gap-4 py-6">
              <Link href="#hero" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Features
              </Link>
              <Link href="#technology" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Technology
              </Link>
              <Link href="#use-cases" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Use Cases
              </Link>
              <Link href="#customers" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Customers
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
\}
