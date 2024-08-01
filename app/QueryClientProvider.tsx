"use client";
import React, { PropsWithChildren } from "react";

import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};

export default QueryClientProvider;
