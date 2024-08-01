import { BugStatusBadge } from "@/app/components";
import { Bug } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const ShowBugDetails = ({ bug }: { bug: Bug }) => {
  return (
    <>
      <Heading>{bug.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <BugStatusBadge status={bug.status} />
        <Text>{bug.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full mt-5">
        <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default ShowBugDetails;
