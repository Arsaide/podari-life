import React from 'react'
import styles from "./page.module.scss"
import Image from "next/image";
import Link from "next/link";

const WhoWe = () => {
	return (
		<section className={styles.who}>
			<div className={styles.header}>
				<div className={styles.header__nextcnt}>
					<h2 className={styles.header__title}>Кто мы</h2>
					<div className={styles.header__imgcnt}>
						<div className={styles.header__img} style={{backgroundImage: 'url(/who/banner.jpg)'}}>
						</div>
					</div>
				</div>
				<div className={styles.header__content}>
					<p className={styles.header__text}>Мы — это фонд «Подари жизнь» в самом широком смысле. Благотворители, волонтеры, врачи, доноры, попечители, все те, кто делает возможной помощь больным детям.</p>
				</div>
			</div>
			<div className={styles.who__container}>
				<div className={styles.who__cards}>
					<div className={styles.card}>
						<h2 className={styles.card__title}>О фонде</h2>
						<Link href='/who-we/istoriya' className={styles.card__link}>
							<Image
								className={styles.card__img}
								src='/who/infoCard.jpg'
								alt='Изображение об оббщих сведениях и историях фонда'
								width={500}
								height={400}
							/>
						</Link>
						<p className={styles.card__text}>Общие сведения и история</p>
					</div>
					<div className={styles.card}>
						<h2 className={styles.card__title}>Контакты и реквизиты</h2>
						<Link href='/who-we/kontakty-i-rekvizity' className={styles.card__link}>
							<Image
								className={styles.card__img}
								src='/who/locationCard.jpg'
								alt='Изображение об оббщих сведениях и историях фонда'
								width={500}
								height={400}
							/>
						</Link>
						<p className={styles.card__text}>Адрес и банковские реквизиты</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhoWe
