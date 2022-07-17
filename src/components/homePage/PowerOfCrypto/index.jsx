import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { powerOfCryptoDetails } from "../../../data/data";

const CryptoWrapper = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
const LeftDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const RightDiv = styled.div`
  flex: 5;
  height: 600px;
  width: 645px;
  overflow-y: hidden;

  @media screen and (max-width: 1024px) {
    display: none;
  }
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
  padding-right: 330px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    font-size: 23px;
    line-height: 35px;
    margin-top: 15px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const SectionTitle = styled.h3`
  font-family: "space grotesk", san serif;
  font-size: 23px;
  line-height: 28px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 19px;
    line-height: 23px;
  }
`;
const CryptoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 20px;
  position: relative;
  padding-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  // margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    width: 60%;
    height: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const BlueBar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  width: 5px;
  content: "";
  background-color: ${(props) => props.theme.accent};
`;

const ImageContainer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
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
        <InnerContainer>
          <Text>FOR BUSINESS</Text>
          <TitleText>
            An easier way to harness the power of crypto to grow your business
          </TitleText>
          <CryptoWrapper>
            <LeftDiv>
              {powerOfCryptoDetails.map((item, key) => (
                <>
                  <CryptoSection key={key}>
                    {currentSlide === key && <BlueBar />}
                    <SectionTitle
                      style={{
                        color: currentSlide === key ? "#125bc9" : "#000000",
                      }}
                    >
                      {item.subject}
                    </SectionTitle>
                    <SectionText>{item.details}</SectionText>
                  </CryptoSection>
                  {currentSlide === key && (
                    <ImageContainer key={key}>
                      <Image src={item.image} alt={item.subject} />
                    </ImageContainer>
                  )}
                </>
              ))}
            </LeftDiv>
            <RightDiv>
              {powerOfCryptoDetails.map((item, key) => (
                <CarouselContainer
                  style={{
                    marginTop:
                      key === 0 ? `-${currentSlide * 690}px` : undefined,
                  }}
                >
                  <Image src={item.image} alt={item.subject} key={key} />
                </CarouselContainer>
              ))}
            </RightDiv>
          </CryptoWrapper>
        </InnerContainer>
      </Body>
    </>
  );
};

export default PowerOfCrypto;
