"use client";
import { styled } from "styled-components";
import { SearchIcon } from "./searchIcon";
import { InputHTMLAttributes } from "react";
import { useFilter } from "@/hooks/useFilter";

export const PrimaryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;

  width: 352px;

  border-radius: 8px;
  border: none;

  background: var(--bg-secondary);

  font-size: 14px;
  font-family: inherit;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-dark);
`;

const InputWithIcon = styled.div`
  position: relative;
  width: 352px;

  > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
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
