import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const IssueDetailsLoading = () => {
  return (
    <Box>
      <Skeleton />
      <Flex gap={"3"} my={"2"}>
        <Skeleton width={"3rem"} />
        <Skeleton width={"5rem"} />
      </Flex>
      <Card className="prose mt-5">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoading;
