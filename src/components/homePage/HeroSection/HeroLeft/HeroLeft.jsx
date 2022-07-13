import React from "react";
import styled from "styled-components";
import { LinkText, Text, TitleText } from "../../../ui";
import HeroCTA from "./HeroCTA";
import Trusted from "./Trusted";

const LeftDiv = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    gap: 35px;
  }
`;

const HeroTitle = styled.h3`
  font-size: 60px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }
`;

const HeroText = styled.p`
  font-size: 22px;
  padding-right: 200px;

  @media screen and (max-width: 1024px) {
    padding-right: 0;
  }
`;

const TextHero = styled.p`
  font-size: 15px;
  font-weight: 700;

  span {
    background-color: ${(props) => props.theme.accent};
    padding: 5px 12px;
    color: ${(props) => props.theme.white};
    border-radius: 15px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;

    span {
      margin-right: 1px;
      padding: 3px 8px;
      font-size: 10px;
    }
  }
`;

const HeroLeft = () => {
  return (
    <>
      <LeftDiv>
        <TextHero>
          <span>NEW</span> Introducing the all-new Lazer Donations -{" "}
          <LinkText style={{ color: "blue" }} to="/">
            Read More
          </LinkText>
        </TextHero>
        <HeroTitle>Take your business global in 5 minutes</HeroTitle>
        <HeroText>
          Empower your business to accept payments globally, earn rewards and
          invest in crypto.
        </HeroText>
        <HeroCTA />
        <Trusted />
      </LeftDiv>
    </>
  );
};

export default HeroLeft;
