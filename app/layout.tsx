import type { Metadata } from 'next'
// Removed GeistSans and GeistMono imports
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'DeasyLabs Replica',
  description: 'A replica of DeasyLabs website built with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Removed the <style> tag that was causing the error */}
      <body>{children}</body>
    </html>
  )
}
