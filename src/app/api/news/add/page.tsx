'use client'

import { useState } from 'react'

export default function AddNewsPage() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/news/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date }),
    })

    const data = await res.json()
    setMessage(res.ok ? 'Новость добавлена' : data.error || 'Ошибка')
    if (res.ok) {
      setTitle('')
      setDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Добавить новость</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button type="submit">Добавить</button>
      {message && <p>{message}</p>}
    </form>
  )
}
