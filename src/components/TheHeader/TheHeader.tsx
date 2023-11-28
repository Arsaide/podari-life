import styles from './TheHeader.module.scss'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TheHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__content}>
					<div className={styles.header__leftContent}>
						<div className={styles.header__logo}>
							<Link className={styles.header__logoImg} href='/'>
								<Image
									className={styles.header__img}
									width={293}
									height={63}
									src='/logo.svg'
									alt="Логотип благотворительного фонда 'Подари жизнь'." />
							</Link>
							<p className={styles.header__logoDesc}>
								благотворительный<br /> фонд
							</p>
						</div>
					</div>
					<div className={styles.header__rightContent}>
						<div className={styles.header__menu}>
							<button type='button' className={styles.icon__menu}>
								<span></span>
								<p className={styles.icon__text}>Меню</p>
							</button>
							<nav className={styles.menu__body}>
								<ul className={styles.menu__list}>
									<li className={styles.menu__item}><Link href='/who-we'>Кто мы</Link></li>
									<li className={styles.menu__item}><Link href='/what-we-do'>Что мы делаем</Link></li>
									<li className={styles.menu__item}><Link href='/give-help'>Помочь фонду</Link></li>
								</ul>
							</nav>
						</div>
						<Link className={styles.help} href='/give-help'>
							Помочь
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default TheHeader


// Детский рак лечится. Мы работаем, чтобы любой ребенок в России мог получить все необходимое лечение.