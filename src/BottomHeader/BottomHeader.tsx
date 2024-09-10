"use client";

import React from 'react';
import styles from './BottomHeader.module.scss';

const BottomHeader = () => {

    return (
    <div className={styles.container}>
        <div className={styles.text}>© Исследовательсткое агентство «Элементор», 2019 - 2021</div>
        <a className={styles.text_under}>Политика конфиденциальности</a>
    </div>
    );
};

export default BottomHeader;