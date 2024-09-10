"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Examples.module.scss';

const Examples = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [buttonText, setButtonText] = useState('Скачать пример');

    const updateButtonText = () => {
        if (buttonRef.current) {
            const screenWidth = window.innerWidth; // Получаем ширину окна

            if (screenWidth < 1100 && screenWidth > 320) { // Задаем пороговое значение ширины
                setButtonText('Скачать');
            } else {
                setButtonText('Скачать пример');
            }
        }
    }

  useEffect(() => {
    updateButtonText(); // Первоначальная проверка

    window.addEventListener('resize', updateButtonText);
    return () => {
      window.removeEventListener('resize', updateButtonText);
    };
  }, []);
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
                        <button ref={buttonRef} className={styles.buttonOne}>{buttonText}</button>
                        <button className={styles.buttonTwo}>Заказать исследование</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examples;
