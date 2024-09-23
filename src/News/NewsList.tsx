'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import styles from './News.module.scss'; // Импортируйте ваши стили
import exampleData from './const';
import NewsItem from './NewsItem';


const ExamplesList = () => {
    return (
        <div className={styles.container}>
            <h1>Новости</h1>
            <Swiper
                modules={[Pagination]} // Подключаем модуль пагинации
                spaceBetween={30}       // Расстояние между слайдами
                pagination={{ clickable: true, el: '.custom-pagination' }}
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
            <div className="custom-pagination"></div>
        </div>
    );
};

export default ExamplesList;