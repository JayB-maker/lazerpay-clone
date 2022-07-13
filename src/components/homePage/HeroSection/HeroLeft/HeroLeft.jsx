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
    width: 70%;
    gap: 35px;
  }
  @media screen and (max-width: 600px) {
    width: unset;
    gap: 35px;
  }
`;

const HeroTitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
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
    font-size: 16px;
    padding-right: 0;
    margin-top: -10px;
  }
`;

const TextHero = styled.p`
  font-size: 15px;
  font-weight: 400;

  span:nth-child(1) {
    background-color: ${(props) => props.theme.accent};
    padding: 5px 12px;
    color: ${(props) => props.theme.white};
    border-radius: 15px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    display: flex;
    flex-direction: column;

    span:nth-child(1) {
      width: fit-content;
      margin-right: -8px;
      padding: 3px 8px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    display: unset;

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
          <span>NEW</span>{" "}
          <span>
            Introducing the all-new Lazer Donations -{" "}
            <LinkText style={{ color: "#125bc9" }} to="/">
              Read More
            </LinkText>
          </span>
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
