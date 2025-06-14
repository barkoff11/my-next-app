'use client'

import React, { useState, useEffect } from 'react';
import styles from './Pop-up.module.scss';

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    agreed: false,
  })

  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement; 
    const { name, value, type, checked } = target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('Сообщение отправлено!')
        setForm({ name: '', email: '', message: '', agreed: false })
      } else {
        const data = await res.json()
        setStatus(data.error || 'Ошибка при отправке')
      }
    } catch (err) {
      console.error(err)
      setStatus('Ошибка сервера')
    }
  }

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.overlay} onClick={closePopup}></div>

      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={closePopup}>
          &times;
        </button>

        <h2>Напишите нам</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.name}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className={styles.email}
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            className={styles.message}
            name="message"
            placeholder="Сообщение"
            value={form.message}
            onChange={handleChange}
            required
          />

          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="agreed"
              className={styles.checkboxInput}
              checked={form.agreed}
              onChange={handleChange}
              required
            />
            <span>
              Я согласен с <a href="#">условиями политики конфиденциальности</a>
            </span>
          </label>

          <button className={styles.buttonOne} type="submit">Отправить</button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Popup;
