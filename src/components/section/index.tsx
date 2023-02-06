import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionFirst from "./components/SectionFirst";

const StyledMainSection = styled.div``;

const StyledSwiper = styled(Swiper)`
  height: 90vh;
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
`;
const Section = () => {
  return (
    <StyledMainSection>
      <StyledSwiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <StyledSwiperSlide>
          <SectionFirst />
        </StyledSwiperSlide>
        <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
      </StyledSwiper>
    </StyledMainSection>
  );
};

export default Section;
