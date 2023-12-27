import React from 'react';
import styles from './page.module.scss'
import {Metadata} from "next";
import posts from "../../../public/childrenPosts.json";

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
    const post = await getData(id)

    if (!post) {
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
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                </div>
            </section>
        )
    }
};

export default Post;
