import React from 'react';
import styles from './page.module.scss'
import {Metadata} from "next";
import posts from "../../../public/childrenPosts.json";
import Image from "next/image";

async function getData(id: string) {
    const post = posts.find((post) => post.id === Number(id))
    return post || null;
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    return {
        title: id,
    }
}

const Post = async ({params: {id}}: Props) => {
    const item = await getData(id)

    if (!item) {
        return (
            <section className={styles.post}>
                <div>
                   <p>Post not found</p>
                </div>
            </section>
        )
    } else {
        return (
            <section className={styles.post}>
                <div className={styles.post__container}>
                    <div className={styles.post__header}>
                        <h3>{item.card.text.title}</h3>
                    </div>
                    <div className={styles.post__content}>
                        <div className={styles.post__aside}>
                            <p className={styles.post__date}>{item.card.text.date}</p>
                            <p className={styles.post__dateDesc}>Нужна помощь</p>
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.content__title}>{item.card.text.desc}</h4>
                            <p className={styles.content__text}>{item.post.text.firstText}</p>
                            <Image
                                src={`/posts/${item.post.img.src}`}
                                alt={item.post.img.alt}
                                width={300}
                                height={200}
                                className={styles.content__img}/>
                            <p className={styles.content__imgDesc}>{item.post.img.desc}</p>
                            <p className={styles.content__text}>{item.post.text.secondText}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default Post;
