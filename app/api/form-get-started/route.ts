import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
  try {
    const { projectType, name, email, phone, budget, description } = await req.json();
    console.log(budget);
    

    const newProject = await prisma.project.create({
      data: {
        projectType,
        name,
        email,
        phone,
        budget,
        description
      }
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
