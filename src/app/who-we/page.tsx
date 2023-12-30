import React from 'react'
import styles from "./page.module.scss"
import Image from "next/image";

const WhoWe = () => {
	return (
		<section className={styles.who}>
			<div className={styles.header}>
				<div className={styles.header__nextcnt}>
					<div className={styles.header__container}>
						<h2 className={styles.header__title}>Кто мы</h2>
					</div>
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
				123
			</div>
		</section>
	)
}

export default WhoWe
