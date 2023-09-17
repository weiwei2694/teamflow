import Footer from '@/components/sharing/Footer';
import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const font = Nunito_Sans({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: 'Team Flow',
  description: 'Work the way that works for you, Create, Build, Collaborate and ship products very faster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
