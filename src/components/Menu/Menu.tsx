"use client";

import styles from './Menu.module.scss'; // Импортируйте ваши стили

const Menu = () => {
    

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Элемент.ОP</div>
                <nav className={styles.blur}>
                    <ul className={styles.menu}>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Решения</a></li>
                        <li><a href="#">Методы</a></li>
                        <li><a href="#">Пример исследований</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <div className={styles['burger_icon']}>
                        <span>

                        </span>
                    </div>
                </nav>
        </div>
    );
};

export default Menu;