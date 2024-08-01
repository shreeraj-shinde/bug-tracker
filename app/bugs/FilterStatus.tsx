import { Select } from "@radix-ui/themes";
import React from "react";

const 

const FilterStatus = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by Status...." />
      <Select.Content>
        <Select.Item></Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default FilterStatus;
