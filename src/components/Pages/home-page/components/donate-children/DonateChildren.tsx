import React from 'react';
import ButtonProps from "@/components/common/ui/button-props/ButtonProps";
import styles from './DonateChildren.module.scss';

const DonateChildren = () => {
    return (
        <section className={styles.donate}>
            <div className={styles.donate__container}>
                <h2 className={styles.donate__title}>Как помочь?</h2>
                <p className={styles.donate__text}>Есть очень много разных способов.<br/> Пожертвование - только один из них. Выберите<br/>
                    удобный вам формат.</p>
                <div className={styles.donate__btns}>
                    <ButtonProps text='Пожертвовать' url='/give-help'/>
                </div>
            </div>
        </section>
    );
};

export default DonateChildren;