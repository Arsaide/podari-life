import React from 'react';
import styles from './Platform.module.scss'
import Image from "next/image";

const Platform = () => {
    return (
        <section className={styles.platform}>
            <div className={styles.platform__container}>
                <div className={styles.platform__content}>
                    <h3 className={styles.platform__title}>Платформа <br/>
                        «Друзья Фонда»</h3>
                    <p className={styles.platform__text}>День рождения, матер-класс, рок-концерт, чаепитие с друзьями - любое событие можно превратить в благотворительную акцию. Станьте
                        другом фонда, соберите деньги на лечение детей!</p>
                </div>
                <Image
                    className={styles.platform__image}
                    src='/platform/image.webp'
                    alt='Изображения тренеровки больной девочки'
                    width={635}
                    height={435}
                    loading='lazy'/>
            </div>
        </section>
    );
};

export default Platform;
