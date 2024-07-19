import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import BugForm from "../../_components/BugForm";

const EditBugPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({ where: { id: Number(params.id) } });

  if (!bug) notFound();

  return <BugForm bug={bug} />;
};

export default EditBugPage;
