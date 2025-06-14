import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { date: 'desc' },
    })
    return NextResponse.json(news)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Ошибка загрузки' }, { status: 500 })
  }
}
