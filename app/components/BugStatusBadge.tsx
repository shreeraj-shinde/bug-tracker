import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Pending", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Solved", color: "green" },
};

const BugStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={StatusMap[status].color}>{StatusMap[status].label}</Badge>
  );
};

export default BugStatusBadge;
