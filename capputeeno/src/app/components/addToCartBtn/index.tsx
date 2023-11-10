import React from "react";
import BagWhite from "../icons/bagWhite";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;

  padding: 10px 0;

  background-color: var(--brand-blue);
  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.5);

    filter: brightness(0.8);
  }

  span {
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: var(--shapes-light);
  }
`;

export default function AddToCartBtn() {
  return (
    <Container>
      <BagWhite />
      <span>ADICIONAR AO CARRINHO</span>
    </Container>
  );
}
