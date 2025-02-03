import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const order = await prisma.order.update({
    where: {
      id: params.id,
    },
    data: {
      status: body.status,
    },
  });
  return NextResponse.json(order);
}