import type { Metadata } from 'next'

export const links = {
  sourceCode: 'https://github.com/tinchx/next-portfolio',
  ownerName: 'Martin',
  ownerFullName: 'Martin Marchionni',
  ownerEmail: 'workspacetinchx@gmail.com'
} as const

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${links.ownerFullName} | Software Engineer`,
    template: `%s | ${links.ownerFullName}`
  },
  description:
    'Full Stack Developer based in Argentina. Building intelligent digital products with Next.js, React, and modern web technologies.',
  keywords: [
    'Martin Marchionni',
    'tinchx',
    'full stack developer',
    'software engineer',
    'reactjs',
    'nextjs',
    'vercel',
    'react',
    'portfolio',
    'argentina',
    'typescript',
    'tailwindcss',
    'framer-motion'
  ] as Array<string>,
  authors: {
    name: links.ownerFullName,
    url: 'https://github.com/tinchx1'
  },
  creator: links.ownerFullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_AR'],
    url: '/',
    siteName: `${links.ownerFullName} Portfolio`,
    title: `${links.ownerFullName} | Software Engineer`,
    description:
      'Full Stack Developer based in Argentina. Building intelligent digital products with Next.js, React, and modern web technologies.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${links.ownerFullName} — Software Engineer`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${links.ownerFullName} | Software Engineer`,
    description:
      'Full Stack Developer based in Argentina. Building intelligent digital products with Next.js, React, and modern web technologies.',
    images: ['/opengraph-image'],
    creator: '@tinchx1'
  },
  robots: {
    index: true,
    follow: true
  }
} as const
