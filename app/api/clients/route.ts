import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const clients = await prisma.clients.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return NextResponse.json(clients);
}

export async function POST(request: Request) {
  const body = await request.json();
  const client = await prisma.clients.create({
    data: {
      name: body.name || null,
      email: body.email || "",
      socialMedia: body.socialMedia || null,
      phone_1: body.phone || null,
    },
  });
  return NextResponse.json(client);
}
