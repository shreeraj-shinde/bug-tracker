import { Table } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
import BugsActions from "./BugsActions";

const BugsLoading = () => {
  const bugs = [1, 2, 3, 4, 5];
  return (
    <div>
      <BugsActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>
              <Skeleton />
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              <Skeleton />
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              <Skeleton />
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs.map((bug, idx) => (
            <Table.Row key={idx}>
              <Table.RowHeaderCell>
                <Skeleton />
                <div className="block md:hidden">
                  {" "}
                  <Skeleton />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BugsLoading;
