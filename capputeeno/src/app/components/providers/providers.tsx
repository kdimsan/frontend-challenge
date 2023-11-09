"use client";

import theme from "@/app/themes/theme";
import { FiltersContextProvider } from "@/contexts/filterContexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FiltersContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FiltersContextProvider>
    </QueryClientProvider>
  );
}
