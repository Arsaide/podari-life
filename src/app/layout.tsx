import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Благотворительный фонд',
  description: "Логотип благотворительного фонда 'Подари жизнь', информация о нас.",
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
          <div className="wrapper">
            <TheHeader/>
            <main className='main'>
              {children}
            </main>
            <TheFooter/>
          </div>
      </body>
      </html>
  )
}
