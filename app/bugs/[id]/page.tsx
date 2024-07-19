import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditBugButton from "./EditBugButton";
import ShowBugDetails from "./ShowBugDetails";

const BugDetails = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({ where: { id: Number(params.id) } });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gapY={"5"}>
      <Box>
        <ShowBugDetails bug={bug} />
      </Box>
      <Box>
        <EditBugButton bugId={bug.id} />
      </Box>
    </Grid>
  );
};

export default BugDetails;
