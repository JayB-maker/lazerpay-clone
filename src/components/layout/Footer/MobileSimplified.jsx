import React from "react";
import { Container } from "../../ui";
import SecondDiv from "./secondDiv/SecondDiv";
import ThirdDiv from "./thirdDiv/ThirdDiv";

const MobileSimplified = () => {
  return (
    <>
      <Container display="none" mddisplay="flex">
        <SecondDiv display="none" smdisplay="flex" />
        <ThirdDiv display="none" smdisplay="flex" />
      </Container>
    </>
  );
};

export default MobileSimplified;
