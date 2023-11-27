import styles from './TheHeader.module.scss';
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link className={styles.header__logoImg} href='/'>
                        <Image
                            width={293}
                            height={63}
                            src='./logo.svg'
                            alt="Логотип благотворительного фонда 'Подари жизнь'."/>
                    </Link>
                    <p className={styles.header__logoDesc}>
                        благотворительный<br/> фонд
                    </p>
                </div>
            </div>
        </header>
    );
};

export default TheHeader;


// Детский рак лечится. Мы работаем, чтобы любой ребенок в России мог получить все необходимое лечение.