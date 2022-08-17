import React from "react";
import styled from "styled-components";

const RightDiv = styled.div`
  flex: 4;
`;

const HeroImage = styled.img`
  width: 100%;

  //   @media screen and (max-width: 1024px) {
  //     width: 100%;
  //   }
  //   @media screen and (max-width: 600px) {
  //     width: 100%;
  //   }
`;

const HeroRight = () => {
  return (
    <>
      <RightDiv>
        <HeroImage src="assets/home.gif" alt="home"></HeroImage>
      </RightDiv>
    </>
  );
};

export default HeroRight;
