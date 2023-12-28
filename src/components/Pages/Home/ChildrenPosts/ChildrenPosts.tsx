import React from 'react';
import styles from './ChildrenPosts.module.scss'
import posts from '../../../../../public/childrenPosts'
import Link from "next/link";
import Image from "next/image";

async function getData() {
    return posts
}

export async function getStaticProps() {
    const posts = await getData();

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
}

const ChildrenPosts = async () => {
    const posts = await getData();

    const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3);

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                <h3 className={styles.posts__title}>Новости:</h3>
                <div className={styles.cards}>
                    {randomPosts.map((post) => (
                        <article className={styles.card} key={post.id}>
                            <Link
                                className={styles.card__link}
                                href={`/${post.webName}`}>
                                <div>
                                    <div className={styles.card__imgcnt}>
                                        <Image
                                            src={`/posts/${post.post.img.src}`}
                                            alt={post.card.img.alt}
                                            className={styles.card__img}
                                            fill={true}
                                            loading='lazy'/>
                                    </div>
                                    <div className={styles.card__content}>
                                        <h4 className={styles.card__title}>{post.card.text.title}</h4>
                                        <p className={styles.card__text}>{post.card.text.desc}</p>
                                    </div>
                                </div>
                                <div className={styles.card__footer}>
                                    <span className={styles.card__status}>{post.card.text.status}</span>
                                    <span className={styles.card__date}>{post.card.text.date}</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChildrenPosts;