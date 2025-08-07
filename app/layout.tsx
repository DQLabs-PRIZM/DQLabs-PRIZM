import type \{ Metadata \} from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter(\{ subsets: ["latin"], variable: "--font-inter" \})

export const metadata: Metadata = \{
  title: 'DeasyLabs Replica',
  description: 'A replica of DeasyLabs website built with v0',
  generator: 'v0.dev',
\}

export default function RootLayout(\{
  children,
\}: Readonly<\{
  children: React.ReactNode
\}>) \{
  return (
    <html lang="en" className=\{inter.variable\}>
      <head>
        <style>\{`
html \{
  font-family: $\{GeistSans.style.fontFamily\};
  --font-sans: $\{GeistSans.variable\};
  --font-mono: $\{GeistMono.variable\};
  --font-inter: $\{inter.style.fontFamily\};
\}
        `\}</style>
      </head>
      <body>\{children\}</body>
    </html>
  )
\}
