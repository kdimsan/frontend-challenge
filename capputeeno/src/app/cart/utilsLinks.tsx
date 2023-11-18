import React from "react";
import styled from "styled-components";

const Container = styled.div`
  ul {
    li {
      display: flex;
      flex-direction: column;
      gap: 12px;

      list-style: none;

      a {
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: var(--text-dark);

        width: fit-content;
      }
    }
  }
`;

export default function UtilsLinks() {
  return (
    <Container>
      <ul>
        <li>
          <a href="">AJUDA</a>
        </li>
        <li>
          <a href="">REEMBOLSOS</a>
        </li>
        <li>
          <a href="">ENTREGAS E FRETES</a>
        </li>
        <li>
          <a href="">TROCAS E DEVOLUÇÕES</a>
        </li>
      </ul>
    </Container>
  );
}
