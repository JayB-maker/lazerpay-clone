import React from "react";
import { Container, Text } from "../../../ui";
import Address from "./Address";
import SocialHandles from "./SocialHandles";

const Details = (props) => {
  const { display, smdisplay } = props;
  return (
    <>
      <Container
        display={display}
        smdisplay={smdisplay}
        flexdirection="column"
        gap="30px"
        smgap="30px"
        color="white"
      >
        <SocialHandles />
        <a
          style={{ color: "white", fontSize: "16px", lineHeight: "24px" }}
          href="mailto:hello@lazerpay.finance"
        >
          hello@lazerpay.finance
        </a>
        <Address />
        <Text
          top="60px"
          size="16px"
          mdsize="14px"
          lineheight="24px"
          mdtextalign="center"
          width="100%"
        >
          All rights Reserved, &copy; 2022 Lazerpay Inc
        </Text>
      </Container>
    </>
  );
};

export default Details;
