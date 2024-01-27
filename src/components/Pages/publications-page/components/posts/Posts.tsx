'use client'
import React, {useEffect, useState} from 'react';
import styles from './Posts.module.scss'
import postCard from "../../../../../../public/childrenPosts";
import postCardInt, { Post } from "../../../../../../public/childrenPosts";
import CardProps from "@/components/common/ui/card-props/CardProps";
const Posts = () => {
    const [visible, setVisible] = useState(6)

    const showMoreItems = () => {
        setVisible(value => value + 6)
    }

    const posts = postCard;

    const parseDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.')

        return new Date(Number(year), Number(month) - 1, Number(day))
    }

    const compareDates = (a: Post, b: Post): number => {
        const dateA = parseDate(a.card.text.date),
              dateB = parseDate(b.card.text.date)

        return dateB.getTime() - dateA.getTime();
    }

    const sortedPosts: Post[] = [...postCard].sort(compareDates)



    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                <div className={styles.cards}>
                    {sortedPosts.slice(0, visible).map((post) => (
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
                    <div className={styles.btnCnt}>
                        {visible < posts.length && (
                            <button
                                className={styles.btn}
                                onClick={showMoreItems}>
                                Показать еще
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;
