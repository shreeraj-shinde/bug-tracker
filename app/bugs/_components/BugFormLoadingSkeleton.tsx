import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "../../components/Skeleton";

const BugFormLoadingSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height={"2rem"} />
      <br />
      <Skeleton height={"20rem"} />
    </Box>
  );
};

export default BugFormLoadingSkeleton;
