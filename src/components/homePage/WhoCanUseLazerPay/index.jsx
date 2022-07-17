import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { whoCanUseLazerPayDetails } from "../../../data/data";

const Body = styled.div`
  max-width: 1408px;
  margin: 50px auto 50px;
`;
const InnerContainer = styled.div`
  width: 88%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};
  padding: 80px 0;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;
const Heading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Carousel = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  padding: 0 10px;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const Card = styled.div`
  flex-shrink: 0;
  width: 286px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 310px;
  }
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Image = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
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
    font-size: 25px;
    line-height: 25px;
    padding-right: 20px;
  }
`;
const CardTitle = styled.h3`
  font-family: "space grotesk", sans-serif;
  font-size: 19px;
  line-height: 23px;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding: 0 370px;

  @media screen and (max-width: 1024px) {
    font-size: 14.5px;
    line-height: 19px;
    padding: 0 100px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 19px;
    padding: 0;
  }
`;
const CardText = styled.p`
  font-size: 15px;
  line-height: 24px;
`;
const LinkText = styled(Link)`
  color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.black};
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  width: 110px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 300ms;

  &:hover {
    gap: 10px;
  }
`;

const WhoCanUseLazerPay = () => {
  return (
    <>
      <Body>
        <InnerContainer>
          <Heading>
            <TitleText>Who can use Lazerpay</TitleText>
            <Text>
              Lazerpay is specially crafted for product and service businesses
              who need to get paid across borders for the value they provide.
            </Text>
          </Heading>
          <Carousel>
            {whoCanUseLazerPayDetails.map((item, key) => (
              <Card key={key}>
                <Image src={item.image} alt={item.subject} />
                <Details>
                  <CardTitle>{item.subject}</CardTitle>
                  <CardText>{item.details}</CardText>
                  <LinkText to={item.link}>
                    Learn more <i className="fa-solid fa-arrow-right-long" />
                  </LinkText>
                </Details>
              </Card>
            ))}
          </Carousel>
        </InnerContainer>
      </Body>
    </>
  );
};

export default WhoCanUseLazerPay;
