import React, { FC, PropsWithChildren } from "react";
import { StyledHeaderContent } from "../styles";

const HeaderMain: FC<PropsWithChildren> = ({ children }) => {
  return <StyledHeaderContent>{children}</StyledHeaderContent>;
};

export default HeaderMain;
