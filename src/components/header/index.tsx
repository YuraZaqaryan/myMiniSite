import React from "react";
import { StyledHeader, StyledHeaderContent } from "./styles";
import { navbar } from "./data/navbar";
import {
  HeaderMain,
  HeaderNavBar,
  HeaderNavbarList,
  HeaderNavBarItem,
} from "./components";

import { Logo } from "../../image";
const Header = () => {
  return (
    <StyledHeader>
      <HeaderMain>
        <img src={Logo} alt={"logo"} />
        <HeaderNavBar>
          <HeaderNavbarList>
            {navbar.map((item) => (
              <HeaderNavBarItem key={item.id} title={item.title} />
            ))}
          </HeaderNavbarList>
        </HeaderNavBar>
      </HeaderMain>
    </StyledHeader>
  );
};

export default Header;
