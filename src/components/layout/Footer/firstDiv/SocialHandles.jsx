import React from "react";
import { socialHandleDetails } from "../../../../data/data";
import { Container } from "../../../ui";

const SocialHandles = () => {
  return (
    <Container display="flex" gap="30px" smgap="30px">
      {socialHandleDetails.map((item, key) => (
        <Container key={key}>
          <a
            style={{
              color: "white",
            }}
            href={item.path}
          >
            <i
              style={{
                width: "10px",
                height: "10px",
              }}
              className={item.icon}
            />
          </a>
        </Container>
      ))}
    </Container>
  );
};

export default SocialHandles;
