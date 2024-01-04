'use client'
import React, {useEffect, useState} from 'react';
import styles from './Posts.module.scss'
import postCard from "../../../../../public/childrenPosts";
import Link from "next/link";
import Image from "next/image";
import TheCardProps from "@/components/TheCardProps/TheCardProps";

async function getData() {
    return postCard
}

interface Posts {

}

const Posts = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getData()

            } catch (e) {
                alert(`Error: ${e}`);
            }
        }

        fetchData()
    }, [])


    const posts = getData();

    return (
        <section className={styles.posts}>
            <div className={styles.posts__container}>
                <div className={styles.cards}>
                    {postCard.map((post) => (
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
                </div>
            </div>
        </section>
    );
};

export default Posts;
