import React from 'react';
import styles from './Researches.module.scss';

const Researches = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  return (
<div className={styles.container}>
    <div className={styles.textColumn}>
        <h1 className={styles.text}>Полный комплекс исследований рынков промышленной продукции</h1>
            <h3 className={styles.text_under}>Мы работаем в строительной, электротехнической, светотехнической, инжиниринговой, телекоммуникационной, промавтоматизации и др. отраслях.</h3>
                <div className={styles.imageColumn}>

                    <div className={styles.content}>
                        <svg>
                            <use xlinkHref={`${BASE_PATH}/img/sprite.svg#company__benefit--data`}></use>
                        </svg>
                        Данные для маркетинговых исследований собираются в строгом соответствии с целями и задачами заказчика
                    </div>
                    
                    <div className={styles.content}>
                        <svg>
                            <use xlinkHref={`${BASE_PATH}/img/sprite.svg#company__benefit--staff`}></use>
                        </svg>
                        Наши специалисты проводят достоверные и точные исследования рынка
                    </div>    
                </div>
        <button className={styles.buttonOne}>Заказать исследование</button>
        <button className={styles.buttonTwo}>Примеры исследований</button>
    </div>
    <img src={`${BASE_PATH}/img/company__bg.png`} className={styles.image}/>
</div>

);
}

export default Researches;