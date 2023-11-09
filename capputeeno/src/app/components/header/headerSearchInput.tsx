"use client";
import { styled } from "styled-components";
import { SearchIcon } from "./searchIcon";
import { InputHTMLAttributes } from "react";
import { useFilter } from "@/hooks/useFilter";

const InputWithIcon = styled.div`
  position: relative;
  width: 180px;

  > svg {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    width: 280px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
    width: 350px;
    > svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
    font-size: 40px;
  }
`;

const PrimaryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;

  width: 100%;

  border-radius: 8px;
  border: none;

  background: var(--bg-secondary);

  font-size: 10px;
  font-family: inherit;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-dark);

  @media (min-width: ${({ theme }) => theme.WSIZES.SM}) {
    font-size: 14px;
    padding: 10px 16px;
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.M}) {
  }

  @media (min-width: ${({ theme }) => theme.WSIZES.L}) {
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWithIcon(props: InputProps) {
  const { search, setSearch } = useFilter();
  return (
    <InputWithIcon>
      <PrimaryInput
        {...props}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon />
    </InputWithIcon>
  );
}
