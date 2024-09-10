"use client";

import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;

    return (
        <div className={styles.container}>
    <div className={styles.warp}>
        <h1>Контактная информация</h1>
        <div className={styles.text}>Исследовательсткое агентство «Элементор»</div>
        <div className={styles.contentList}>
            <a className={styles.content}>
                <svg>
                    <use xlinkHref={`${BASE_PATH}/img/sprite.svg#contacts__info--adress`}></use>
                </svg>
                125047, г. Москва, ул. Профсоюзная, д. 10 стр. 1
            </a>
            <a className={styles.content}>
                <svg>
                    <use xlinkHref={`${BASE_PATH}/img/sprite.svg#contacts__info--mail`}></use>
                </svg>
                +7 (495) 325 45 54<br/> 
                Будни с 9.00 до 20.00<br/>
                Выходные с 10.00 до 18.00
            </a>
            <a className={styles.content}>
                <svg>
                    <use xlinkHref={`${BASE_PATH}/img/sprite.svg#contacts__info--phone`}></use>
                </svg>
                office@elemxentor.ru
            </a>
        </div>
    </div>
    <button className={styles.buttonOne}>Написать</button>
    <img className={styles.image} src={`${BASE_PATH}/img/contacts__map.jpg`} />
</div>
    );
};

export default Contact;