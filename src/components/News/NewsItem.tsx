"use client";

import React from 'react';
import styles from './News.module.scss';

export interface NewsItem {
    title: string;
    date: string;
}

const NewsItem = ({ title, date }: NewsItem) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString('ru-RU', { month: 'long' });
  const year = d.getFullYear();

  return (
    <div className={styles.example}>
      <div className={styles.text}>{title}</div>
      <div className={styles.text_under}>
        <h1>{day}</h1> {month} {year}
      </div>
    </div>
  );
};


export default NewsItem;