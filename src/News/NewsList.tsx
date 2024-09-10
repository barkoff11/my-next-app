'use client'

import React, { useState } from 'react';
import ExampleItem from './NewsItem';
import styles from './News.module.scss'; // Импортируйте ваши стили

interface NewsItem {
    title: string;
    date: {
        day: number;
        month: string;
        year: number;
    };
}

const ITEMS_PER_PAGE = 3;

const ExamplesList = ({ examples }: { examples: NewsItem[] }) => {
    const [currentPage, setCurrentPage] = useState(0);
    
    const totalPages = Math.ceil(examples.length / ITEMS_PER_PAGE);
    
    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentExamples = examples.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className={styles.container}>
            <h1>Новости</h1>
            <div className={styles.grid}>           
                {currentExamples.map((example, index) => (
                    <ExampleItem 
                        key={index} 
                        title={example.title} 
                        date={example.date} 
                    />
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrev} disabled={currentPage === 0}>Назад</button>
                <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Вперед</button>
            </div>
        </div>
    );
};

export default ExamplesList;