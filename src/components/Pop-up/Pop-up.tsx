import React, { useEffect } from 'react';
import styles from './Pop-up.module.scss';

interface PopupProps {
  closePopup: () => void; 
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={styles.popupWrapper}>
      {/* Overlay, который закроет попап при клике */}
      <div className={styles.overlay} onClick={closePopup}></div>

      {/* Сам попап */}
      <div className={styles.popup}>
        {/* Кнопка закрытия попапа */}
        <button className={styles.closeBtn} onClick={closePopup}>
          &times;
        </button>

        <h2>Напишите нам</h2>
        <form className={styles.form}>
          <input className={styles.name} type="text" id="name" placeholder="Ваше имя" />

          <input className={styles.email} type="email" id="email" placeholder="Ваш e-mail" />

          <textarea className={styles.message} id="message" placeholder="Сообщение"></textarea>

          <button className={styles.buttonOne} type="submit">Отправить</button>

          <label className={styles.checkboxContainer}>
            <input type="checkbox" id="agree" className={styles.checkboxInput} />
            <span>
              Я согласен с <a href="#">условиями политики конфиденциальности</a>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Popup;
