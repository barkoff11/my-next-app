"use client";

import React from 'react';
import styles from './Methods.module.scss';

const Methods = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Методы</h1>
                <div className={styles.text}>Распространённым подходом является комбинаторный, при котором, качественное (1) исследование предшествует количественному (2):</div>
                <div className={styles.text_under}>1.	Формулируем или уточняем исходные гипотезы заказчика относительно задач</div> 
                <div className={styles.text_under}>2.	Подтверждаем или опровергаем статистически, насколько эти гипотезы распространены в среде целевой аудитории</div>
            </div>
            
           <div className={styles.menu}>
                <a className={`${styles.content} ${styles.one}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--idi`}></use>
                    </svg>
                    Проведение глубинных интервью (IDI)
                </a>
                <a className={`${styles.content} ${styles.two}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--dr`}></use>
                    </svg>
                    Кабинетные исследования (Desk research) 
                </a>
                <a className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--ms`}></use>
                    </svg>
                    Тайный покупатель (Mystery Shopping) 
                </a>
                <img src={`${BASE_PATH}/img/method__bg.png`} className={styles.image}/>
                <a className={`${styles.content} ${styles.three}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--oa`}></use>
                    </svg>
                    Online-анкетирование  
                </a>
                <a className={`${styles.content} ${styles.thore}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--cjm`}></use>
                    </svg>
                    Customer Journey Map  
                </a>
                <a className={`${styles.content} ${styles.five}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--ht`}></use>
                    </svg>
                    Холл-тесты (Hall-test)  
                </a>
                <a className={`${styles.content} ${styles.six}`}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#methods__item--fgd`}></use>
                    </svg>
                    Исследование фокус-групп (FGD) 
                </a>
            </div>
            
        </div>
    );
};

export default Methods;