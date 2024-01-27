import styles from './ButtonProps.module.scss';

import React from 'react';
import Link from "next/link";

type Props = {
    text: string,
    url: string,
}

function ButtonProps({text, url}: Props) {
    return (
        <Link href={url}>
            <button className={styles.button}>{text}</button>
        </Link>
    );
}

export default ButtonProps;
