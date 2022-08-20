import React from "react";
import { AddressDetails } from "../../../../data/data";
import { Container, Text, TitleText } from "../../../ui";

const Address = () => {
  return (
    <>
      <Container display="flex" flexdirection="column" gap="20px" smgap="20px">
        {AddressDetails.map((item, key) => (
          <Container
            display="flex"
            flexdirection="column"
            gap="10px"
            smgap="10px"
            key={key}
          >
            <TitleText width="100%" heavy size="18px" lineheight="22px">
              {item.country}
            </TitleText>
            <Text
              size="16px"
              mdsize="14px"
              lineheight="24px"
              mdlineheight="24px"
              width="90%"
            >
              {item.details}
            </Text>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default Address;
