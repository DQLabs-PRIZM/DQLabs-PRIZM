'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'DQLabs PRIZM',
  description: 'Unlock the Future of Data Governance with PRIZM',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
