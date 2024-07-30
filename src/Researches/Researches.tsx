import React from 'react';
import styles from './Researches.module.scss';

const Researches = () => {
  return (
<div className={styles.container}>
    <div className={styles.textColumn}>
        <div className={styles.text}>Полный комплекс исследований рынков промышленной продукции</div>
        <div className={styles.text_under}>Мы работаем в строительной, электротехнической, светотехнической, инжиниринговой, телекоммуникационной, промавтоматизации и др. отраслях.</div>
        <div className={styles.imageColumn}>
            <div className={styles.content}>Данные для маркетинговых исследований собираются в строгом соответствии с целями и задачами заказчика</div>
            <div className={styles.content}>Наши специалисты проводят достоверные и точные исследования рынка</div>    
        </div>
        <button className={styles.buttonOne}>Заказать исследование</button>
        <button className={styles.buttonTwo}>Примеры исследований</button>
    </div>
    <img src={'https://i.yapx.ru/XwTJ7.png'} className={styles.image}/>
</div>

);
}

export default Researches;