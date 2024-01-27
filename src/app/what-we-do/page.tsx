import React from 'react'
import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import BannerProps from "@/components/common/ui/banner-props/BannerProps";
import News from "@/components/Pages/publications-page/components/news/News";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Что мы делаем | фонд «Подари жизнь»',
    description: "Откройте для себя наши инициативы и благотворительные проекты " +
        ". Здесь собрана информация о наших усилиях по помощи детям, проведении " +
        "благотворительных мероприятий и участии в законодательных инициативах. Узнайте, как ваша " +
        "поддержка делает реальное влияние на жизни маленьких пациентов.",
    keywords: 'реабилитация, инклюзивное образование, медицинские программы, поддержка детского здоровья, социальная активность,' +
        'мероприятия, благотворительные инициативы, забота о детях, поддержка здоровья'
}

const WhatWeDo = () => {
    return (
        <section className={styles.wedo}>
            <BannerProps
                title={'Что мы делаем'}
                img={'whatwedo/banner.jpg'}
                text={'В этом разделе собрана информация о всех проектах фонда, которые\n' +
                    '      направлены на помощь детям. А также о том, какие благотворительные мероприятия проводит «Подари\n' +
                    '      жизнь» и с какими законодательными инициативами выступает.'}/>
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


                    <div className={styles.cards__small}>
                        <div className={styles.scard}>
                            <h3 className={styles.scard__title}>Донорство</h3>
                            <div className={styles.scard__img}>
                                <Image
                                    src='/whatwedo/donor.jpg'
                                    alt='Изображение крови от донора'
                                    fill={true}
                                    loading={'lazy'}/>
                            </div>
                            <p className={styles.scard__text}>Обеспечение кровью и ее компонентами </p>
                        </div>
                        <div className={styles.scard}>
                            <h3 className={styles.scard__title}>Социальная помощь</h3>
                            <div className={styles.scard__img}>
                                <Image
                                    src='/whatwedo/sochelp.jpg'
                                    alt='Изображение женщины с ребенком'
                                    fill={true}
                                    loading={'lazy'}/>
                            </div>
                            <p className={styles.scard__text}>Поддержка семей, где болеет ребенок </p>
                        </div>
                        <div className={styles.scard}>
                            <h3 className={styles.scard__title}>Волонтерство</h3>
                            <div className={styles.scard__img}>
                                <Image
                                    src='/whatwedo/volunteer.jpg'
                                    alt='Изображение детей рядом взрослыми людьми волонтерами'
                                    fill={true}
                                    loading={'lazy'}/>
                            </div>
                            <p className={styles.scard__text}>Безвозмездная помощь фонду и детям </p>
                        </div>
                    </div>


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
                <News/>
            </div>
        </section>
    )
}

export default WhatWeDo
