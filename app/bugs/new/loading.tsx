import { Box } from "@radix-ui/themes";
import { Skeleton } from "../../components";

const AddNewNugLoading = async () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height={"15rem"} />
    </Box>
  );
};

export default AddNewNugLoading;
