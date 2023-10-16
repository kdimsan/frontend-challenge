"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Filters from "./components/filters";
import ProductsList from "./components/productsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <Filters />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
