'use client'
import React, {useEffect, useState} from 'react';
import styles from './Posts.module.scss'
import postCard from "../../../../../public/childrenPosts";
import TheCardProps from "@/components/TheCardProps/TheCardProps";
const Posts = () => {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(6)

    const showMoreItems = () => {
        setVisible(value => value + 6)
    }

    const posts = postCard;

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                <div className={styles.cards}>
                    {posts.slice(0, visible).map((post) => (
                        <TheCardProps
                            key={post.id}
                            href={post.webName}
                            imgSrc={post.post.img.src}
                            imgAlt={post.card.img.alt}
                            title={post.card.text.title}
                            desc={post.card.text.desc}
                            status={post.card.text.status}
                            date={post.card.text.date}/>
                    ))}
                    <div className={styles.btnCnt}>
                        {visible < posts.length && (
                            <button
                                className={styles.btn}
                                onClick={showMoreItems}>
                                Загрузить еще
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;
