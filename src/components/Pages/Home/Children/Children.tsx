'use client'
import React, {useState} from 'react';
import styles from './Children.module.scss'
import Image from "next/image";

interface ChildImage {
    src: string
    alt: string
    name: string
    diagnosis: string
}

const Children = () => {
    const [hoveredChild, setHoveredChild] = useState<number | null>(null)

    const childImages: ChildImage[] = [
        {
            src: '/children/preview_image1.webp',
            name: 'Степа Гаврилюк',
            alt: 'Ребенок 1',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
        {
            src: '/children/preview_image2.webp',
            alt: 'Ребенок 2',
            name: 'Фирдавс Шукурзода',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
        {
            src: '/children/preview_image3.webp',
            alt: 'Ребенок 3',
            name: 'Саша Яковлев',
            diagnosis: 'Первичный иммунодефицит',
        },
        {
            src: '/children/preview_image4.webp',
            alt: 'Ребенок 4',
            name: 'Полина Глызина',
            diagnosis: 'Апластическая анемия',
        },
        {
            src: '/children/preview_image5.webp',
            alt: 'Ребенок 5',
            name: 'Ярослав Кораблин',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
    ];

    const handleChildHover = (index: number | null) => {
        setHoveredChild(index)
    }

    return (
        <section className={styles.children}>
            <div className={styles.children__container}>
                <h2 className={styles.children__title}>Дети</h2>
                <p className={styles.children__text}>
                    Им нужна помощь прямо сейчас. Какая и почему — в истории каждого
                    ребенка в разделе «Помочь детям».
                </p>
                <div className={styles.children__content}>
                    <div className={styles.children__lists}>
                        <ul className={styles.list}>
                            {childImages.map((child, index) => (
                                <li key={index}
                                    className={`${styles.list__item} ${hoveredChild === index ? styles.list__item_hovered : ''}`}
                                    onMouseEnter={() => handleChildHover(index)}
                                    onMouseLeave={() => handleChildHover(null)}>
                                    <h4 className={styles.list__itemTitle}>{child.name}</h4>
                                    <p className={styles.list__itemDesc}>{child.diagnosis}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.children__img}>
                        {hoveredChild !== null && (
                            <Image
                                src={childImages[hoveredChild].src}
                                alt={childImages[hoveredChild].alt}
                                width={200}
                                height={200}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Children;
