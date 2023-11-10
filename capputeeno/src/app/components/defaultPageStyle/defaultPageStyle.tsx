"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
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

interface DefaultPageStyleProps {
  children: ReactNode;
}

export default function DefaultPageStyle({ children }: DefaultPageStyleProps) {
  return <Container>{children}</Container>;
}
