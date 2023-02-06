import React, { FC } from "react";
import styled from "styled-components";
import { INavbar } from "../types";

const StyledHeaderNavBarItem = styled.li`
  font-family: ubuntu, sans-serif;
  font-weight: bold;
  color: #8780a8;
  cursor: pointer;
  list-style: none;
  font-size: 0.9rem;
  transition: all 0.2s;
  &:hover {
    color: #fff;
  }
  a {
  }
`;
const HeaderNavBarItem: FC<INavbar> = (props) => {
  const { title } = props;
  return (
    <StyledHeaderNavBarItem>
      <a href={"#"}>{title}</a>
    </StyledHeaderNavBarItem>
  );
};
export default HeaderNavBarItem;
