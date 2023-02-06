import React from "react";
import styled from "styled-components";
import { ConstantsSection } from "../../constants";
const StyledFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
  width: 100%;
  height: 100%;
`;
const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 325px;
  height: 377px;
  & > img {
    position: absolute;
  }
`;
const StyledArrow = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 210px;
  color: #fff;
  white-space: nowrap;
  & > p {
    margin-left: 5px;
    & > span {
      color: ${ConstantsSection.specialtext};
    }
  }
`;
const StyledMainInfo = styled.div`
  display: flex;
  align-items: center;
  color: aliceblue;
  & > h2 {
    width: 45%;
    font-size: 2.5rem;
    & > p {
      font-size: 1.5rem;
    }
  }
`;
const StyledInfo = styled.div`
  color: #fff;
  width: 70%;
`;
const SectionFirst = () => {
  return (
    <StyledFirstSection>
      <StyledMainInfo>
        <StyledAvatar>
          <StyledArrow>
            <img
              src={require("./../../../image/Arrow.svg").default}
              width="91px"
              height="81px"
            />
            <p>
              Hello, I Am <span>Yura Zakaryan</span>
            </p>
          </StyledArrow>
          <img
            src={require("./../../../image/Gradient.svg").default}
            width="385px"
            height="431px"
          />
          <img
            src={require("./../../../image/avatar.svg").default}
            width="258px"
            height="259px"
          />
        </StyledAvatar>
        <h2>
          <p>
            I&apos;m a Software Engineer. <br />
          </p>
          Currently, I&apos;m a Software Engineer at Braint
        </h2>
      </StyledMainInfo>
      <StyledInfo>
        <h1>
          <p>
            I&apos;m a Software Engineer. <br />
          </p>
          Currently, I&apos;m a Software Engineer at Braint
        </h1>
        <p>
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </StyledInfo>
    </StyledFirstSection>
  );
};

export default SectionFirst;
