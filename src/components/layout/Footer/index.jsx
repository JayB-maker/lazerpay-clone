import React from "react";
import { Container } from "../../ui";
import FifthDiv from "./forthDiv/fifthDiv/FifthDiv";
import FirstDiv from "./firstDiv/FirstDiv";
import ForthDiv from "./forthDiv/ForthDiv";
import SecondDiv from "./secondDiv/SecondDiv";
import ThirdDiv from "./thirdDiv/ThirdDiv";
import Details from "./firstDiv/Details";
import MobileSimplified from "./MobileSimplified";

const Footer = () => {
  return (
    <>
      <Container width="100%" bg="#131825" display="block">
        <Container margin="0 auto" maxwidth="1408px" display="block">
          <Container
            width="88%"
            smwidth="90%"
            smmargin="0 auto"
            margin="0 auto"
            height="100%"
            display="flex"
            mdflexdirection="column"
            smgap="50px"
            gap="auto"
            padding="100px 0 50px"
            mdpadding="100px 0 50px"
            smpadding="70px 0 30px"
          >
            <FirstDiv />
            <SecondDiv display="flex" smdisplay="none" />
            <MobileSimplified />
            <ThirdDiv display="flex" smdisplay="none" />
            <ForthDiv display="flex" smdisplay="none" />
            <FifthDiv display="flex" smdisplay="none" />
            <FifthDiv display="none" smdisplay="flex" />
            <ForthDiv display="none" smdisplay="flex" />
            <Details display="none" smdisplay="flex" />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
