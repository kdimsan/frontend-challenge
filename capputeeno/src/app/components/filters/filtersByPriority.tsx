import React, { useState } from "react";
import OpenFilterIcon from "./openPriorityFilter";
import styled from "styled-components";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/priorityType";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  > button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-dark);

    cursor: pointer;
  }
`;

const FilterContent = styled.ul`
  cursor: pointer;
  width: 176px;

  position: absolute;
  top: 100%;

  padding: 12px 16px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #fff;

  z-index: 999;

  list-style: none;

  > li {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
  }

  > li + li {
    margin-top: 4px;
  }
`;

export function FiltersByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { priority, setPriority } = useFilter();

  const handleOpen = () => setIsOpen(!isOpen);

  const handlePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <button onClick={handleOpen}>
        Orgarnizar por <OpenFilterIcon />
      </button>
      {isOpen && (
        <FilterContent>
          <li onClick={() => handlePriority(PriorityType.NEW)}>Novidades</li>
          <li onClick={() => handlePriority(PriorityType.HIGH_LOW)}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handlePriority(PriorityType.LOW_HIGH)}>
            Preço: Menor - Maior
          </li>
          <li onClick={() => handlePriority(PriorityType.POPULARITY)}>
            Mais vendidos
          </li>
        </FilterContent>
      )}
    </Container>
  );
}
