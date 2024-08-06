"use client";

import React, {useState} from 'react';
import styles from './AssessmentOfBrand.module.scss';

const AssessmentOfBrand = () => {
    const [selectedText, setSelectedText] = useState('');

    const handleClick = (text: string) => {
        setSelectedText(text);
    };

    return (
        <div className={styles.container}>
            <div className={styles.warp}>
                <h1>Оценка узнаваемости, здоровья бренда</h1>
                <div className={styles.scrollable}>{selectedText}</div>
                <button className={styles.buttonOne}>Заказать исследование</button>
            </div>
           <ul className={styles.menu}>
                <li onClick={() => handleClick('Комплексные и прединвестиционные исследования рынка')}>
                    <a>01</a>Комплексные и прединвестиционные исследования рынка 
                </li>
                <li onClick={() => handleClick('Исследования целевой аудитории')}>
                    <a>02</a>Исследования целевой аудитории 
                </li>
                <li onClick={() => handleClick('Оценка узнаваемости, здоровья бренда')}>
                    <a>03</a>Оценка узнаваемости, здоровья бренда 
                </li>
                <li onClick={() => handleClick('Оценка удовлетворенности потребителей')}>
                    <a>04</a>Оценка удовлетворенности потребителей 
                </li>
                <li onClick={() => handleClick('Изучение восприятия продукта, услуги')}>
                    <a>05</a>Изучение восприятия продукта, услуги 
                </li>
            </ul>
        </div>
    );
};

export default AssessmentOfBrand;