"use client";

import React from 'react';
import styles from './News.module.scss';

export interface NewsItem {
    title: string;
    date: {
        day: number;
        month: string;
        year: number;
    };
}

const NewsItem = ({ date, title}: NewsItem) => {     

    return (
        <div className={styles.example}>
            <div className={styles.text}>{title}</div>
            <div className={styles.text_under}>
                <h1>{date.day}</h1> {date.month} {date.year}
            </div>
        </div>
    );
};

export default NewsItem;