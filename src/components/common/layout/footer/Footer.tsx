import styles from './Footer.module.scss';
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__logo}>
                        <Link href='/'>
                            <Image
                                src='/logo.svg'
                                alt='Логотип благотворительного фонда "Подари жизнь"'
                                width={293}
                                height={63}/>
                            <Image
                                src='/kids.svg'
                                alt='Логотип благотворительного фонда "Подари жизнь"'
                                width={306}
                                height={100}/>
                        </Link>
                    </div>
                    <div className={styles.footer__info}>
                        <div className={styles.footer__menu}>
                            <div className={styles.footer__menuLeft}>
                                <Link className={styles.footer__linkMenu} href='/who-we'>Кто мы</Link>
                                <Link className={styles.footer__linkMenu} href='/what-we-do'>Что мы делаем</Link>
                                <Link className={styles.footer__linkMenu} href='/publications'>Публикации</Link>
                                <Link className={styles.footer__linkMenu} href='/give-help'>Помочь фонду</Link>
                            </div>
                            <div className={styles.footer__menuRight}>
                                <a className={styles.sponsor} href="https://www.podari.life/">Podari.Life</a>
                                <a className={styles.sponsor} href="https://www.giftoflife.eu/">Gift of Life</a>
                            </div>
                        </div>
                        <div className={styles.footer__links}>
                            <div className={styles.footer__linksLeft}>
                                <h6 className={styles.footer__linkText}>Скачать приложение</h6>
                                <div className={styles.footer__linksLeftContent}>
                                    <a href='https://apps.apple.com/ru/app/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%B8-%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C/id908273221'
                                       className={styles.link}>
                                        <div className={styles.link__text}>iOS</div>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 className={styles.link__icon}>
                                                <path
                                                    d="M17.6181 11.1685C17.6388 9.53254 18.4802 8.02137 19.8477 7.16447C18.9811 5.90299 17.5817 5.13186 16.0716 5.0837C14.4828 4.91372 12.9426 6.05272 12.133 6.05272C11.3077 6.05272 10.0612 5.10058 8.71895 5.12873C6.95287 5.18689 5.3463 6.18556 4.48707 7.75937C2.65728 10.9884 4.02214 15.7341 5.77492 18.3442C6.65187 19.6223 7.67677 21.05 9.01784 20.9994C10.3302 20.9439 10.8203 20.1464 12.4044 20.1464C13.9737 20.1464 14.4336 20.9994 15.8018 20.9672C17.21 20.9439 18.0972 19.6834 18.9434 18.3932C19.5735 17.4825 20.0584 16.476 20.38 15.4109C18.7075 14.6899 17.62 13.0195 17.6181 11.1685Z"
                                                >
                                                </path>
                                                <path
                                                    d="M15.0345 3.3662C15.8023 2.42672 16.1806 1.21917 16.089 0C14.9159 0.125579 13.8324 0.697018 13.0542 1.60046C12.2858 2.49182 11.8966 3.65796 11.9722 4.84204C13.1609 4.85451 14.2896 4.31056 15.0345 3.3662Z"
                                                >
                                                </path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href='https://play.google.com/store/apps/details?id=ru.givealife&hl=ru&gl=US'
                                       className={styles.link}>
                                        <div className={styles.link__text}>Android</div>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 className={styles.link__icon}>
                                                <path
                                                    d="M4.5221 1.82422C4.2853 2.07735 4.14648 2.46113 4.14648 2.9674V21.0296C4.14648 21.5359 4.2853 21.9278 4.5221 22.1728L14.6964 11.9985L4.5221 1.82422Z"
                                                    fill="white" stroke="#D94236" strokeMiterlimit="10">
                                                </path>
                                                <path
                                                    d="M14.7051 12.0006L18.1509 8.55469L22.1439 10.8247C23.2871 11.4698 23.2871 12.5313 22.1439 13.1846L18.1509 15.4546L14.7051 12.0006Z"
                                                    fill="white" stroke="#D94236" strokeMiterlimit="10">
                                                </path>
                                                <path
                                                    d="M18.1518 15.4459L14.7059 12L4.52344 22.1743C4.89905 22.5744 5.51964 22.6234 6.22187 22.2233L18.1518 15.4459Z"
                                                    fill="white" stroke="#D94236" strokeMiterlimit="10">
                                                </path>
                                                <path
                                                    d="M18.1518 8.55413L6.22187 1.77671C5.51964 1.3766 4.89905 1.42559 4.52344 1.8257L14.6977 12L18.1518 8.55413Z"
                                                    fill="white" stroke="#D94236" strokeMiterlimit="10">
                                                </path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.footer__linksRight}>
                                <h6 className={styles.footer__linkText}>Подписывайтесь на нас в соцсетях</h6>
                                <div className={styles.footer__linksRightContent}>
                                    <a href="https://vk.com/podaryzhizn" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23.4602 6.53023C23.6384 5.99502 23.4602 5 22.6715 5H20.0843C19.4228 5 19.0837 5.94636 18.9056 6.31128C18.9056 6.31128 17.557 9.42523 15.6741 11.4444C15.0634 12.0283 14.7836 12.2229 14.4527 12.2229C14.2747 12.2229 13.8032 12.0283 13.8032 11.4931L13.8509 6.31128C13.8509 5.67876 13.8421 5 13.2823 5H9.16019C8.75307 5 8.49862 5.87338 8.49862 6.16531C8.49862 6.77351 9.75559 6.51595 9.85737 8.21889V12.3202C9.85737 13.1231 9.38919 13.269 9.05841 13.269C8.16783 13.269 6.00501 10.1307 4.70732 6.55456C4.45287 5.84905 4.19842 5 3.53685 5H0.890573C0.127225 5 0 5.92204 0 6.28696C0 6.9438 0.890575 10.2524 4.14753 14.6314C6.31035 17.6237 9.38919 18.789 12.1627 18.789C13.8421 18.789 14.0457 18.8644 14.0457 18.2562V15.9937C14.0457 15.2639 14.1983 15.1423 14.7326 15.1423C15.1143 15.1423 15.8013 15.3369 17.3534 16.7722C19.1347 18.4751 19.44 18.789 20.4323 18.789H22.5671C23.3305 18.789 24.1727 18.8887 23.9691 18.1832C23.7401 17.4777 22.8751 16.456 21.7555 15.2396C21.1448 14.5584 20.2287 13.8042 19.9488 13.4393C19.5672 12.9528 19.669 12.7581 19.9488 12.3202C19.9234 12.3202 23.1295 7.9899 23.4602 6.53023Z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="https://t.me/podarizhizn" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_117_6)">
                                                <path
                                                    d="M22.0517 2.12901L0.78878 10.3709C-0.0668675 10.7547 -0.356277 11.5233 0.581933 11.9404L6.03682 13.6829L19.2259 5.48965C19.946 4.97527 20.6833 5.11245 20.0489 5.67825L8.72124 15.9877L8.3654 20.3506C8.69499 21.0243 9.29847 21.0274 9.68339 20.6926L12.8174 17.7119L18.1848 21.7519C19.4314 22.4937 20.1097 22.015 20.3779 20.6553L23.8985 3.89891C24.264 2.22519 23.6407 1.48776 22.0517 2.12901Z"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_6">
                                                    <rect width="24" height="24" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="https://podcast.ru/1567208088" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M11.9654 0C9.45174 0 7.41382 2.03788 7.41382 4.55169V12.6206C7.41382 15.1345 9.45174 17.1722 11.9654 17.1722C14.4794 17.1722 16.5173 15.1345 16.5173 12.6206V4.55169C16.5173 2.03788 14.4794 0 11.9654 0ZM5.86209 12.5172C5.86209 12.003 5.44519 11.5862 4.931 11.5862C4.41678 11.5862 4 12.003 4 12.5172C4 16.5443 7.02777 19.8642 10.9311 20.3248V21.9308H7.20688C6.63558 21.9308 6.17237 22.3942 6.17237 22.9654C6.17237 23.5366 6.63558 24 7.20688 24H16.5173C17.0885 24 17.5516 23.5366 17.5516 22.9654C17.5516 22.3942 17.0885 21.9308 16.5173 21.9308H13V20.2975C16.8029 19.7461 19.7242 16.4729 19.7242 12.5172C19.7242 12.003 19.3072 11.5862 18.793 11.5862C18.2789 11.5862 17.862 12.003 17.862 12.5172C17.862 15.831 15.1759 18.5172 11.8621 18.5172C8.54828 18.5172 5.86209 15.831 5.86209 12.5172Z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="https://zen.yandex.ru/podarizhizn" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M11.7571 0C11.7004 4.93687 11.3777 7.69985 9.53876 9.53874C7.69987 11.3776 4.93689 11.7003 0 11.757V12.4736C4.93689 12.5303 7.69987 12.853 9.53876 14.6919C11.3487 16.5021 11.6899 19.2073 11.7543 24H12.4764C12.5408 19.2073 12.8819 16.5021 14.6919 14.6919C16.5021 12.8819 19.2074 12.5408 24 12.4764V11.7542C19.2074 11.6898 16.5021 11.3487 14.6919 9.53874C12.853 7.69985 12.5303 4.93687 12.4736 0H11.7571Z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/c/fondpodarizhizn" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23.4998 6.5549C23.2249 5.55082 22.4116 4.75872 21.3769 4.4872C19.5063 4 12 4 12 4C12 4 4.49761 4 2.62299 4.4872C1.59208 4.7549 0.778909 5.54713 0.500182 6.5549C7.58604e-07 8.37713 0 12.1818 0 12.1818C0 12.1818 7.58604e-07 15.9863 0.500182 17.8088C0.775091 18.8127 1.58826 19.6049 2.62299 19.8765C4.49761 20.3637 12 20.3637 12 20.3637C12 20.3637 19.5063 20.3637 21.3769 19.8765C22.4078 19.6087 23.2211 18.8165 23.4998 17.8088C24 15.9863 24 12.1818 24 12.1818C24 12.1818 24 8.37713 23.4998 6.5549ZM15.837 12.1818L9.60216 15.6889V8.6747L15.837 12.1818Z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="https://ok.ru/podari.zhizn" className={styles.social}>
                                        <svg className={styles.social__icon}
                                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.7208 11.9632C15.1655 11.9632 17.7151 9.0378 17.7151 5.74254C17.7151 2.44729 15.1655 0 11.7208 0C8.27617 0 5.75195 2.68634 5.75195 5.9816C5.75195 9.27685 8.27617 11.9632 11.7208 11.9632ZM11.7208 3.51018C13.1436 3.51018 14.3043 4.62048 14.3043 5.9816C14.3043 7.34271 13.1436 8.45301 11.7208 8.45301C10.298 8.45301 9.13733 7.34271 9.13733 5.9816C9.13733 4.62048 10.298 3.51018 11.7208 3.51018Z"
                                            ></path>
                                            <path
                                                d="M14.1773 17.6773C15.3939 17.3904 16.5746 16.924 17.6481 16.2424C18.4711 15.7402 18.7216 14.6281 18.1848 13.8029C17.6839 12.9779 16.5746 12.7267 15.7516 13.2648C13.3185 14.8074 10.134 14.8074 7.70089 13.2648C6.87789 12.7626 5.80455 12.9779 5.26776 13.8029C4.76685 14.6281 4.98155 15.7043 5.80455 16.2424C6.87789 16.924 8.05875 17.3904 9.27525 17.6773L5.9476 21.0136C5.26776 21.6953 5.26776 22.8074 5.9476 23.4889C6.30546 23.8477 6.73484 23.9911 7.19998 23.9911C7.66513 23.9911 8.09451 23.8118 8.45225 23.4889L11.7441 20.1886L15.036 23.4889C15.7159 24.1705 16.8251 24.1705 17.5049 23.4889C18.1848 22.8074 18.1848 21.6953 17.5049 21.0136L14.1773 17.6773Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.copyright}>
                            © 2006-2023 Фонд «Подари жизнь»
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
