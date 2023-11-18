"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 14px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    padding: 20px 40px;
    > div {
      gap: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    padding: 20px 140px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    padding: 20px 160px;
  }
`;

export const LogoHeader = styled.a`
  font-size: 22px;
  font-weight: 400;
  line-height: 60px;
  color: var(--logo-color);
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    font-size: 28px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    font-size: 30px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    font-size: 40px;
  }
`;
