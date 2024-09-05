'use client'

import React from 'react';
import styles from './Content.module.scss';

const Content = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  return (
<div className={styles.container}>
    <div className={styles.textColumn}>
        <div className={styles.text}>
            Любое исследование — это уникальная задача
        </div>
        <div className={styles.text_under}>
            Маркетинговое агентство «Элементор» – ваш проводник в решении актуальных бизнес-задач:
        </div>
        <div className={styles.column}>
            <div className={styles.contentList}>
                <a className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--research`}></use>
                    </svg>
                    Маркетинговое исследование для оценки привлекательности нового потребительского рынка или нового региона
                </a>
                <a className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--analysis`}></use>
                    </svg>
                    Анализ таможенной статистики для выявления основных конкурентов, поиска новых поставщиков и покупателей за рубежом
                </a>
                <a className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--measuring`}></use>
                    </svg>
                    Замер уровня знания и уровня лояльности к торговой марке для оценки текущего положения компании на рынке
                </a>
            </div>
        </div>
        <div className={styles.column}>
            <a className={styles.item}>
                <h1>Наш главный актив</h1>
                <div>квалифицированные специалисты в области маркетинга, менеджмента, социологии, математики и IT.</div>
            </a>
            <a className={styles.items}>
                <h1>Наша цель</h1>
                <div>предоставить достоверную информацию для наших клиентов</div>
            </a>
        </div>   
    </div>
</div>
);
}

export default Content;