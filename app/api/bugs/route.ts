import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { bugSchema } from "@/app/validationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "User Unauthorized" }, { status: 401 });
  const body = await request.json();

  const validation = bugSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBug = await prisma.bug.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newBug, { status: 201 });
}
