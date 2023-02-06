import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledNavBarList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 320px;
`;
const HeaderNavbarList: FC<PropsWithChildren> = ({ children }) => (
  <StyledNavBarList>{children}</StyledNavBarList>
);

export default HeaderNavbarList;
