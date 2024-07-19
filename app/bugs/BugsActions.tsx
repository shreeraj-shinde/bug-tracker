import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BugsActions = () => {
  return (
    <div className="mb-5">
      <Link href={"/bugs/new"}>
        <Button>New Bug</Button>
      </Link>
    </div>
  );
};

export default BugsActions;
