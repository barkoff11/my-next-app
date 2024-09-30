"use client";

import React, { useEffect, useState } from 'react';
import styles from './AssessmentOfBrand.module.scss';
import { menuItems } from './constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

const AssessmentOfBrand = () => {
    const [selectedText, setSelectedText] = useState<React.ReactNode>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedId, setSelectedId]= useState('');

    const BASE_PATH = process.env.REACT_APP_BASE_PATH;

    const handleClick = (id: string, label: React.ReactNode) => {
        setSelectedText(label);
        setSelectedId(id);
        console.log(id);
    };

    // Переключение на предыдущий элемент
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
        );
    };

    // Переключение на следующий элемент
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Обновляем selectedText при изменении currentIndex
    useEffect(() => {
        setSelectedText(menuItems[currentIndex].label);
    }, [currentIndex]);

    useEffect(() => {
        setSelectedId(menuItems[currentIndex].id);
    }, [currentIndex]);

    return (
        <div className={styles.container}>
            <>
                <button className={styles['btn_prev']} onClick={handlePrev}>
                    <svg className={styles.hover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left-active`}></use>
                    </svg>
                    <svg className={styles.unHover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left`}></use>
                    </svg>
                </button>
                <button className={styles['btn_next']} onClick={handleNext}>
                    <svg className={styles.hover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left-active`}></use>
                    </svg>
                    <svg className={styles.unHover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left`}></use>
                    </svg>
                </button>
            </>
            <div className={styles.warp}>
                <h1>{selectedId}</h1>
                <div className={styles.scrollable}>
                    <span>{selectedText}</span>
                </div>
                <button className={styles.buttonOne}>Заказать исследование</button>
            </div>

            <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleClick(item.id, item.label)}>
                        <a>{String(index + 1).padStart(2, '0')}</a>
                        {item.id}
                    </li>
                ))}
            </ul>

            <div className={styles.menuTwo}>
            <Swiper
    modules={[Pagination, Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true, el: '.custom-paginations' }}
    navigation={{
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    }}
>
{menuItems.map((item, index) => (
        <SwiperSlide key={index}>
            <li onClick={() => handleClick(item.id, item.label)}>
                <a>{String(index + 1).padStart(2, '0')}</a> {item.id}
            </li>
        </SwiperSlide>
    ))}
</Swiper>
            <div className="custom-paginations"></div>
            </div>
        </div>
    );
};

export default AssessmentOfBrand;
