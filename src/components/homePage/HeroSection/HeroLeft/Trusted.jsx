import React from "react";
import styled from "styled-components";
import { Image, Text } from "../../../ui";

const TrustedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TrustedImages = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    width: 40%;
    gap: 10px;
  }
`;

const Trusted = () => {
  return (
    <TrustedContainer>
      <Text style={{ fontWeight: "700" }}>Trusted by</Text>
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
