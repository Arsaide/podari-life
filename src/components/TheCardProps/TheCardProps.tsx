import React from 'react';
import styles from "./TheCardProps.module.scss"
import Link from "next/link";
import Image from "next/image";

type Props = {
    key: number
    href: string
    imgSrc: string
    imgAlt: string
    title: string
    desc: string
    status: string
    date: string
}

function TheCardProps ({key, href, imgSrc, imgAlt, title, desc, status, date}: Props) {
    return (
        <article className={styles.card} key={key}>
            <Link
                className={styles.card__link}
                href={`/${href}`}>
                <div>
                    <div className={styles.card__imgcnt}>
                        <Image
                            src={`/posts/${imgSrc}`}
                            alt={imgAlt}
                            className={styles.card__img}
                            fill={true}
                            loading='lazy'/>
                    </div>
                    <div className={styles.card__content}>
                        <h4 className={styles.card__title}>{title}</h4>
                        <p className={styles.card__text}>{desc}</p>
                    </div>
                </div>
                <div className={styles.card__footer}>
                    <span className={styles.card__status}>{status}</span>
                    <span className={styles.card__date}>{date}</span>
                </div>
            </Link>
        </article>
    );
}
export default TheCardProps;
