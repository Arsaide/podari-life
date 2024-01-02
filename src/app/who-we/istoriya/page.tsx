import React from 'react';
import styles from './page.module.scss'
import Link from "next/link";
import Image from "next/image";

const Istoriya = () => {
    return (
        <section className={styles.ist}>
            <div className={styles.ist__container}>
                <div className={styles.header}>
                    <Link href='/' className={styles.header__prevPage}>Кто мы</Link>
                    <h2 className={styles.header__title}>О фонде</h2>
                </div>
                <div className={styles.ist__content}>
                    <div className={styles.content}>
                        <h3 className={styles.content__desc}>«Подари жизнь» учрежден 26 ноября 2006 года. Офис фонда находится в Москве, у нас нет филиалов, отделений и представителей в регионах России. Есть партнерские фонды в Великобритании — Gift of Life, и в США — Podari.Life</h3>
                        <p className={styles.content__desc}><span className={styles.content__title}>более 85 000 детей</span><br/> получили помощь за все время работы фонда</p>
                        <p className={styles.content__text}>Мы хотим, чтобы в России любой ребенок или взрослый до 25 лет с онкологическим или гематологическим заболеванием мог получить самую эффективную и современную медицинскую помощь, а также немедицинскую поддержку. Все программы фонда направлены прежде всего на защиту интересов ребенка и его права на получение своевременной помощи. Программы финансируются только за счет частных пожертвований и помощи бизнеса, не за счет государственных грантов и субсидий.</p>
                        <p className={styles.content__text}>Большинство детей с онкологическими заболеваниями  выздоравливает: сейчас этот показатель в России, по мнению экспертов, достигает более 80%. Но практически ни в одной стране лечение детских онкозаболеваний не обходится без помощи благотворителей, и наша страна не исключение. На попечении фонда единовременно находится около 1000 детей и молодых взрослых из 5 расположенных в Москве и области клиник федерального и городского подчинения, а также дети из более чем 40 региональных клиник.</p>
                        <p className={styles.list__title}>Задачи фонда</p>
                        <ul className={styles.list}>
                            <li className={styles.list__item}>сбор средств на лечение и реабилитацию детей с онкологическими и гематологическими заболеваниями;</li>
                            <li className={styles.list__item}>помощь онкологическим и гематологическим клиникам, где лечатся дети и молодые взрослые;</li>
                            <li className={styles.list__item}>привлечение общественного внимания к проблемам больных детей;</li>
                            <li className={styles.list__item}>содействие развитию безвозмездного донорства крови;</li>
                            <li className={styles.list__item}>оказание социальной и психологической помощи больным детям;</li>
                            <li className={styles.list__item}>содействие работе волонтерских групп при детских онкологических клиниках.</li>
                        </ul>
                        <div className={styles.link}>
                            <Link href='/who-we/kontakty-i-rekvizity'>
                                <div className={styles.link__content}>
                                    <div>
                                        <span className={styles.link__title}>Контакты и реквизиты фонда</span>
                                        <span className={styles.link__desc}>Здесь можно узнать адреса и телефоны фонда, а также банковские реквизиты</span>
                                    </div>
                                    <div className={styles.link__btn}>→</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}></div>
        </section>
    );
};

export default Istoriya;
