import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const LinkTextss = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.accent};
  font-weight: 700;
  transition: 500ms ease;
  border-radius: 5px;
  padding: 15px 30px;

  @media screen and (max-width: 1024px) {
    padding: 12px 25px;
    font-size: 14px;
  }
`;

const HeroCTA = () => {
  return (
    <>
      <CTA>
        <LinkTextss to="/">Get Started</LinkTextss>
        <LinkTexts to="/">
          Schedule Demo <i className="fa-solid fa-angle-right"></i>
        </LinkTexts>
      </CTA>
    </>
  );
};

export default HeroCTA;
