import React from "react";
import dynamic from "next/dynamic";
import BugFormLoadingSkeleton from "../_components/BugFormLoadingSkeleton";
const BugForm = dynamic(() => import("../_components/BugForm"), {
  ssr: false,
  loading: () => <BugFormLoadingSkeleton />,
});

const NewBugPage = () => {
  return <BugForm />;
};

export default NewBugPage;
