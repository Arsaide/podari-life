import React from 'react';
import styles from './page.module.scss'
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Контакты и реквизиты',
    description: 'Свяжитесь с нами на странице "Контакты и Реквизиты" фонда «Подари жизнь». ' +
        'Здесь вы найдете не только наши контактные данные, но и информацию о реквизитах для ' +
        'совершения благотворительных взносов. Будем рады ответить на ваши вопросы и сотрудничать ' +
        'вместе в деле помощи сильно больным детям. Вместе мы создаем положительные перемены!',
    keywords: 'онлайн-консультации, благотворительные средства, помощь онкологическим детям, детская онкология, онкологическая помощь' +
        'обратная связь, сотрудничество, помощь нуждающимся'
}

const Kontakty_i_rekvizity = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.header}>
                    <Link href='/who-we' className={styles.header__prevPage}>Кто мы</Link>
                    <h2 className={styles.header__title}>Контакты и реквизиты</h2>
                </div>
                <div className={styles.contact__content}>
                    <div className={styles.content}>
                        <h3 className={styles.content__desc}>«Подари жизнь» находится в Москве, у него нет филиалов, отделений и представителей в регионах России. Есть два партнерских фонда за рубежом: Gift of Life в Великобритании и Podari.Life в США.</h3>
                        <h4 className={styles.content__title}>Контакты</h4>
                        <div className={styles.texts}>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Адреса:</div>
                                <div className={styles.text__desc}>
                                    Юридический адрес:<br/>
                                    121351, г. Москва, вн.тер.г. муниципальный округ Кунцево,<br/>
                                    ул. Молодогвардейская, д. 59, стр. 3, помещ. I, ком. 1<br/>
                                    <br/>
                                    Почтовый адрес:<br/>
                                    119048, г. Москва, ул. Доватора, д. 13, подъезд 2А
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Телефоны:</div>
                                <div className={styles.text__desc}>
                                    <Link className={styles.links} href='tel:+78002505222'>+7 (800) 250-52-22</Link> (звонок из регионов бесплатный)<br/>
                                    <Link className={styles.links} href='tel:+74959953105'>+7 (495) 995-31-05</Link><br/>
                                    <Link className={styles.links} href='tel:+79250811582'>+7 (925) 081-15-82</Link> — по вопросам донорства крови<br/>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Эл. почта:</div>
                                <div className={styles.text__desc}>
                                    <Link className={styles.links} href='mailto:info@podari-zhizn.ru'>info@podari-zhizn.ru</Link><br/>
                                    <Link className={styles.links} href='mailto:help@podari-zhizn.ru'>help@podari-zhizn.ru</Link> — для обращений за помощью<br/>
                                    <Link className={styles.links} href='mailto:hr@podari-zhizn.ru'>hr@podari-zhizn.ru</Link> — по вопросам трудоустройства<br/>
                                    <Link className={styles.links} href='mailto:donate@podari-zhizn.ru'>donate@podari-zhizn.ru</Link> — по всем вопросам благотворителей<br/>
                                    <Link className={styles.links} href='mailto:spravka@podari-zhizn.ru'>spravka@podari-zhizn.ru</Link> — для получения справок о совершенных пожертвованиях<br/>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text__title}>Для СМИ</div>
                                <div className={styles.text__desc}>
                                    <Link className={styles.links} href='mailto:pressa@podari-zhizn.ru'>pressa@podari-zhizn.ru</Link><br/>
                                    <Link className={styles.links} href='tel:+74959953108'>+7 (495) 995-31-08</Link> <br/>
                                </div>
                            </div>
                            <h3 className={styles.files__title}>Учредительные документы фонда</h3>
                            <div className={styles.files}>
                                <div className={styles.files__links}>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/4/document-758f4099343a379e8fc5e5fd6a33865f.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Договор оферты</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (1,0 МБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/5/document-4d20cebb1e74ff1099c5911bdf1b5112.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Политика конфиденциальности</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (411,7 КБ)</span>
                                                </div>
                                                <div className={styles.download__btn}>↓</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.download}>
                                        <Link href='https://api.podari-zhizn.ru/storage/content_block/document/6/document-4e2dfe993ea2aee7e3c4c9c4d3bf24bb.pdf'>
                                            <div className={styles.download__content}>
                                                <div>
                                                    <span className={styles.download__title}>Правила пользования сайтом</span>
                                                    <span className={styles.download__desc}>Adobe Portable Document Format (122,8 КБ)</span>
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

export default Kontakty_i_rekvizity;
