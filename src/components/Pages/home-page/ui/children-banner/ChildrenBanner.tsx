import styles from './ChildrenBanner.module.scss';
import React from 'react';
import Image from "next/image";

const ChildrenBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.leftContent__text}>Детский рак лечится. Мы работаем, чтобы любой ребенок в России
                        мог получить все необходимое лечение.</h2>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.rightContent__imgcnt}>
                        <Image
                            width={587}
                            height={705}
                            className={styles.rightContent__image}
                            src='/children/homeBanner.webp'
                            alt='Маленький больной на рак мальчик'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChildrenBanner;
