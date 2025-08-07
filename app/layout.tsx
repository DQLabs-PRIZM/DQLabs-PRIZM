'use client' // Added 'use client' directive

import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
