import React from 'react';
import styles from './Content.module.scss';

const Content = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  return (
<div className={styles.container}>
    <div className={styles.textColumn}>
        <div className={styles.text}>
            Любое иссследование - это уникальная задача
        </div>
        <div className={styles.text_under}>
            Маркетинговое агентство «Элементор» – ваш проводник в решении актуальных бизнес-задач:
        </div>
        <div className={styles.column}>
            <ul className={styles.contentList}>
                <li className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--research`}></use>
                    </svg>
                    Маркетинговое исследование для оценки привлекательности нового потребительского рынка или нового региона
                </li>
                <li className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--analysis`}></use>
                    </svg>
                    Анализ таможенной статистики для выявления основных конкурентов, поиска новых поставщиков и покупателей за рубежом
                </li>
                <li className={styles.content}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#tasks__item--measuring`}></use>
                    </svg>
                    Замер уровня знания и уровня лояльности к торговой марке для оценки текущего положения компании на рынке
                </li>
            </ul>
        </div>
    <ul className={styles.column}>
        <li className={styles.item}>
            <h1>Наш главный актив</h1>
            <div>квалифицированные специалисты в области маркетинга, менеджмента, социологии, математики и IT.</div>
        </li>
        <li className={styles.items}>
            <h1>Наша цель</h1>
            <div>предоставить достоверную информацию для наших клиентов</div>
        </li>
    </ul>

        
    </div>
</div>
);
}

export default Content;