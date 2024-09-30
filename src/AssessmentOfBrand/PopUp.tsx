import React, { useEffect, useState } from 'react';
import styles from './PopUp.module.scss';
import { menuItems } from './constant';

interface PopupProps {
  closePopup: () => void; 
  currentIndex: number;  // Передаем текущий индекс выбранного элемента
}

const PopUp: React.FC<PopupProps> = ({ closePopup, currentIndex }) => {

  const [selectedText, setSelectedText] = useState<string>(''); // Для текста статьи
  const [selectedId, setSelectedId] = useState<string>(''); // Для ID статьи

  useEffect(() => {
    // Когда компонент загружается, данные берутся на основе переданного currentIndex
    setSelectedText(menuItems[currentIndex]?.label || ''); 
    setSelectedId(menuItems[currentIndex]?.id || '');
  }, [currentIndex]);

  useEffect(() => {
    // Блокируем прокрутку страницы, когда модальное окно открыто
    document.body.classList.add('no-scroll');
    return () => {
      // Восстанавливаем прокрутку, когда модальное окно закрыто
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.overlay} onClick={closePopup}></div>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={closePopup}>
          &times;
        </button>

        <h2>{selectedId}</h2> {/* Показываем ID статьи */}
        <div className={styles.scrollable}>
          <span>{selectedText}</span> {/* Показываем текст статьи */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
