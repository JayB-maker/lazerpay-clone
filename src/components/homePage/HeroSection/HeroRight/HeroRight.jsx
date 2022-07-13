import React from "react";
import styled from "styled-components";
import { Image } from "../../../ui";

const RightDiv = styled.div`
  flex: 4;
`;

const HeroRight = () => {
  return (
    <>
      <RightDiv>
        <Image
          style={{ width: "100%" }}
          src="assets/home.gif"
          alt="home"
        ></Image>
      </RightDiv>
    </>
  );
};

export default HeroRight;
