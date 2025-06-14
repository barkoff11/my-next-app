import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { title, date } = body

  if (!title || !date) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 })
  }

  try {
    const news = await prisma.news.create({
      data: {
        title,
        date: new Date(date),
      },
    })

    return NextResponse.json(news, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Ошибка при добавлении' }, { status: 500 })
  }
}
