"use client";

import React from "react";
import styled from "styled-components";
import BackIcon from "../icons/backIcon";
import { useRouter } from "next/navigation";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  margin-bottom: 22px;

  background-color: none;
  border: none;

  cursor: pointer;

  span {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: var(--text-secondary);
  }
`;

export default function BackButton() {
  const router = useRouter();

  const handlePreviousPage = () => {
    router.back();
  };
  return (
    <Container onClick={handlePreviousPage}>
      <BackIcon />
      <span>Voltar</span>
    </Container>
  );
}
