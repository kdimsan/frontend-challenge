"use client";
import { useProducts } from "@/hooks/useProducts";
import React from "react";
import ProductCard from "./productCard";
import styled from "styled-components";

export default function ProductsList() {
  const { data } = useProducts();

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    justify-content: center;
    gap: 32px;

    margin: 32px;
  `;

  return (
    <Container>
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
}
