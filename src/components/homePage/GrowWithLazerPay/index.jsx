import React from "react";
import styled from "styled-components";
import { growWithLazerPayDetails } from "../../../data/data";

const GrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 70px;

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
`;
const GrowTitleText = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 48px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
const GrowText = styled.p`
  padding: 0 380px;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 0 80px;
    font-size: 15px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
    font-size: 14px;
  }
`;
const GrowHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;
const GrowBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
`;
const GrowCard = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  i {
    color: ${(props) => props.theme.accent};
    font-size: 35px;
  }

  @media screen and (max-width: 1024px) {
    width: 260px;
  }
  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;
const GrowCardHeading = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
const GrowCardBody = styled.p`
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const GrowWithLazerPay = () => {
  return (
    <>
      <GrowContainer>
        <GrowHeading>
          <GrowTitleText>Grow With Lazerpay</GrowTitleText>
          <GrowText>
            Lazerpay does not only help you to accept payments, we are here to
            open your business up to the world.
          </GrowText>
        </GrowHeading>
        <GrowBody>
          {growWithLazerPayDetails.map((item, key) => (
            <GrowCard key={key}>
              <i className={item.icon} />
              <GrowCardHeading>{item.subject}</GrowCardHeading>
              <GrowCardBody>{item.details}</GrowCardBody>
            </GrowCard>
          ))}
        </GrowBody>
      </GrowContainer>
    </>
  );
};

export default GrowWithLazerPay;
