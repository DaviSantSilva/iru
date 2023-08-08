import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I.R.U',
  description: 'Interactive Roleplay Unifier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <Head>
        <link rel="icon" href="/images/iru-logo.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
