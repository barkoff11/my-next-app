"use client";

import React, {useState} from 'react';
import styles from './AssessmentOfBrand.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';

const AssessmentOfBrand = () => {
    const [selectedText, setSelectedText] = useState('');

    const handleClick = (text: string) => {
        setSelectedText(text);
    };

    return (
        <div className={styles.container}>
            <div className={styles.warp}>
                <h1>Оценка узнаваемости, здоровья бренда</h1>
                <div className={styles.scrollable}>{selectedText}</div>
                <button className={styles.buttonOne}>Заказать исследование</button>
            </div>
            
           <ul className={styles.menu}>
                <li onClick={() => handleClick('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')}>
                    <a>01</a>Комплексные и прединвестиционные исследования рынка 
                </li>
                <li onClick={() => handleClick('Исследования целевой аудитории')}>
                    <a>02</a>Исследования целевой аудитории 
                </li>
                <li onClick={() => handleClick('Оценка узнаваемости, здоровья бренда')}>
                    <a>03</a>Оценка узнаваемости, здоровья бренда 
                </li>
                <li onClick={() => handleClick('Оценка удовлетворенности потребителей')}>
                    <a>04</a>Оценка удовлетворенности потребителей 
                </li>
                <li onClick={() => handleClick('Изучение восприятия продукта, услуги')}>
                    <a>05</a>Изучение восприятия продукта, услуги 
                </li>
            </ul>
            <div className={styles.menuTwo}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1.5}
                pagination={{ clickable: true, el: '.custom-paginations' }}
            >
                <SwiperSlide>
                    <li onClick={() => handleClick('Комплексные и прединвестиционные исследования рынка')}>
                    <a>01</a>Комплексные и прединвестиционные исследования рынка 
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li onClick={() => handleClick('Исследования целевой аудитории')}>
                    <a>02</a>Исследования целевой аудитории 
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li onClick={() => handleClick('Оценка узнаваемости, здоровья бренда')}>
                    <a>03</a>Оценка узнаваемости, здоровья бренда 
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li onClick={() => handleClick('Оценка удовлетворенности потребителей')}>
                    <a>04</a>Оценка удовлетворенности потребителей 
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li onClick={() => handleClick('Изучение восприятия продукта, услуги')}>
                    <a>05</a>Изучение восприятия продукта, услуги 
                    </li>
                </SwiperSlide>
            </Swiper>
            <div className="custom-paginations"></div>
            </div>
        </div>
    );
};

export default AssessmentOfBrand;