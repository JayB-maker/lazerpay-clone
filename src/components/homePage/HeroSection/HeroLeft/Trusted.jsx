import React from "react";
import styled from "styled-components";
import { Image, Text } from "../../../ui";

const TrustedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const TrustedImages = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    width: 30%;
    gap: 25px;
  }
`;
const TrustedText = styled.p`
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

const Trusted = () => {
  return (
    <TrustedContainer>
      <TrustedText>Trusted by</TrustedText>
      <TrustedImages>
        <Image
          style={{ width: "60%" }}
          src="assets/payday-logo.png"
          alt="payday"
        />
        <Image src="assets/betdemand-logo.png" alt="betdemand" />
        <Image src="assets/brace-logo.png" alt="brace" />
      </TrustedImages>
    </TrustedContainer>
  );
};

export default Trusted;
