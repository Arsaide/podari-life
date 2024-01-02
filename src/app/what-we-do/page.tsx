import React from 'react'
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
const WhatWeDo = () => {
	return (
		<section className={styles.who}>
			<div className={styles.header}>
				<div className={styles.header__nextcnt}>
					<h2 className={styles.header__title}>Что мы делаем</h2>
					<div className={styles.header__imgcnt}>
						<div className={styles.header__img} style={{backgroundImage: 'url(/whatwedo/banner.jpg)'}}>
						</div>
					</div>
				</div>
				<div className={styles.header__content}>
					<p className={styles.header__text}>В этом разделе собрана информация о всех проектах фонда, которые направлены на помощь детям. А также о том, какие благотворительные мероприятия проводит «Подари жизнь» и с какими законодательными инициативами выступает.</p>
				</div>
			</div>
			<div className={styles.who__container}>
			</div>
		</section>
	)
}

export default WhatWeDo
