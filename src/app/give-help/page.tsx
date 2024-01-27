import React from 'react'
import styles from "./page.module.scss"
import BannerProps from "@/components/common/ui/banner-props/BannerProps";
import Link from "next/link";
import News from "@/components/Pages/publications-page/components/news/News";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Помочь фонду | фонд «Подари жизнь»',
	description: 'Поддержите благотворительный фонд «Подари жизнь» и ' +
		'помогите сильно больным детям в России. ' +
		'Ваш вклад — шаг к созданию лучшего будущего для маленьких пациентов. ' +
		'Присоединитесь к нам в миссии спасения жизней и надежды на исцеление.',
	keywords: ' благотворительное пожертвование, поддержка медицины, волонтерство, спасение жизней, добрые дела,' +
		'финансовая помощь, врачи-волонтеры, гуманитарная помощь, поддержка онкологических пациентов'
}

const GiveHelp = () => {
	return (
		<section className={styles.help}>
			<BannerProps
				title={'Cделать пожертвование'}
				img={'help/banner.jpg'}
				text={'Мы делаем все, чтобы помогать было легко и удобно'}/>
			<div className={styles.help__container}>
				<h2 className={styles.help__title}>Дарим жизнь вместе</h2>
				<div className={styles.help__content}>
					<div className={styles.text}>
						<div className={styles.text__cnt}>
							<p className={styles.help__text}>
								Наша миссия - предоставить необходимую помощь детям,
								сталкивающимся с тяжелыми заболеваниями в России.
								Каждый вклад на этой странице превращается в ценный дар,
								предоставляя средства для лечения и поддержки каждого ребенка,
								нуждающегося в нашей помощи!
							</p>
							<p className={styles.help__text}>
								С вашей помощью мы можем изменить жизнь маленьких пациентов,
								предоставив им возможность на радостную и здоровую будущее.
								Ваш взнос напрямую влияет на жизнь детей и дарит надежду исцеления.
								Спасибо, что становитесь частью нашего важного дела!
							</p>
							<p className={styles.help__text}>
								Присоединитесь к нашему благотворительному фонду, станьте частью этой важной миссии.
								Ваша поддержка - это шаг в направлении к более здоровому, счастливому будущему для
								каждого ребенка. Спасибо за ваше добросердечное участие и важный вклад в наше общее дело!
							</p>
						</div>
					</div>
					<div className={styles.donate}>
						<h3 className={styles.donate__title}>Пожертвование</h3>
						<p className={styles.help__text}>Нажмите на кнопку и заполните форму, чтобы помочь нуждающимся детям!</p>
						<Link
							href="https://donate.stripe.com/00g5labgpblc400144"
							className={styles.link}>
							Помочь
						</Link>
						<Link
							href='https://api.podari-zhizn.ru/storage/content_block/document/4/regular_document-758f4099343a379e8fc5e5fd6a33865f.pdf'
							className={styles.offer}>
							Публичная оферта
						</Link>
					</div>
				</div>
				<News/>
			</div>
		</section>
	)
}

export default GiveHelp
