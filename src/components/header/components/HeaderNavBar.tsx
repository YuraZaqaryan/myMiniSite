import React, { FC, PropsWithChildren } from "react";
import { StyledHeaderNavbar } from "../styles";

const HeaderNavBar: FC<PropsWithChildren> = ({ children }) => {
  return <StyledHeaderNavbar>{children}</StyledHeaderNavbar>;
};

export default HeaderNavBar;
