import React from 'react';
import styles from './ChildrenPosts.module.scss'
import posts from '../../../../../public/childrenPosts.json'
import Link from "next/link";

async function getData() {
    return posts
}

const ChildrenPosts = async () => {
    const posts = await getData()

    const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3)

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                {randomPosts.map((post) => (
                    <Link href={`/${post.id}`} key={post.id}>
                        <h2>{post.desc}</h2>
                        <p>{post.date}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ChildrenPosts;
