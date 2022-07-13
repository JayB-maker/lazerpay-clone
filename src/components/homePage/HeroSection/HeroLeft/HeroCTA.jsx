import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkText } from "../../../ui";

const CTA = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const LinkTexts = styled(Link)`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  display: flex;
  gap: 10px;
  font-size: 20px;
  align-items: center;
  transition: 500ms ease;

  &:hover {
    gap: 15px;
  }
`;

const HeroCTA = () => {
  return (
    <>
      <CTA>
        <LinkText
          style={{
            backgroundColor: "blue",
            color: "White",
            padding: "15px 30px",
            fontWeight: "700",
            borderRadius: "5px",
          }}
          to="/"
        >
          Get Started
        </LinkText>
        <LinkTexts to="/">
          Schedule Demo <i className="fa-solid fa-angle-right"></i>
        </LinkTexts>
      </CTA>
    </>
  );
};

export default HeroCTA;
