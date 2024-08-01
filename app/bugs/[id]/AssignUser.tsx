"use client";
import Skeleton from "@/app/components/Skeleton";
import { Bug, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssignUser = async ({ bug }: { bug: Bug }) => {
  const { data: users, error, isLoading } = useUsers();

  const assignUser = async (userId: string) => {
    try {
      if (userId === "null")
        return await axios.patch(`/api/bugs/${bug.id}`, {
          assignedToUserId: null,
        });
      else
        return await axios.patch(`/api/bugs/${bug.id}`, {
          assignedToUserId: userId,
        });
    } catch (error) {
      toast.error("Something unexpected has Occured");
    }
  };

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={bug.assignedToUserId || "null"}
        onValueChange={(userId) => assignUser(userId)}
      >
        <Select.Trigger placeholder="Assign User" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value={"null"}>Unassign</Select.Item>
            {users?.map((user) => (
              <Select.Item value={user.id} key={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["Users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
  });
};

export default AssignUser;
