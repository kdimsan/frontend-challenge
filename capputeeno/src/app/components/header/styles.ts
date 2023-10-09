"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const LogoHeader = styled.a`
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  color: var(--logo-color);
`;
