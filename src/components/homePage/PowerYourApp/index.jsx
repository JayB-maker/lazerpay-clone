import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { powerYourAppDetails } from "../../../data/data";

const Body = styled.div`
  max-width: 1408px;
  margin: 0 auto;
  padding-top: 100px;

  @media screen and (max-width: 1024px) {
    padding-top: 70px;
  }
`;

const InnerContainer = styled.div`
  width: 88%;
  margin: 0 auto 100px;

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TitleText = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 39px;
  line-height: 47px;
  font-weight: 700;
  padding-right: 500px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    font-size: 23px;
    line-height: 35px;
    margin-top: 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 80px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;

  i.icon {
    color: ${(props) => props.theme.accent};
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
`;
const CardTitle = styled.h3`
  font-size: 23px;
  line-height: 28px;
  font-family: "space grotesk", sans-serif;
  font-weight: 700;
`;
const CardText = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding-right: 50px;

  @media screen and (max-width: 1000px) {
    padding-right: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
const LinkText = styled(Link)`
  color: ${(props) => props.theme.black};
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 300ms;
  width: fit-content;

  &:hover {
    gap: 15px;
    color: ${(props) => props.theme.accent};
  }
`;

const PowerYourApp = () => {
  return (
    <>
      <Body>
        <InnerContainer>
          <Text>FOR DEVELOPERS</Text>
          <TitleText>
            Power your apps with our all-in-one crypto payment solutions
          </TitleText>
          <Wrapper>
            {powerYourAppDetails.map((item, key) => (
              <Card key={key}>
                <i className={item.icon} />
                <CardTitle>{item.subject}</CardTitle>
                <CardText>{item.details}</CardText>
                <LinkText to={item.link}>
                  {item.handle} <i className="fa-solid fa-arrow-right-long" />
                </LinkText>
              </Card>
            ))}
          </Wrapper>
        </InnerContainer>
      </Body>
    </>
  );
};

export default PowerYourApp;
