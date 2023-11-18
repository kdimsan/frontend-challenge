"use client";

import React from "react";
import DefaultPageStyle from "../components/defaultPageStyle/defaultPageStyle";
import styled from "styled-components";
import BackButton from "../components/backButton/backButton";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductsInCartProps } from "@/types/productsInterface";
import { formatValue } from "@/utils/priceFormatter";
import ItemCard from "./itemCard";
import CartResume from "./cartResum";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    flex-direction: row;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-family: inherit;
      color: var(--text-dark-2);
    }
  }
`;

const CartContent = styled.div`
  width: 100%;
  > h2 {
    font-family: inherit;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: var(--text-dark-2);
  }

  > p {
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;

    margin-bottom: 24px;

    span {
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }
`;

export default function Cart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductsInCartProps[]>(
    "cart-items",
    []
  );

  const totalValue = (value: ProductsInCartProps[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const handleQuantity = (id: string, quantity: number) => {
    const newQuantity = value.map((item) => {
      if (item.id !== id) return item;

      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newQuantity);
  };

  const handleRemoveCartItem = (id: string) => {
    const newCartArray = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newCartArray);
  };

  const cartTotalValue = formatValue(totalValue(value));
  const unformattedTotalValue = totalValue(value);

  return (
    <DefaultPageStyle>
      <BackButton />
      <Container>
        <CartContent>
          <h2>SEU CARRINHO</h2>
          <p>
            Total ({value.length} produtos) <span>{cartTotalValue}</span>
          </p>
          <CartItems>
            {value.length === 0 && (
              <div>
                <h1>Seu carrinho vazio está vazio :(</h1>
              </div>
            )}
            {value.map((item) => (
              <ItemCard
                key={item.id}
                product={item}
                handleRemoveItem={() => handleRemoveCartItem(item.id)}
                handleQuantity={handleQuantity}
              />
            ))}
          </CartItems>
        </CartContent>
        <CartResume value={unformattedTotalValue} />
      </Container>
    </DefaultPageStyle>
  );
}
