"use client";

import DefaultPageStyle from "./components/defaultPageStyle/defaultPageStyle";
import Filters from "./components/filters";
import ProductsList from "./components/productsList";
import styled from "styled-components";

const PageMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <DefaultPageStyle>
      <PageMain>
        <Filters />
        <ProductsList />
      </PageMain>
    </DefaultPageStyle>
  );
}
