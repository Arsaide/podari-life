'use client'
import styles from './TheHeader.module.scss'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

interface BurgerMenuProps {}

const TheHeader: React.FC<BurgerMenuProps> = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleToggle = () => {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const menuBody = document.querySelector(`.${styles.menu__body}`)

			if(menuOpen && !(event.target as HTMLElement).closest(`.${styles.menu__body}`)) {
				setMenuOpen(false)
			}
		}

		const handleEscKey = (event: KeyboardEvent) => {
			if(menuOpen && event.key === 'Escape') {
				setMenuOpen(false)
			}
		}

		const disableScroll = () => {
			if(menuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}

		document.addEventListener('click', handleOutsideClick);
		document.addEventListener('keydown', handleEscKey);
		disableScroll();

		return () => {
			document.removeEventListener('click', handleOutsideClick)
			document.removeEventListener('keydown', handleEscKey)
			document.body.style.overflow = ''
		}
	}, [menuOpen]);



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


						<div className={classNames(styles.header__menu, styles.menu)}>
							<button
								type='button'
								onClick={handleToggle}
								className={classNames(styles.menu__icon, styles.icon__menu, menuOpen && styles.active)}>
								<span></span>
								<p className={styles.icon__text}>Меню</p>
							</button>
						</div>
						<Link className={styles.help} href='/give-help'>
							Помочь
						</Link>
					</div>
				</div>
			</div>
			<nav className={classNames(styles.menu__body, menuOpen && styles.active)}>
				<ul className={styles.menu__list}>
					<li className={styles.menu__item}>
						<Link
							className={styles.menu__link}
							href='/who-we'
							onClick={handleToggle}>
							Кто мы
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link
							className={styles.menu__link}
							href='/what-we-do'
							onClick={handleToggle}>
							Что мы делаем
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link
							className={styles.menu__link}
							href='/give-help'
							onClick={handleToggle}>
							Помочь фонду
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default TheHeader


// Детский рак лечится. Мы работаем, чтобы любой ребенок в России мог получить все необходимое лечение.