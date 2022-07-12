import React, { useState } from "react";
import { navs } from "../../../data/data";
import {
  Headers,
  Image,
  LinkText,
  InnerHeaders,
  Navbar,
  Navs,
  NavItems,
  Nav,
  Text,
  NavIcon,
  NavDescription,
  HeaderCTA,
  NavItem,
  TitleText,
  TextBlue,
  NavWrapper,
} from "../../ui";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (isHover === index) {
      return setIsHover(null);
    }

    setIsHover(index);
  };

  return (
    <>
      <Headers>
        <InnerHeaders>
          <LinkText to="/" style={{ flex: "0.5" }}>
            <Image src="assets/logo.png" alt="logo" />
          </LinkText>
          <Navbar>
            {navs.map((item, key) => (
              <Navs
                key={key}
                onMouseEnter={() => toggle(key)}
                onMouseLeave={() => toggle(key)}
              >
                <TextBlue
                  style={{
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  {item.nav}
                </TextBlue>
                {isHover === key && item.navItems.length > 1 && (
                  <NavWrapper>
                    <NavItems>
                      <Text
                        style={{
                          fontWeight: "800",
                          width: "100%",
                          paddingBottom: "10px",
                          borderBottom: "0.5px solid rgb(179, 179, 179)",
                        }}
                      >
                        {item.nav}
                      </Text>
                      <NavItem>
                        {item.navItems.map((subItem, key) => (
                          <LinkText to={subItem.link}>
                            <Nav key={key}>
                              <NavIcon>
                                <i className={subItem.icon} />
                                <TitleText style={{ fontWeight: "700" }}>
                                  {subItem.navItem}
                                </TitleText>
                              </NavIcon>
                              <NavDescription>
                                <Text>{subItem.description}</Text>
                              </NavDescription>
                            </Nav>
                          </LinkText>
                        ))}
                      </NavItem>
                    </NavItems>
                  </NavWrapper>
                )}
              </Navs>
            ))}
          </Navbar>
          <HeaderCTA>
            <LinkText to="/login" style={{ color: "black" }}>
              Sign In
            </LinkText>
            <LinkText
              to="/signup"
              style={{
                color: "white",
                backgroundColor: "#125bc9",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Create Account
            </LinkText>
          </HeaderCTA>
        </InnerHeaders>
      </Headers>
    </>
  );
};

export default Header;
