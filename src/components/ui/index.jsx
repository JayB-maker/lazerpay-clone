import styled from "styled-components";
import { Link } from "react-router-dom";

export const Headers = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.white};
  width: 100vw;
  padding: 24px 0;
  box-sizing: border-box;
  height: 82px;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Shadow = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  box-shadow: 0 3px 20px rgb(179, 179, 179);
`;

export const InnerHeaders = styled.div`
  display: flex;
  max-width: 1408px;
  width: 98%;
  margin: 0 auto;
  align-items: center;
  gap: 70px;
  justify-contents: space-between;
`;

export const Image = styled.img`
  width: 80%;
`;

export const LinkText = styled(Link)``;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  alignitem: center;
  justifycontent: center;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1.5;
`;

export const Navs = styled.div`
  position: relative;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  color: ${(props) => props.theme.black};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.accent};
  }
  @media screen and (max-width: 1024px) {
    padding: 5px 0;
  }
`;

export const NavItems = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  position: relative;
  width: 100%;
  box-shadow: 0 -3px 20px rgb(179, 179, 179);
  margin-top: -30px;

  &::before {
    content: "";
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.white};
    position: absolute;
    top: -10px;
    transform: rotate(45deg);
    left: 280px;
  }
`;
export const NavWrapper = styled.div`
  padding-top: 50px;
  width: 650px;
  position: absolute;
  right: 50%;
  transform: translateX(55%);
  top: 20px;
`;

export const NavItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Text = styled.p`
  font-weight: ${(props) => props.weight && `${props.weight}`};
`;

export const TextBlue = styled.p`
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const TitleText = styled.h3`
  font-family: "Space Grotesk", sans-serif;
`;

export const NavIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  i {
    background-color: #94beff;
    color: #125bc9;
    padding: 10px;
    border-radius: 50%;
  }
`;
export const NavDescription = styled.div``;

export const HeaderCTA = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 50px;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 50px;
  }
`;

// --------------------------MOBILE MENU

export const MobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    background-color: ${(props) => props.theme.primary};
    display: unset;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10;
  }
`;
export const InnerMobileHeader = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    // width: 90%;
    width: 100%;
    margin: 0 auto;
    padding: 15px 16px;
    align-items: center;
    justify-content: space-between;
  }
`;
export const MobileLogo = styled.img`
  width: 100%;
`;
export const MobileNav = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 10px 0;
  border-bottom: 1px solid rgb(179, 179, 179);
`;

export const Navigations = styled.div`
  //   padding: 0 10px;
`;
