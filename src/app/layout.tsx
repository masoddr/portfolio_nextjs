import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { dmSans } from '@/lib/fonts'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://massylouaddour.dev',
  ),
  title: {
    template: '%s - Massyl Ouaddour',
    default: 'Massyl Ouaddour - Ingénieur Systèmes Spatiaux | Développeur Python',
  },
  description:
    "Je suis Massyl Ouaddour, ingénieur systèmes spatiaux et développeur Python. Spécialisé dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.",
  keywords: [
    'ingénieur systèmes spatiaux',
    'développeur Python',
    'ingénierie spatiale',
    'modélisation',
    'simulation',
    'DevOps',
    'Docker',
    'PostgreSQL',
    'Vue.js',
    'Flask',
  ],
  authors: [{ name: 'Massyl Ouaddour' }],
  creator: 'Massyl Ouaddour',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Massyl Ouaddour',
    title: 'Massyl Ouaddour - Ingénieur Systèmes Spatiaux | Développeur Python',
    description:
      "Ingénieur systèmes spatiaux et développeur Python. Spécialisé dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massyl Ouaddour - Ingénieur Systèmes Spatiaux | Développeur Python',
    description:
      "Ingénieur systèmes spatiaux et développeur Python. Spécialisé dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.",
    creator: '@massylouaddour',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`h-full antialiased ${dmSans.variable}`} suppressHydrationWarning>
      <body className="flex h-full bg-background text-foreground">
        <BackgroundEffects />
        <Providers>
          <div className="flex w-full">{children}</div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
