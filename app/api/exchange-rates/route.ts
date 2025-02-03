import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const rates = await prisma.exchangeRate.findMany();
  return NextResponse.json(rates);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { currency, rate } = body;

  const updatedRate = await prisma.exchangeRate.upsert({
    where: { currency },
    update: { rate },
    create: { currency, rate },
  });

  return NextResponse.json(updatedRate);
}