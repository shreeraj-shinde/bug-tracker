import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
import BugFormLoadingSkeleton from "../../_components/BugFormLoadingSkeleton";

const BugForm = dynamic(() => import("@/app/bugs/_components/BugForm"), {
  ssr: false,
  loading: () => <BugFormLoadingSkeleton />,
});

const EditBugPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({ where: { id: Number(params.id) } });

  if (!bug) notFound();

  return <BugForm bug={bug} />;
};

export default EditBugPage;
