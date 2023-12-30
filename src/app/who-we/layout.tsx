import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Благотворительный фонд',
    description: 'Благотворительный фонд "Подари жизнь", информация о нас.'
}

export default function WhoLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
