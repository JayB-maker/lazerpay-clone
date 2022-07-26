import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: ${(props) => (props.position ? `${props.position}` : "unset")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  color: ${(props) =>
    props.color ? `${props.color}` : `${(props) => props.theme.black}`};
  width: ${(props) => (props.width ? `${props.width}` : "unset")};
  max-width: ${(props) => (props.maxwidth ? `${props.maxwidth}` : "unset")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  // padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  margin-top: ${(props) => (props.mtop ? `${props.mtop}` : "0px")};
  margin-right: ${(props) => (props.mright ? `${props.mright}` : "0px")};
  margin-bottom: ${(props) => (props.mbottom ? `${props.mbottom}` : "0px")};
  margin-left: ${(props) => (props.mleft ? `${props.mleft}` : "0px")};
  top: ${(props) => (props.top ? `${props.top}` : "unset")};
  left: ${(props) => (props.left ? `${props.left}` : "unset")};
  right: ${(props) => (props.right ? `${props.right}` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "unset")};
  box-sizing: border-box;
  height: ${(props) => (props.height ? `${props.height}` : "unset")};
  z-index: ${(props) => (props.index ? `${props.index}` : "unset")};
  display: ${(props) => (props.display ? `${props.display}` : "unset")};
  flex-direction: ${(props) =>
    props.flexdirection ? `${props.flexdirection}` : "unset"};
  content: ${(props) => (props.content ? `${props.content}` : "")};
  align-items: ${(props) =>
    props.alignitems ? `${props.alignitems}` : "unset"};
  justify-content: ${(props) =>
    props.justifycontent ? `${props.justifycontent}` : "unset"};
  gap: ${(props) => (props.gap ? `${props.gap}` : "unset")};
  transform: ${(props) => (props.transform ? `${props.transform}` : "unset")};
  grid-template-columns: ${(props) =>
    props.gridcolumn ? `${props.gridcolumn}` : "unset"};
  box-shadow: ${(props) => (props.shadow ? `${props.shadow}` : "unset")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  flex: ${(props) => (props.flex ? `${props.flex}` : "unset")};

  &:hover {
    background-color: ${(props) => props.hoverbg && `${props.hoverbg}`};
    color: ${(props) =>
      props.hovercolor
        ? `${props.hovercolor}`
        : `${(props) => props.theme.black}`};

  &::before {
    content: ${(props) => (props.bcontent ? `${props.bcontent}` : "")};
    position: ${(props) => (props.bposition ? `${props.bposition}` : "unset")};
    background-color: ${(props) =>
      props.bbg ? `${props.bbg}` : "transparent"};
    width: ${(props) => (props.bwidth ? `${props.bwidth}` : "unset")};
    height: ${(props) => (props.bheight ? `${props.bheight}` : "unset")};
    top: ${(props) => (props.btop ? `${props.btop}` : "unset")};
    transform: ${(props) =>
      props.btransform ? `${props.btransform}` : "unset"};
    left: ${(props) => (props.bleft ? `${props.bleft}` : "unset")};
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.mddisplay ? `${props.mddisplay}` : "unset")};
    grid-template-columns: ${(props) =>
      props.mdgridcolumn ? `${props.mdgridcolumn}` : "unset"};
    flex-direction: ${(props) =>
      props.mdflexdirection ? `${props.mdflexdirection}` : "unset"};
    width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "unset")};
    gap: ${(props) => (props.mdgap ? `${props.mdgap}` : "unset")};
    margin-top: ${(props) => (props.mdmtop ? `${props.mdmtop}` : "0px")};
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.smdisplay ? `${props.smdisplay}` : "none")};
    grid-template-columns: ${(props) =>
      props.smgridcolumn ? `${props.smgridcolumn}` : "unset"};
    flex-direction: ${(props) =>
      props.smflexdirection ? `${props.smflexdirection}` : "unset"};
    gap: ${(props) => (props.smgap ? `${props.smgap}` : "unset")};
    margin-top: ${(props) => (props.smmtop ? `${props.smmtop}` : "0px")};
  }
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "50px")};

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "50px")};
  }
`;

export const LinkText = styled(Link)`
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  color: ${(props) =>
    props.color ? `${props.color}` : `${(props) => props.theme.black}`};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  width: ${(props) => props.width && `${props.width}`};
  text-align: ${(props) => (props.align ? `${props.align}` : "left")};
  // padding: ${(props) => (props.padding ? `${props.padding}` : "0px")};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  flex: ${(props) => (props.flex ? `${props.flex}` : "unset")};

  @media screen and (max-width: 1024px) {
    width: ${(props) => props.mdwidth && `${props.mdwidth}`};
    font-size: ${(props) => (props.mdsize ? `${props.mdsize}` : "20px")};
  }
  // @media screen and (max-width: 600px) {
  //   width: ${(props) => props.smwidth && `${props.smwidth}`};
  //   font-size: ${(props) => (props.smsize ? `${props.smsize}` : "20px")};
  // }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  alignitem: center;
  justifycontent: center;
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

export const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "18px")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  color: ${(props) =>
    props.color ? `${props.color}` : `${(props) => props.theme.black}`};
  cursor: ${(props) => props.cursor && "pointer"};
  width: ${(props) => (props.width ? `${props.width}` : "50px")};
  padding-top: ${(props) => (props.ptop ? `${props.ptop}` : "0px")};
  padding-right: ${(props) => (props.pright ? `${props.pright}` : "0px")};
  padding-bottom: ${(props) => (props.pbottom ? `${props.pbottom}` : "0px")};
  padding-left: ${(props) => (props.pleft ? `${props.pleft}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  // border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
  //   ${(props) => (props.border ? `${props.border}` : "#000000")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};

  &:hover {
    color: ${(props) =>
      props.hovercolor
        ? `${props.hovercolor}`
        : `${(props) => props.theme.black}`};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => (props.mdsize ? `${props.mdsize}` : "18px")};
    width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "50px")};
  }
  // @media screen and (max-width: 600px) {
  //   font-size: ${(props) => (props.smsize ? `${props.smsize}` : "18px")};
  // }
`;

export const TitleText = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  font-weight: ${(props) => (props.heavy ? "700" : "400")};
  color: ${(props) =>
    props.color ? `${props.color}` : `${(props) => props.theme.black}`};
  cursor: ${(props) => props.cursor && "pointer"};
  width: ${(props) => (props.width ? `${props.width}` : "50px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  // border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
  //   ${(props) => (props.border ? `${props.border}` : "#000000")};
  background-color: ${(props) => (props.bg ? `${props.bg}` : "transparent")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};

  &:hover {
    color: ${(props) =>
      props.hovercolor
        ? `${props.hovercolor}`
        : `${(props) => props.theme.black}`};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => (props.mdsize ? `${props.mdsize}` : "20px")};
    width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "50px")};
  }
  // @media screen and (max-width: 600px) {
  //   font-size: ${(props) => (props.smsize ? `${props.smsize}` : "20px")};
  // width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "50px")};
  // }
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
  gap: 30px;
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
  padding: 30px 16px 0;
  border-bottom: 1px solid rgb(179, 179, 179);
`;

export const Navigations = styled.div`
  //   padding: 0 10px;
`;
