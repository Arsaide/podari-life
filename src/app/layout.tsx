import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/layout/header/Header'
import Footer from '@/components/common/layout/footer/Footer'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Благотворительный фонд «Подари жизнь»',
	description: 'Благотворительный фонд «Подари жизнь». Мы предоставляем помощь ' +
		'сильно больным детям в России, и ваше участие в нашем благотворительном ' +
		'фонде делает реальное влияние. Узнайте о наших проектах, новостях и том, ' +
		'как ваш вклад способен изменить жизни. Давайте вместе создадим лучшее ' +
		'будущее для детей, нуждающихся в нашей поддержке.',
	keywords: 'благотворительность, дети в беде, поддержка здравоохранения,' +
		' благотворительные проекты, влияние на общество, благотворительный фонд, ' +
		'Подари жизнь, помощь детям, благотворительный вклад, поддержка детей'
}

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
		<body className={inter.className}>
		<div className='wrapper'>
			<Header />
			<main className='main'>
				{children}
			</main>
			<Footer />
		</div>
		</body>
		</html>
	)
}
