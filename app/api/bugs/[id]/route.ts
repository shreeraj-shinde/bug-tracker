import authOptions from "@/app/auth/authOptions";
import { patchBugSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { message: "User not Authorized" },
      { status: 401 }
    );
  const body = await request.json();

  const validation = patchBugSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (body.assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: body.assignedToUserId },
    });

    if (!user)
      return NextResponse.json({ message: "Invalid User" }, { status: 404 });
  }

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
      assignedToUserId: body.assignedToUserId,
    },
  });

  return NextResponse.json(updatedBug, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { message: "User not Authorized" },
      { status: 401 }
    );

  ///get bug
  const bug = await prisma.bug.findUnique({
    where: { id: Number(params.id) },
  });

  ///if no bug return error
  if (!bug)
    return NextResponse.json({ message: "Bug not Found" }, { status: 404 });

  ///if bug found delete bug
  const deletedBug = await prisma.bug.delete({
    where: { id: Number(params.id) },
  });
  /// Return Response
  return NextResponse.json(
    { message: "Bug Deleted Sucessfully", deletedBug },
    { status: 200 }
  );
}
