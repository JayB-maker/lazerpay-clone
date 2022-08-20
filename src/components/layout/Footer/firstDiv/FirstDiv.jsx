import React from "react";
import { Container, Text, TitleText } from "../../../ui";
import Details from "./Details";

const FirstDiv = () => {
  return (
    <>
      <Container
        display="flex"
        flexdirection="column"
        gap="30px"
        smgap="30px"
        flex="5"
        color="white"
      >
        <TitleText size="25px" lineheight="35px" heavy>
          Lazerpay
        </TitleText>
        <Text size="16px" lineheight="24px" width="90%">
          Smart contract powered infrastructure for accepting payments globally.
        </Text>
        <Details display="flex" smdisplay="none" />
      </Container>
    </>
  );
};

export default FirstDiv;
