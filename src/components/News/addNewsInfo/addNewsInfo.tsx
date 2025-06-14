'use client'

import { useState } from 'react'

export default function AddNewsForm() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    date: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setMessage('Новость успешно добавлена!')
      setForm({ title: '', content: '', date: '' })
    } else {
      setMessage('Ошибка при добавлении')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Заголовок" value={form.title} onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <textarea name="content" placeholder="Содержание" value={form.content} onChange={handleChange} required />
      <button type="submit">Добавить новость</button>
      {message && <p>{message}</p>}
    </form>
  )
}
