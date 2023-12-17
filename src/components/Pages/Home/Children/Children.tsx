'use client'
import React, {useEffect, useState} from 'react';
import styles from './Children.module.scss'
import Image from "next/image";
import {getDebugPort} from "next/dist/server/lib/utils";
import Link from "next/link";

interface ChildImage {
    src: string
    alt: string
    name: string
    years: string
    money: string
    diagnosis: string
}

const Children = () => {
    const [hoveredChild, setHoveredChild] = useState<number | null>(null)
    const [isWidthScreen, setIsWidthScreen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsWidthScreen(window.innerWidth > 1023.98);
        };

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);
    
    const childImages: ChildImage[] = [
        {
            src: '/children/preview_image3.webp',
            name: 'Степа Гаврилюк',
            alt: 'Ребенок 1',
            years: '5 лет',
            money: '1 129 646',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
        {
            src: '/children/preview_image2.webp',
            alt: 'Ребенок 2',
            name: 'Фирдавс Шукурзода',
            years: '4 года',
            money: '1 129 646',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
        {
            src: '/children/preview_image1.webp',
            alt: 'Ребенок 3',
            name: 'Саша Яковлев',
            years: '6 лет',
            money: '819 255',
            diagnosis: 'Первичный иммунодефицит',
        },
        {
            src: '/children/preview_image5.webp',
            alt: 'Ребенок 4',
            name: 'Полина Глызина',
            years: '14 лет',
            money: '312 000',
            diagnosis: 'Апластическая анемия',
        },
        {
            src: '/children/preview_image4.webp',
            alt: 'Ребенок 5',
            name: 'Ярослав Кораблин',
            years: '3 года',
            money: '1 129 646',
            diagnosis: 'Острый лимфобластный лейкоз',
        },
    ];

    const handleChildHover = (index: number | null) => {
        setHoveredChild(isWidthScreen ? index : null)
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
                                    <Link href='/give-help' className={styles.list__itemContent}>
                                        <div className={styles.list__itemHelpContent}>
                                            <h4 className={styles.list__itemTitle}>{child.name}</h4>
                                            <p className={styles.list__itemDiag}>{child.diagnosis}</p>
                                        </div>
                                        <p className={styles.list__itemHelp}>Помочь!</p>
                                    </Link>
                                    <div className={styles.list__itemDesc}>
                                        <p className={styles.list__desc}>{child.years} лет</p>
                                        <p className={styles.list__desc} style={{color: 'var(--orange-text)'}}>{child.money} ₽ необходимо</p>
                                        <Image className={styles.list__itemDescImg}
                                               src={child.src}
                                               alt={child.alt}
                                               width={200}
                                               height={200}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.children__img} style={{
                            transform: `scale(${isWidthScreen && hoveredChild !== null ? 1.2 : 1})`,
                            transition: 'transform 0.3s ease-out',
                        }}>
                        {hoveredChild !== null && (
                            <Image
                                src={childImages[hoveredChild].src}
                                alt={childImages[hoveredChild].alt}
                                width={300}
                                height={300}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Children;
