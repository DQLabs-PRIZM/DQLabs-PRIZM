'use client' // Added 'use client' directive

// Removed Metadata import and export
import './globals.css'

// Removed export const metadata = {...}

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

export const metadata = {
      generator: 'v0.dev'
    };
