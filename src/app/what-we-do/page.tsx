import React from 'react'
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";

const WhatWeDo = () => {
    return (
        <section className={styles.wedo}>
            <div className={styles.header}>
                <div className={styles.header__nextcnt}>
                    <h2 className={styles.header__title}>Что мы делаем</h2>
                    <div className={styles.header__imgcnt}>
                        <div className={styles.header__img} style={{backgroundImage: 'url(/whatwedo/banner.jpg)'}}>
                        </div>
                    </div>
                </div>
                <div className={styles.header__content}>
                    <p className={styles.header__text}>В этом разделе собрана информация о всех проектах фонда, которые
                        направлены на помощь детям. А также о том, какие благотворительные мероприятия проводит «Подари
                        жизнь» и с какими законодательными инициативами выступает.</p>
                </div>
            </div>
            <div className={styles.wedo__container}>
                <div className={styles.cards}>
                    <div className={styles.cards__big}>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>Адресная помощь</h3>
                            <div className={styles.card__img}>
                                <Image
                                    src='/whatwedo/adresshelp.jpg'
                                    alt='Изображение адресной помощи каждому пациенту'
                                    fill={true}
                                    loading="lazy"/>
                            </div>
                            <p className={styles.card__text}>Каждому конкретному пациенту</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>Помощь в клиниках</h3>
                            <div className={styles.card__img}>
                                <Image
                                    src='/whatwedo/helpedchild.jpg'
                                    alt='Изображение поддержки больниц и отделений для всех больных детей'
                                    fill={true}
                                    loading="lazy"/>
                            </div>
                            <p className={styles.card__text}>Поддержка больниц и отделений</p>
                        </div>
                    </div>
                    <div className={styles.cards_small}></div>
                    <div className={styles.cards__big}>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>Реабилитация</h3>
                            <div className={styles.card__img}>
                                <Image
                                    src='/whatwedo/afterhelp.jpg'
                                    alt='Изображение девушки на ранчо среди лошадей. Она закончила лечение'
                                    fill={true}
                                    loading="lazy"/>
                            </div>
                            <p className={styles.card__text}>Программы для тех, кто закончил лечиться</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>Пансионат</h3>
                            <div className={styles.card__img}>
                                <Image
                                    src='/whatwedo/pansionat.jpg'
                                    alt='Пансионат «Измалково» для детей и их родителей, которые приезжают на лечение в Москву из других регионов России'
                                    fill={true}
                                    loading="lazy"/>
                            </div>
                            <p className={styles.card__text}>Что бы лечение было еще эффективней</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
