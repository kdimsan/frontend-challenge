import { FilterContext } from "@/contexts/filterContexts";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import React from "react";
import styled from "styled-components";

interface FiltersByTypeProps {
  active: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;
`;

const FilterItem = styled.li<FiltersByTypeProps>`
  font-family: inherit;
  font-size: 22px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: ${(props) =>
    props.active ? "var(--selected-filter-text)" : "var(--text-dark)"};

  border-bottom: ${(props) =>
    props.active ? "4px solid var(--orange-low)" : ""};
  list-style: none;

  cursor: pointer;
`;

export default function FiltersByType() {
  const { type, setType } = useFilter();

  const handleActiveFilter = (value: FilterType) => {
    setType(value);
  };

  return (
    <Container>
      <FilterItem
        active={type === FilterType.ALL}
        onClick={() => handleActiveFilter(FilterType.ALL)}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem
        active={type === FilterType.SHIRT}
        onClick={() => handleActiveFilter(FilterType.SHIRT)}
      >
        CAMISETAS
      </FilterItem>
      <FilterItem
        active={type === FilterType.MUG}
        onClick={() => handleActiveFilter(FilterType.MUG)}
      >
        CANECAS
      </FilterItem>
    </Container>
  );
}
