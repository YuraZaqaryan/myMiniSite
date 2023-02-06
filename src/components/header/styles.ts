import { ConstantsHeader } from "../constants";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 10px;
  background-color: rgb(29 5 62);
  border-bottom-left-radius: ${ConstantsHeader.borderRadius};
  border-bottom-right-radius: ${ConstantsHeader.borderRadius};
`;
const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    transition: all 0.3s;
    height: 35px;
    &:hover {
      -webkit-filter: drop-shadow(5px 5px 5px #1a1aad);
      filter: drop-shadow(5px 5px 5px #1a1aad);
      transform: scale(1.1);
    }
  }
`;
const StyledHeaderNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { StyledHeader, StyledHeaderContent, StyledHeaderNavbar };
