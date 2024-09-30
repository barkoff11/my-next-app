'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './News.module.scss'; // Импортируйте ваши стили
import './paginator.scss';
import exampleData from './const';
import NewsItem from './NewsItem';


const ExamplesList = () => {

    const BASE_PATH = process.env.REACT_APP_BASE_PATH;

    return (
        <div className={styles.container}>
            <h1>Новости</h1>
                <button className={styles['btn_prev']} id='btn_prev'>
                    <svg className={styles.hover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left-active`}></use>
                    </svg>
                    <svg className={styles.unHover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left`}></use>
                    </svg>
                </button>
                <button className={styles['btn_next']} id='btn_next'>
                    <svg className={styles.hover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left-active`}></use>
                    </svg>
                    <svg className={styles.unHover}>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#left`}></use>
                    </svg>
                </button>
            <Swiper
                modules={[Pagination, Navigation]} // Подключаем модуль пагинации
                spaceBetween={30}       // Расстояние между слайдами
                pagination={{ clickable: true, el: '.custom-paginationss' }}
                navigation={{
                    nextEl: '#btn_next',
                    prevEl: '#btn_prev',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                    },
                    1020: {
                        slidesPerView: 3,
                    },
                    1900: {
                        slidesPerView: 4,
                    },
                }}      // Показывать по одному слайду
            >
                {exampleData.map((newsItem, index) => (
                    <SwiperSlide key={index}>
                        <NewsItem date={newsItem.date} title={newsItem.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-paginationss"></div>
        </div>
    );
};

export default ExamplesList;