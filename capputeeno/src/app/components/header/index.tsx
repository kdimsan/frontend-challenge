import { HeaderContainer, LogoHeader } from "./styles";
import React from "react";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithIcon } from "./headerSearchInput";
import CartItem from "../../cart/cartItem";

const sairaStencil = Saira_Stencil_One({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <HeaderContainer>
      <LogoHeader href="/" className={sairaStencil.className}>
        Capputeeno
      </LogoHeader>
      <div>
        <PrimaryInputWithIcon placeholder="Procurando por algo específico?" />
        <CartItem />
      </div>
    </HeaderContainer>
  );
}
