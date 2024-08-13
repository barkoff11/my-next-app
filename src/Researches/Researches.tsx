"use client"

import React, { useEffect, useRef, useState } from 'react';
import styles from './Researches.module.scss';

const Researches = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;

    const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonText, setButtonText] = useState('Примеры исследований');

  const updateButtonText = () => {
    if (buttonRef.current) {
        const screenWidth = window.innerWidth; // Получаем ширину окна

        if (screenWidth < 960) { // Задаем пороговое значение ширины
            setButtonText('Примеры');
        } else {
            setButtonText('Примеры исследований');
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
    <div className={styles.textColumn}>
        <h2 className={styles.text}>Полный комплекс исследований рынков промышленной продукции</h2>
            <h4 className={styles.text_under}>Мы работаем в строительной, электротехнической, светотехнической, инжиниринговой, телекоммуникационной, промавтоматизации и др. отраслях.</h4>
                <div className={styles.imageColumn}>

                    <div className={styles.content}>
                        <svg className={styles.svg}>
                            <use xlinkHref={`${BASE_PATH}/img/sprite.svg#company__benefit--data`}></use>
                        </svg>
                        Данные для маркетинговых исследований собираются в строгом соответствии с целями и задачами заказчика
                    </div>
                    
                    <div className={styles.content}>
                        <svg className={styles.svg}>
                            <use xlinkHref={`${BASE_PATH}/img/sprite.svg#company__benefit--staff`}></use>
                        </svg>
                        Наши специалисты проводят достоверные и точные исследования рынка
                    </div>    
                </div>
    <div className={styles.buttonContainer}>
        <button className={styles.buttonOne}>Заказать исследование</button>
        <button ref={buttonRef} className={styles.buttonTwo}>{buttonText}</button>
    </div>
        
    </div>
    <img src={`${BASE_PATH}/img/company__bg.png`} className={styles.image}/>
    <div className={styles.circle}></div>
</div>

);
}

export default Researches;
