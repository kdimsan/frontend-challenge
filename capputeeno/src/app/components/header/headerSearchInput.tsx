"use client";
import { styled } from "styled-components";
import { SearchIcon } from "../icons/searchIcon";
import { InputHTMLAttributes, useEffect, useState, useRef } from "react";
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
  position: relative;

  width: 100%;

  border-radius: 8px;
  border: none;

  background: var(--bg-secondary);

  font-size: 10px;
  font-family: inherit;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-dark);

  @media (max-width: 424px) {
    position: absolute;
    top: -20px;

    transition: all 0.3s ease;
    transform: translateX(150%);

    &[data-search-is-open="true"] {
      transform: translateX(5%);
      top: -20px;
    }
  }

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openInput, setOpenInput] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpenInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div>
      {windowWidth < 425 && (
        <InputWithIcon ref={inputRef} onClick={() => setOpenInput(true)}>
          <SearchIcon />

          <PrimaryInput
            {...props}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-search-is-open={openInput}
          />
        </InputWithIcon>
      )}

      {windowWidth >= 425 && (
        <InputWithIcon>
          <PrimaryInput
            {...props}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon />
        </InputWithIcon>
      )}
    </div>
  );
}
