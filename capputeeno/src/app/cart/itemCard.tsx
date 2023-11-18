import { ProductsInCartProps } from "@/types/productsInterface";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import TrashCan from "../components/icons/trashCan";
import { formatValue } from "@/utils/priceFormatter";

interface ItemCardProps {
  product: ProductsInCartProps;
  handleRemoveItem: () => void;
  handleQuantity(id: string, quantity: number): void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  height: 180px;

  width: 100%;

  background-color: #fff;
  border-radius: 8px;

  img {
    width: 50%;
    height: 100%;

    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  button {
    position: absolute;
    top: 5px;
    right: 4px;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    img {
      width: 256px;
    }

    button {
      top: 8px;
      right: 10px;
    }
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    min-height: 211px;
    gap: 30px;

    button {
      top: 16px;
      right: 16px;
    }
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px 16px 16px 0;

  > h2 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--text-dark-2);

    margin-bottom: 6px;
  }

  p {
    font-family: inherit;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    color: var(--text-dark-2);
    text-align: justify;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;

    margin-bottom: 18px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    select {
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;

      color: var(--text-dark);

      padding: 6px;

      border: 1px solid var(--text-dark-3);
      border-radius: 8px;
      background-color: var(--bg-secodnary);
    }

    h4 {
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    > div {
      select {
        font-size: 16px;

        padding: 8px 12px;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    padding: 16px 24px 24px 0;

    h2 {
      font-size: 20px;
      line-height: 30px;

      margin-bottom: 12px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
      line-height: 18px;

      margin-bottom: 25px;
    }

    > div {
      h4 {
        font-size: 16px;
      }
    }
  }
`;

export default function ItemCard({
  product,
  handleRemoveItem,
  handleQuantity,
}: ItemCardProps) {
  const handleChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    handleQuantity(product.id, Number(e.target.value));
  };

  const option = [];

  for (let i = 0; i <= 10; i++) {
    option.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <Container>
      <button onClick={handleRemoveItem}>
        <TrashCan />
      </button>
      <img src={product.image_url} alt={`Imagem do produto ${product.name}`} />
      <ProductInfo>
        <h2>{product.name}</h2>
        <p>{product.description} </p>
        <div>
          <select value={product.quantity} onChange={handleChangeQuantity}>
            {option}
          </select>
          <h4>{formatValue(product.price_in_cents)}</h4>
        </div>
      </ProductInfo>
    </Container>
  );
}
