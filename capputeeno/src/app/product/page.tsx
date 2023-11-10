"use client";
import React from "react";
import DefaultPageStyle from "../components/defaultPageStyle/defaultPageStyle";
import BackButton from "../components/backButton/backButton";
import styled from "styled-components";
import { useProduct } from "@/hooks/useProduct";
import { formatValue } from "./../../utils/priceFormatter";
import AddToCartBtn from "../components/addToCartBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 32px;

    > img {
      max-width: 400px;
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    section {
      align-items: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    section {
      flex-direction: row;

      > img {
        max-width: 640px;
        width: 50%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    > span {
      font-family: inherit;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: var(--text-dark-2);
    }

    > h2 {
      font-family: inherit;
      font-size: 32px;
      font-weight: 300;
      line-height: 48px;
      color: var(--text-dark-2);
    }

    > h3 {
      font-family: inherit;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      color: var(--shapes-dark);

      margin-bottom: 24px;
    }

    > p {
      font-family: inherit;
      font-size: 12px;
      font-weight: 400;
      color: var(--text-dark-2);
    }
    > p:nth-of-type(2) {
      margin-bottom: 40px;
    }

    > h4 {
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: var(--text-dark-2);

      margin: 58px 0 8px;
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  return (
    <DefaultPageStyle>
      <Container>
        <BackButton navigate={"/"} />
        <section>
          <img src={data?.image_url} alt={`Imagem do produto ${data?.name}`} />
          <TextContent>
            <div>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <h3>{formatValue(data?.price_in_cents ?? 0)}</h3>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <h4>DESCRIÇÃO</h4>
              <p>{data?.description}</p>
            </div>

            <div>
              <AddToCartBtn />
            </div>
          </TextContent>
        </section>
      </Container>
    </DefaultPageStyle>
  );
}
