"use client";

import React, { useState } from 'react';
import styles from './Examples.module.scss';
import Popup from '@/components/Pop-up/Pop-up';


const jsPDF = require("jspdf").jsPDF;


const Examples = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Текст, который хотим положить в PDF
  const pdfText = `Анализ состояния рынка автоматических выключателей, оценка объема рынка, анализ конкурентов, прогноз развития рынка, а также определение факторов, влияющих на рынок автоматических выключателей.`;

  const downloadPdf = () => {
    const doc = new jsPDF();

    // Добавляем заголовок
    doc.setFontSize(16);
    doc.text("Пример исследования", 10, 20);

    // Добавляем основной текст, с отступами по ширине страницы
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const maxLineWidth = pageWidth - margin * 2;

    // Метод splitTextToSize разбивает длинный текст на строки с переносами
    const lines = doc.splitTextToSize(pdfText, maxLineWidth);

    doc.setFontSize(12);
    doc.text(lines, margin, 30);

    // Сохраняем файл с названием example.pdf
    doc.save("example.pdf");
  };

  return (
    <div className={styles.container}>
      <h1>Примеры исследований</h1>

      <button className={styles.btn_prev}>
        <svg className={styles.hover}>
          <use xlinkHref={`/img/sprite.svg#left-active`}></use>
        </svg>
        <svg className={styles.unHover}>
          <use xlinkHref={`/img/sprite.svg#left`}></use>
        </svg>
      </button>

      <button className={styles.btn_next}>
        <svg className={styles.hover}>
          <use xlinkHref={`/img/sprite.svg#left-active`}></use>
        </svg>
        <svg className={styles.unHover}>
          <use xlinkHref={`/img/sprite.svg#left`}></use>
        </svg>
      </button>

      <div className={styles.wrapper}>
        <div className={styles.examples}>
          <h2>
            Исследование рынка автоматических выключателей на территории Московской области для ООО “Фирма”
          </h2>
          <a>25 марта 2020</a>
        </div>

        <div className={styles.scrollableContainer}>
          <div className={styles.scrollable}>
            {pdfText}
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.buttonOne} onClick={downloadPdf}>
              <span className={`${styles["btn-one-text"]} ${styles["btn-one-text--short"]}`}>
                Скачать
              </span>
              <span className={`${styles["btn-one-text"]} ${styles["btn-one-text--long"]}`}>
                Скачать пример
              </span>
            </button>

            <button className={styles.buttonTwo} onClick={openPopup}>
              Заказать исследование
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Popup closePopup={closePopup} />
      )}
    </div>
  );
};

export default Examples;
