import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getStartedDetails } from "../../../data/data";

const Body = styled.div`
  max-width: 1408px;
  margin: 50px auto 50px;
`;
const InnerContainer = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 92%;
    padding: 0;
    flex-direction: column;
    gap: 50px;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 420px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 600px) {
    gap: 15px;
  }
`;

const TitleText = styled.h3`
  font-family: "space grotesk", sans-serif;
  font-size: 33px;
  line-height: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
    line-height: 35px;
  }
  @media screen and (max-width: 600px) {
    font-size: 23px;
    line-height: 25px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const LinkText = styled(Link)`
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.accent};
  padding: 12px 20px;
  max-width: 200px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  transition: 300ms;

  &:hover {
    gap: 15px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 180px;
  }
`;

const LinkTexts = styled(Link)`
  color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  font-weight:700;

  i{
    font-size:25px;
  }
  }

  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  width: 620px;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Card = styled.div`
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  i.icon {
    font-size: 35px;
    color: ${(props) => props.theme.accent};
  }
`;
const CardTitle = styled.h3`
  font-family: "space grotesk", sans-serif;
  font-size: 19px;
  line-height: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const CardText = styled.p`
  font-size: 14px;
  line-height: 19px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 19px;
  }
`;
const CardLink = styled(Link)`
  color: ${(props) => props.theme.accent};
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  align-items: center;
  transition: 300ms;
  width: fit-content;

  &:hover {
    gap: 18px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 19px;
  }
`;

const GetStarted = () => {
  return (
    <>
      <Body>
        <InnerContainer>
          <LeftDiv>
            <TitleText>Ready to get started?</TitleText>
            <Text>
              Take your business global with our crypto payment and business
              growth infrastructure.
            </Text>
            <CTA>
              <LinkText to="signup">
                Create an Account <i className="fa-solid fa-angle-right" />
              </LinkText>
              <LinkTexts to="/">
                <i className="fa-solid fa-circle-play" /> Play Video
              </LinkTexts>
            </CTA>
          </LeftDiv>
          <RightDiv>
            {getStartedDetails.map((item, key) => (
              <Card key={key} style={{ backgroundColor: `${item.background}` }}>
                <i className={item.icon} />
                <CardTitle>{item.subject}</CardTitle>
                <CardText>{item.details}</CardText>
                <CardLink to={item.link}>
                  {item.handle} <i className="fa-solid fa-arrow-right-long" />
                </CardLink>
              </Card>
            ))}
          </RightDiv>
        </InnerContainer>
      </Body>
    </>
  );
};

export default GetStarted;
