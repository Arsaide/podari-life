import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Благотворительный фонд "Подари Жизнь"',
  description: 'Благотворительный фонд "Подари жизнь", информация о нас.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <div className="wrapper">
      <TheHeader/>
      <main className='main'>
        {children}
      </main>
      <TheFooter/>
    </div>
    </html>
  )
}
