import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Solid State Infrastructure | Hyperscale Data Centers in Argentina',
  description: 'Long-term infrastructure development for global hyperscalers, AI workloads, and cloud providers in Argentina.',
  keywords: 'data centers, hyperscale, Argentina, infrastructure, cloud providers, AI workloads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

