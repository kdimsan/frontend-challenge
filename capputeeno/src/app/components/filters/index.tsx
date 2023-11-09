"use client";
import React from "react";
import FiltersByType from "./filtersByType";
import { FiltersByPriority } from "./filtersByPriority";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: space-between;

  gap: 10px;

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    flex-direction: row;
  }
`;
export default function Filters() {
  return (
    <Container>
      <FiltersByType />
      <FiltersByPriority />
    </Container>
  );
}
