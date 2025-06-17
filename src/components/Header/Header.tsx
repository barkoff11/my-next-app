'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isMenuActive && !target.closest(`.${styles.menu}`) && !target.closest(`.${styles.burger_icon}`)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuActive]);

  useEffect(() => {
    document.body.style.overflow = isMenuActive ? 'hidden' : 'auto';
  }, [isMenuActive]);

  return (
    <div className={styles.container}>
      <div className={`${styles.logo} ${isMenuActive ? styles.logo_active : ''}`} onClick={toggleMenu}>
        <svg className={`${styles.logoUnActive} ${isMenuActive ? styles.hidden : ''}`}>
          <use xlinkHref={`/img/sprite.svg#header__logo`}></use>
        </svg>

        <svg className={`${styles.logoActive} ${isMenuActive ? '' : styles.hidden}`}>
          <use xlinkHref={`/img/sprite.svg#elementor-logo--menu`}></use>
        </svg>
      </div>

      {isMenuActive && <div className={styles.blur} onClick={toggleMenu} />}

      <nav className={styles.navigation}>
        <ul className={`${styles.menu} ${isMenuActive ? styles.menu_active : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>О компании</a></li>
          <li><a href="#solutions" onClick={toggleMenu}>Решения</a></li>
          <li><a href="#methods" onClick={toggleMenu}>Методы</a></li>
          <li><a href="#examples" onClick={toggleMenu}>Примеры исследований</a></li>
          <li><a href="#news" onClick={toggleMenu}>Новости</a></li>
          <li><a href="#contacts" onClick={toggleMenu}>Контакты</a></li>
        </ul>
        <div className={`${styles.burger_icon} ${isMenuActive ? styles.burger_active : ''}`} onClick={toggleMenu}>
          <svg className={styles.openMenu}>
            <use xlinkHref={`/img/sprite.svg#header__menu-open`}></use>
          </svg>
          <svg className={styles.closedMenu}>
            <use xlinkHref={`/img/sprite.svg#menu-closed`}></use>
          </svg>
        </div>
      </nav>

      <div className={styles.circle}></div>
    </div>
  );
};

export default Header;
