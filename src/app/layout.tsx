import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#155EEF',
}

export const metadata: Metadata = {
  title: 'CareerCatch — Build Skills. Build Your Future.',
  description:
    'Industry-led tech programs with live classes, hands-on projects, and 1-on-1 mentorship from top engineers. Start your tech career with CareerCatch.',
  keywords: [
    'online coding bootcamp',
    'full stack development',
    'data science course',
    'UI/UX design',
    'career mentorship India',
    'tech placement support',
  ],
  authors: [{ name: 'CareerCatch' }],
  metadataBase: new URL('https://careercatch.in'),
  openGraph: {
    title: 'CareerCatch — Build Skills. Build Your Future.',
    description:
      'Industry-led tech programs with live classes, hands-on projects, and 1-on-1 mentorship from top engineers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CareerCatch',
    url: 'https://careercatch.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerCatch — Build Skills. Build Your Future.',
    description:
      'Industry-led tech programs with live classes, hands-on projects, and 1-on-1 mentorship from top engineers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-[#101B3C] font-inter selection:bg-[#155EEF]/15 selection:text-[#101B3C]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
