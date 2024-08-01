import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditBugButton from "./edit/EditBugButton";
import ShowBugDetails from "./ShowBugDetails";
import DeleteBugButton from "./edit/DeleteBugButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssignUser from "./AssignUser";

const BugDetails = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const bug = await prisma.bug.findUnique({ where: { id: Number(params.id) } });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
      <Box className="md:col-span-4">
        <ShowBugDetails bug={bug} />
      </Box>
      {session && (
        <Flex direction={"column"} gap={"4"}>
          <AssignUser bug={bug} />
          <EditBugButton bugId={bug.id} />
          <DeleteBugButton bugId={bug.id} />
        </Flex>
      )}
    </Grid>
  );
};

export default BugDetails;
