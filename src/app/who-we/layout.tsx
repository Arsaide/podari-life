import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Кто мы | фонд «Подари жизнь»',
    description: 'Познакомьтесь с командой «Подари жизнь». Мы — это не просто фонд, ' +
        'а объединение благотворителей, волонтеров, врачей, доноров и заботливых людей, работающих вместе для ' +
        'предоставления помощи больным детям. Узнайте больше о тех, кто делает возможным наше важное дело и ' +
        'присоединяйтесь к нам в нашей миссии создания лучшего будущего для маленьких борцов за жизнь.',
    keywords: 'душевная поддержка, профессиональная медицина, сообщество добрых сердец, сотрудничество в медицине'
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
