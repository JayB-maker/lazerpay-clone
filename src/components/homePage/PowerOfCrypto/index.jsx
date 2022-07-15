import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { powerOfCryptoDetails } from "../../../data/data";

const CryptoWrapper = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;
const LeftDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const RightDiv = styled.div`
  flex: 5;
  height: 630px;
  width: 645px;
  overflow-y: hidden;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: 750ms all ease-in-out;
  // gap: 100px;
`;
const Body = styled.div`
  width: 88%;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
`;

const TitleText = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 39px;
  line-height: 47px;
  font-weight: 700;
  padding-right: 330px;
  margin-top: 20px;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 26px;
`;
const SectionTitle = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 23px;
  line-height: 28px;
  font-weight: 700;
`;
const CryptoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  // margin-bottom: 50px;
`;

const PowerOfCrypto = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);

  useEffect(() => {
    const newSlide =
      currentSlide > powerOfCryptoDetails.length - 2 ? 0 : currentSlide + 1;

    const timer = setTimeout(() => {
      SetCurrentSlide(newSlide);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <Body>
        <Text>FOR BUSINESS</Text>
        <TitleText>
          An easier way to harness the power of crypto to grow your business
        </TitleText>
        <CryptoWrapper>
          <LeftDiv>
            {powerOfCryptoDetails.map((item, key) => (
              <CryptoSection key={key}>
                <SectionTitle>{item.subject}</SectionTitle>
                <SectionText>{item.details}</SectionText>
              </CryptoSection>
            ))}
          </LeftDiv>
          <RightDiv>
            {powerOfCryptoDetails.map((item, key) => (
              <CarouselContainer
                style={{
                  marginTop: key === 0 ? `-${currentSlide * 630}px` : undefined,
                }}
              >
                <Image src={item.image} alt={item.subject} key={key} />
              </CarouselContainer>
            ))}
          </RightDiv>
        </CryptoWrapper>
      </Body>
    </>
  );
};

export default PowerOfCrypto;
