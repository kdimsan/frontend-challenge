"use client";
import React from "react";
import { CartIcon } from "./cartIcon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;

  padding: 0 5px;

  font-size: 10px;

  color: #fff;

  border-radius: 100%;
  background: var(--exclude-color);

  margin-left: -10px;
`;

const Container = styled.div`
  position: relative;

  border: none;
  background: transparent;

  cursor: pointer;
`;

export default function CartItem() {
  const { value } = useLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
