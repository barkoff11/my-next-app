import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' // путь к твоему Prisma клиенту

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, agreed } = await req.json()

    if (!name || !email || !message || agreed !== true) {
      return NextResponse.json({ error: 'Все поля обязательны и согласие обязательно' }, { status: 400 })
    }

    const newRequest = await prisma.contactRequest.create({
      data: { name, email, message, agreed }
    })

    return NextResponse.json(newRequest)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
