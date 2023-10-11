"use client";
import React from "react";
import FiltersByType from "./filtersByType";
import { FiltersByPriority } from "./filtersByPriority";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;
export default function Filters() {
  return (
    <Container>
      <FiltersByType />
      <FiltersByPriority />
    </Container>
  );
}
