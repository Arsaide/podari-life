import styles from './TheButtonProps.module.scss';

import React from 'react';
import Link from "next/link";

type Props = {
    text: string,
    url: string,
}

function TheButtonProps({text, url}: Props) {
    return (
        <Link href={url}>
            <button className={styles.button}>{text}</button>
        </Link>
    );
}

export default TheButtonProps;
