"use client";

import Filters from "./components/filters";
import ProductsList from "./components/productsList";
import styled from "styled-components";

const PageMain = styled.main`
  display: flex;
  flex-direction: column;

  padding: 20px 14px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    padding: 28px 40px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    padding: 34px 140px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    <PageMain>
      <Filters />
      <ProductsList />
    </PageMain>
  );
}
