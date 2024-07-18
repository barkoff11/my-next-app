import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.logo}>Элемент.ОP</div>
            <ul className={styles['nav-list']}>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Решения</a></li>
                <li><a href="#">Методы</a></li>
                <li><a href="#">Пример исследований</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            
        </div> 
        <div className={styles.circle}></div>
    </div>
);
}

export default Header;