import React from "react";
import styled from "styled-components";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

const Body = styled.div`
  width: 100%;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;
const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  margin: 0 auto;
  max-width: 1408px;
  width: 98%;
  padding: 50px 0;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    border-radius: 0;
    padding: 100px 0 50px;
  }
`;
const InnerHeroContainer = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 16px;
    flex-direction: column;
    gap: 50px;
  }
`;

const HeroSection = () => {
  return (
    <>
      <Body>
        <HeroContainer>
          <InnerHeroContainer>
            <HeroLeft />
            <HeroRight />
          </InnerHeroContainer>
        </HeroContainer>
      </Body>
    </>
  );
};

export default HeroSection;
