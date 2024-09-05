"use client";

import React from 'react';
import styles from './Examples.module.scss';

const Examples = () => {
    return (
        <div className={styles.container}>
            <div className={styles.warp}>
                <h1>Примеры исследований</h1>
            </div>
            <div className={styles.examples}>
                <h2>
                Исследование рынка автоматических выключателей на территории Московской области
                для ООО “Фирма”
                </h2>
                <a>25 марта 2020</a>
            </div>
            <div className={styles.scrollable}>
                Анализ состояния рынка автоматических выключателей, оценка объема рынка, анализ конкурентов, прогноз развития рынка, а также определение факторов, влияющих на рынок автоматических выключателей.
                <button className={styles.buttonOne}>Заказать исследование</button>
            </div>
        </div>
    );
};

export default Examples;