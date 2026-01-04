import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { siteConfig } from '@/config'
import { getLocale } from 'next-intl/server'
import { ThemeProvider } from './provider'
import { Analytics } from "@vercel/analytics/next"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#000319',
  colorScheme: 'dark'
}

export const metadata: Metadata = siteConfig

const RootLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const locale = await getLocale()

  return (
    <html lang={locale} className="dark" style={{ colorScheme: 'dark' }}>
      <body className={inter.className}>
        <NextIntlClientProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
