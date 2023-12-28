import React from 'react';
import styles from './page.module.scss'
import {Metadata} from "next";
import posts from "../../../public/childrenPosts.json";
import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
    const post = posts.find((post) => post.id === Number(id))
    return post || null;
}

type Props = {
    params: {
        webName: string;
    };
};

export async function generateMetadata({ params: { webName } }: Props): Promise<Metadata> {
    const post = posts.find((post) => post.webName === webName);
    return {
        title: post?.card?.text?.title || 'Новость не найдена',
    };
}

const Post = async ({ params: { webName } }: Props) => {
    const item = posts.find((post) => post.webName === webName);

    if (!item) {
        return (
            <section className={styles.post} style={{paddingTop:"150px"}}>
                <div className={styles.post__container}>
                    <p className={styles.post__error}>Новость не найдена</p>
                    <Image
                        src='/posts/error.gif'
                        alt='GIF-изображение. Ошибка. Новость не найден'
                        width={500}
                        height={450}/>
                </div>
            </section>
        )
    } else {
        return (
            <section className={styles.post}>
                <div className={styles.post__container}>
                    <div className={styles.post__header}>
                        <Link href='/' className={styles.post__desc}>Главная → Актуальные Новости</Link>
                        <h3 className={styles.post__title}>{item.card.text.title}</h3>
                    </div>
                    <div className={styles.post__content}>
                        <div className={styles.aside}>
                            <div className={styles.aside__section}>
                                <p className={styles.aside__info}>Информация</p>
                                <span className={styles.aside__date}>Дата:<br/>{item.card.text.date}</span>
                                {item.card.text.status === "Нужна помощь" ? (
                                    <Link href='/give-help' className={styles.aside__dateDesc}>{item.card.text.status}</Link>
                                ): (
                                    <>
                                        <p className={styles.aside__info}>Раздел:</p>
                                        <span className={styles.aside__status}>{item.card.text.status}</span>
                                        <Link href='/give-help' className={styles.aside__dateDesc}>Помочь</Link>
                                    </>
                                )}
                            </div>
                            <div className={styles.aside__section}>
                                <p className={styles.aside__info}>Текст:</p>
                                <span>Юлия Курябина</span>
                                <span>Роман Чертовских</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.content__desc}>{item.card.text.desc}</h4>
                            <p className={styles.content__text}>{item.post.text.firstText}</p>
                            <div className={styles.content__imgcnt}>
                                <Image
                                    src={`/posts/${item.post.img.src}`}
                                    alt={item.post.img.alt}
                                    fill={true}
                                    loading="lazy"
                                    className={styles.content__img}/>
                            </div>
                            <p className={styles.content__imgDesc}>{item.post.img.desc}</p>
                            <p></p>
                            <p className={styles.content__text}>{item.post.text.secondText}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.background}></div>
            </section>
        )
    }
};

export default Post;