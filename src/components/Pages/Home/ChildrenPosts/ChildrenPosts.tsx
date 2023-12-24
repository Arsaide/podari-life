import React from 'react';
import styles from './ChildrenPosts.module.scss'
import { posts }  from './DataPosts/data'

const ChildrenPosts = () => {
    const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3);

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                {randomPosts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.desc}</h2>
                        <p>{post.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChildrenPosts;
