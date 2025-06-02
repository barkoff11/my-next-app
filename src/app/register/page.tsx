'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './RegisterForm.module.scss'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      router.push('/login')
    } else {
      const data = await res.json()
      setError(data.error || 'Ошибка регистрации')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            name="password"
            placeholder="Пароль"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  )
}
