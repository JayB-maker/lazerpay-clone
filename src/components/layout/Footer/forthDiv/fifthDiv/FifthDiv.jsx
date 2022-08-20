import React from "react";
import { FifthDivDetails } from "../../../../../data/data";
import { Container, LinkText, TitleText } from "../../../../ui";

const FifthDiv = (props) => {
  const { display, smdisplay } = props;
  return (
    <>
      <Container
        flex="3"
        color="white"
        display={display}
        smdisplay={smdisplay}
        flexdirection="column"
        mdflexdirection="row-reverse"
        mdjustifycontent="space-between"
        smmargin="0 50px 0 0"
        gap="80px"
      >
        {FifthDivDetails.map((item, key) => (
          <Container
            key={key}
            display="flex"
            flexdirection="column"
            gap="20px"
            smgap="20px"
          >
            <TitleText width="100%" heavy size="20px" lineheight="30px">
              {item.Heading}
            </TitleText>
            <Container
              display="flex"
              flexdirection="column"
              gap="10px"
              smgap="10px"
            >
              {item.menus.map((menu, key) => (
                <LinkText
                  to={menu.path}
                  key={key}
                  size="16px"
                  lineheight="24px"
                  mdlineheight="24px"
                  mdsize="14px"
                  color="white"
                  hcolor="#125bc9"
                >
                  {menu.handle}
                </LinkText>
              ))}
            </Container>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default FifthDiv;
