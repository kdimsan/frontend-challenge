"use client";
import React from "react";
import { CartIcon } from "../components/icons/cartIcon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

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
  const { value } = useLocalStorage("cart-items", []);

  const router = useRouter();

  const handleCartPage = () => {
    router.push("/cart");
  };

  return (
    <Container onClick={handleCartPage}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
