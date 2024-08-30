"use client";

import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss'; // Импортируйте ваши стили

const Header: React.FC = () => {
    const BASE_PATH = process.env.REACT_APP_BASE_PATH;
    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (isMenuActive && !target.closest(`.${styles.menu}`) && !target.closest(`.${styles.menu_active}`)) {
            setMenuActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuActive]);

    return (
        <div className={styles.container}>
            <div className={`${styles.logo} ${isMenuActive ? styles.logo_active : ''}`}>
            <svg>
            <use xlinkHref={`${BASE_PATH}/img/sprite.svg#header__logo`}></use>
              </svg>
            </div>
                 <nav className={`${isMenuActive ? styles.blur : styles.navigation}`}>
                    <ul className={`${styles.menu} ${isMenuActive ? styles.menu_active : ''}`}>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Решения</a></li>
                        <li><a href="#">Методы</a></li>
                        <li><a href="#">Примеры исследований</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                <div className={`${styles.burger_icon} ${isMenuActive ? styles.burger_active : ''}`} onClick={toggleMenu}>
                    <svg>
                        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#header__menu-open`}></use>
                    </svg>
                </div>
                </nav>
                <div className={styles.circle}></div>
        </div>
    );
};

export default Header;
