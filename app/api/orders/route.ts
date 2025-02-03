import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const orders = await prisma.order.findMany({
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();
  const order = await prisma.order.create({
    data: {
      amount: body.amount,
      description: body.description,
      client: {
        connectOrCreate: {
          where: { id: body.clientId },
          create: {
            name: body.clientName || "Неизвестный клиент",
            email: body.clientEmail || "unknown@example.com",
            phone_1: body.clientPhone || "0000000000",
          },
        },
      },
    },
    include: {
      client: { select: { name: true } },
    },
  });

  return NextResponse.json(order);
}
