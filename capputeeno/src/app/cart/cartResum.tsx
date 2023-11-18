import { formatValue } from "@/utils/priceFormatter";
import React, { useState } from "react";
import styled from "styled-components";
import UtilsLinks from "./utilsLinks";

interface CartResumeProps {
  value: number;
}

const Container = styled.div<{ emptyValue: boolean }>`
  display: ${(props) => (props.emptyValue ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;

  min-width: 100%;
  min-height: 500px;
  max-height: 700px;

  padding: 16px 24px;

  background-color: #fff;
  border-radius: 4px;

  h2 {
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    color: var(--text-dark-2);

    margin-bottom: 30px;
  }

  button {
    width: 100%;

    padding: 8px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--shapes-light);

    border: none;
    border-radius: 4px;
    background-color: var(--others-green);

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 3px 3px 11px rgba(0, 0, 0, 0.4);
      filter: brightness(0.9);
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    padding: 12px 16px;

    min-width: 250px;
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    min-width: 350px;
    min-height: 500px;
    max-height: 700px;

    padding: 16px 24px;
  }
`;

const CartResumeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-bottom: 14px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-dark-2);
  }

  h4 {
    margin-bottom: 40px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: var(--text-dark-2);
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    span {
      margin-bottom: 14px;

      font-size: 14px;
      line-height: 24px;
    }

    h4 {
      margin-bottom: 40px;

      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--shapes);

  margin: 12px 0 8px;
`;

export default function CartResume({ value }: CartResumeProps) {
  const calculateFinalPrice = () => {
    if (value <= 90000) {
      const total = value + 4000;
      return formatValue(total);
    }
    return formatValue(value);
  };

  const finalPrice = calculateFinalPrice();

  return (
    <Container emptyValue={value === 0 ? false : true}>
      <div>
        <h2>RESUMO DO PEDIDO</h2>
        <CartResumeContent>
          <span>Subtotal de produtos</span>
          <span>{formatValue(value)}</span>
        </CartResumeContent>

        <CartResumeContent>
          <span>Entrega</span>

          <span>{value >= 90000 ? "Grátis" : `${formatValue(4000)}`}</span>
        </CartResumeContent>

        <Divider></Divider>

        <CartResumeContent>
          <h4>Total</h4>
          <h4>{finalPrice}</h4>
        </CartResumeContent>

        <button>FINALIZAR A COMPRA</button>
      </div>

      <UtilsLinks />
    </Container>
  );
}
