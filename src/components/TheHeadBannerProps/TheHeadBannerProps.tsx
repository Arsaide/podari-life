import React from 'react';
import styles from './TheHeadBannerProps.module.scss'

type Props = {
    title: string
    img: string
    text: string
}

const TheHeadBannerProps = ({title, img, text}:Props) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__nextcnt}>
                <h2 className={styles.header__title}>{title}</h2>
                <div className={styles.header__imgcnt}>
                    <div className={styles.header__img} style={{backgroundImage: `url(/${img})`}}>
                    </div>
                </div>
            </div>
            <div className={styles.header__content}>
                <p className={styles.header__text}>{text}</p>
            </div>
        </div>
    );
};

export default TheHeadBannerProps;
