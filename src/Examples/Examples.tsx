"use client";

import React from 'react';
import styles from './Examples.module.scss';

const Examples = () => {
    return (
        <div className={styles.container}>
            <h1>Примеры исследований</h1>
            <div className={styles.wrapper}>
                <div className={styles.examples}>
                    <h2>
                        Исследование рынка автоматических выключателей на территории Московской области для ООО “Фирма”
                    </h2>
                    <a>25 марта 2020</a>
                </div>
                <div className={styles.scrollableContainer}>
                    <div className={styles.scrollable}>
                        Анализ состояния рынка автоматических выключателей, оценка объема рынка, анализ конкурентов, прогноз развития рынка, а также определение факторов, влияющих на рынок автоматических выключателей.
                    </div>
                    <div className={styles.buttonContainer}>    
                        <button className={styles.buttonOne}>
                    <span className={`${styles["btn-one-text"]}, ${styles["btn-one-text--short"]}`}>
                        Скачать
                    </span>
                    <span className={`${styles["btn-one-text"]}, ${styles["btn-one-text--long"]}`}>
                        Скачать пример
                    </span>
                    </button>
                        <button className={styles.buttonTwo}>Заказать исследование</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examples;
