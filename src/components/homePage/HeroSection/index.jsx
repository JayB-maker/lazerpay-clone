import React from "react";
// import styled from "styled-components";
import { Container } from "../../ui";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

// const InnerHeroContainer = styled.div`
//   width: 89%;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 1024px) {
//     width: 60%;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 50px;
//   }

//   @media screen and (max-width: 600px) {
//     width: 100%;
//     padding: 0 16px;
//     flex-direction: column;
//     gap: 50px;
//   }
// `;

const HeroSection = () => {
  return (
    <>
      <Container display="block" width="100%" margin="50px auto" smmargin="0">
        <Container
          mdpadding="100px 0 50px"
          smpadding="100px 0 50px"
          display="block"
          bg="#f4f3ee"
          margin="0 auto"
          padding="50px 0"
          maxwidth="1408px"
          width="98%"
          mdwidth="100vw"
          smwidth="100vw"
          radius="5px"
        >
          <Container
            width="90%"
            margin="0 auto"
            smmargin="0 auto"
            display="flex"
            alignitems="center"
            mdmargin="0 auto"
            mdwidth="95%"
            mdflexdirection="column"
            mdjustifycontent="center"
            mdgap="50px"
            smgap="50px"
          >
            <HeroLeft />
            <HeroRight />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default HeroSection;
