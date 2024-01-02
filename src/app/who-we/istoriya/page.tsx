import React from 'react';
import styles from './page.module.scss'
import Link from "next/link";
import Image from "next/image";

const Istoriya = () => {
    return (
        <section className={styles.ist}>
            <div className={styles.ist__container}>
                <div className={styles.header}>
                    <Link href='/who-we' className={styles.header__prevPage}>Кто мы</Link>
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
                        <div className={styles.links}>
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
                            <h3 className={styles.files__title}>Учредительные документы фонда</h3>
                            <div className={styles.files}>
                                <div className={styles.filre__links}>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/9/document-60602a7339dcccbe4b069ea462417fc0.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Свидетельство о государственной регистрации</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (851,5 КБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/10/document-0761b3110a355fbe3a916d72054ea833.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Свидетельство о постановке на учет в налоговом органе</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (181,0 КБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/11/document-1e69bee5a24c1cce78787598e6f44448.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Свидетельство о внесении в реестр благотворительных организаций г. Москвы</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (356,4 КБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/235/document-1c6d034f1a4e5d89b57a443ad0da6b20.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Свидетельство о регистрации на товарный знак «Подари жизнь»</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (2,1 МБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/236/document-c72fe258d494e3dcac39e3d0d34949b1.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Сводная ведомость результатов проведения СОУТ</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (1,1 МБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/512/document-857a90c16dfb25ef256242342aa02318.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Перечень рекомендуемых мероприятий по улучшению УТ</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (164,1 КБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/511/document-d04e25266348a97dcc6481696ac33d30.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Контакты и реквизиты фонда</span>
                                                    <span className={styles.download__desc}>Здесь можно узнать адреса и телефоны фонда, а также банковские реквизиты</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}></div>
        </section>
    );
};

export default Istoriya;
