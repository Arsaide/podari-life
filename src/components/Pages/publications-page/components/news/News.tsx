import React from 'react';
import styles from './News.module.scss'
import posts from '../../../../../../public/childrenPosts'
import CardProps from "@/components/common/ui/card-props/CardProps";

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

const News = async () => {
    const posts = await getData();
    const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3);

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                <h3 className={styles.posts__title}>Новости:</h3>
                <div className={styles.cards}>
                    {randomPosts.map((post) => (
                        <CardProps
                            key={post.id}
                            href={`publications/${post.webName}`}
                            imgSrc={post.post.img.src}
                            imgAlt={post.card.img.alt}
                            title={post.card.text.title}
                            desc={post.card.text.desc}
                            status={post.card.text.status}
                            date={post.card.text.date}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;