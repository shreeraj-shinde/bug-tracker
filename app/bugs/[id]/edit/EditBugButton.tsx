import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditBugButton = ({ bugId }: { bugId: number }) => {
  return (
    <>
      <Button>
        <Link href={`/bugs/${bugId}/edit`}> Edit Bug</Link>
        <Pencil2Icon />
      </Button>
    </>
  );
};

export default EditBugButton;
