import React from 'react';
import styles from './Content.module.scss';

const Content = () => {
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
            <div className={styles.content}>
                Маркетинговое исследование для оценки привлекательности нового потребительского рынка или нового региона
            </div>
            <div className={styles.content}>
                Анализ таможенной статистики для выявления основных конкурентов, поиска новых поставщиков и покупателей за рубежом
            </div>    
            <div className={styles.content}>
                Замер уровня знания и уровня лояльности к торговой марке для оценки текущего положения компании на рынке
            </div>
        </div>
        <div>
            <div className={styles.column}>
                <div className={styles.content}>Наш главный актив</div>
                <div className={styles.content}>квалифицированные специалисты в области маркетинга, менеджмента, социологии, математики и IT.</div>
            </div>
            <div>
                <div>Наша цель</div>
                <div>предоставить достоверную информацию для наших клиентов</div>
            </div>
        </div>
        
    </div>
</div>
);
}

export default Content;