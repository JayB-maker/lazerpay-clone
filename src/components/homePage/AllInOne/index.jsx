import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Body = styled.div`
  max-width: 1408px;
  margin: 50px auto;
`;
const InnerContainer = styled.div`
  width: 88%;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  padding: 80px;
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-item: left;
    padding: 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 30px 15px;
    border-radius: 5px;
    width: 92%;
  }
`;

const LeftDiv = styled.div`
  flex: 1;
`;
const RigthDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    padding-right: 100px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`;
const Image = styled.img`
  width: 100%;
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
    font-size: 17px;
    line-height: 25px;
    padding-right: 20px;
  }
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 1024px) {
    font-size: 14.5px;
    line-height: 19px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
const LinkText = styled(Link)`
  color: ${(props) => props.theme.accent};
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.accent};
  padding: 8px 16px;
  max-width: 150px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  transition: 300ms;

  &:hover {
    gap: 13px;
  }
`;

const AllInOne = () => {
  return (
    <>
      <Body>
        <InnerContainer>
          <LeftDiv>
            <Image src="assets/all-in-one.png" alt="allInOne" />
          </LeftDiv>
          <RigthDiv>
            <TitleText>
              All-in-one Pricing to cater for your business growth
            </TitleText>
            <Text>
              Integrate the power of crypto for your business with our flexible
              pricing and low transaction fees, without breaking the bank.
            </Text>
            <LinkText to="/">
              View Pricing <i className="fa-solid fa-angle-right" />
            </LinkText>
          </RigthDiv>
        </InnerContainer>
      </Body>
    </>
  );
};

export default AllInOne;
