import React from "react";
import styled from "styled-components";

const GrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1408px;
  margin: 0 auto;
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
  text-align: center;
  padding: 0 100px;

  @media screen and (max-width: 600px) {
    font-size: 30px;
    padding: 0;
  }
`;
const GrowText = styled.p`
  padding: 0 285px;
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

const Updates = styled.p`
  color: #ee6c4d;
  font-size: 12px;
  line-height: 18px;
  font-weight:700;
  padding:2px 4px;
  background: ${(props) => props.theme.white};
  box-shadow: 1px 1px 5px rgb(179, 179, 179);
  }
`;

const GrowWithLazerPay = ({ arr }) => {
  return (
    <>
      {arr.map((item, key) => (
        <GrowContainer key={key}>
          <GrowHeading>
            <GrowTitleText>{item.titleText}</GrowTitleText>
            <GrowText>{item.text}</GrowText>
          </GrowHeading>
          <GrowBody>
            {item.pageDetails.map((subItem, key) => (
              <GrowCard key={key}>
                <i className={subItem.icon} />
                <GrowCardHeading>{subItem.subject}</GrowCardHeading>
                <GrowCardBody>{subItem.details}</GrowCardBody>
                {subItem.updates !== "" && <Updates>{subItem.updates}</Updates>}
              </GrowCard>
            ))}
          </GrowBody>
        </GrowContainer>
      ))}
    </>
  );
};

export default GrowWithLazerPay;
