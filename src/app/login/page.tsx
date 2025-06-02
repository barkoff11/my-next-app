'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './LoginForm.module.scss'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      router.push('/')
    } else {
      const data = await res.json()
      setError(data.error || 'Ошибка входа')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Вход</h2>
        <form onSubmit={handleSubmit}>
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
            Войти
          </button>
        </form>
        <p className={styles.linkText}>
          Нет аккаунта?{' '}
          <Link href="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}
