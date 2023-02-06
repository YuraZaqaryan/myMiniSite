import React, { FC, PropsWithChildren } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledMain, StyledMainContent } from "./styles";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
   
`;
const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledMain>
      <StyledMainContent>
        {children}
        <GlobalStyle />
      </StyledMainContent>
    </StyledMain>
  );
};

export default Main;
