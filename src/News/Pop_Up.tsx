import React, { useEffect, useState } from 'react';
import styles from './PopUp.module.scss';
import exampleData from './const';

interface PopupProps {
  closePopup: () => void; 
  currentIndex: number;  // Передаем текущий индекс выбранного элемента
}

const Pop_Up: React.FC<PopupProps> = ({ closePopup, currentIndex }) => {

  const [selectedText, setSelectedText] = useState<string>(''); // Для текста статьи
  const [selectedTitle, setSelectedTitle] = useState<string>(''); // Для заголовка статьи
  const [selectedDate, setSelectedDate] = useState<string>(''); // Для даты статьи

  useEffect(() => {
    // Когда компонент загружается, данные берутся на основе переданного currentIndex
    const selectedItem = exampleData[currentIndex];
    if (selectedItem) {
      setSelectedTitle(selectedItem.title);
      setSelectedDate(`${selectedItem.date.day} ${selectedItem.date.month} ${selectedItem.date.year}`);
      setSelectedText(selectedItem.content)
    }
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

        <h2>{selectedTitle}</h2> {/* Показываем заголовок статьи */}
        <p className={styles.date}>{selectedDate}</p> {/* Показываем дату статьи */}
        <div className={styles.scrollable}>
          <span>{selectedText}</span> {/* Здесь можно отображать полный текст статьи, если нужно */}
        </div>
      </div>
    </div>
  );
};

export default Pop_Up;
