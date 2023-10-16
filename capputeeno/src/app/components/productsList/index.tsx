"use client";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

export default function ProductsList() {
  const { data } = useProducts();

  console.log(data);

  return <div>Maped products</div>;
}
