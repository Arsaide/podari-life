import React from 'react';
import {Metadata} from "next";

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

const Post = ({params: {id}} : Props) => {
    return (
        <div>
            
        </div>
    );
};

export default Post;
