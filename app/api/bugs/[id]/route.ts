import { bugSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = bugSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const bug = await prisma.bug.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!bug)
    return NextResponse.json({ error: "Bug not found" }, { status: 400 });

  const updatedBug = await prisma.bug.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedBug, { status: 200 });
}
