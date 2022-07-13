import React from "react";
import styled from "styled-components";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

const Body = styled.div`
  width: 100vw;
`;
const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  margin: 0 auto;
  width: 98%;
  padding: 50px 0;
  border-radius: 5px;
`;
const InnerHeroContainer = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
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
