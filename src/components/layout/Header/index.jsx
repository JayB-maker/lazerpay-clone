import React, { useEffect, useState } from "react";
import { navs } from "../../../data/data";
import {
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
  NavWrapper,
  MobileHeader,
  MobileNav,
  InnerMobileHeader,
  Navigations,
  Container,
} from "../../ui";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = (index) => {
    if (isHover === index) {
      return setIsHover(null);
    }

    setIsHover(index);
  };

  const HeaderShadow = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    HeaderShadow();
    window.addEventListener("scroll", HeaderShadow);
    return () => {
      window.removeEventListener("scroll", HeaderShadow);
    };
  }, []);

  return (
    <>
      <Container
        className="header"
        width="100%"
        position="fixed"
        padding="24px 0"
        bg="white"
        index="10"
        height="80px"
        mddisplay="none"
        sddisplay="none"
        mdposition="unset"
      >
        {scrolled && (
          <Container
            position="absolute"
            width="100%"
            height="100%"
            index="-1"
            top="0"
            style={{ boxShadow: "0 3px 20px rgb(179, 179, 179)" }}
          ></Container>
        )}
        <Container
          maxwidth="1408px"
          display="flex"
          width="98%"
          margin="0 auto"
          gap="70px"
          alignitems="center"
          justifycontent="space-between"
        >
          <LinkText to="/" flex="0.5">
            <Image width="80%" src="assets/logo.png" alt="logo" />
          </LinkText>
          <Container
            display="flex"
            justifycontent="space-between"
            width="45%"
            flex="1.5"
          >
            {navs.map((item, key) => (
              <Container
                position="relative"
                key={key}
                onMouseEnter={() => toggle(key)}
                onMouseLeave={() => toggle(key)}
              >
                <Text
                  hovercolor="#125bc9"
                  cursor
                  heavy
                  size="16px"
                  width="100%"
                >
                  {item.nav}
                </Text>
                {isHover === key && item.navItems.length > 1 && (
                  <Container
                    padding="50px 0 0"
                    width="650px"
                    position="absolute"
                    right="50%"
                    transform="translateX(55%)"
                    top="20px"
                  >
                    <Container
                      bg="white"
                      display="flex"
                      position="relative"
                      width="100%"
                      gap="20px"
                      radius="5px"
                      mtop="-30px"
                      margin="-30px 0 0"
                      flexdirection="column"
                      padding="20px"
                      shadow="0 -3px 20px rgb(179, 179, 179)"
                      bbg="white"
                      btransform="rotate(45deg)"
                      bwidth="20px"
                      bheight="20px"
                      btop="-10px"
                      bleft="280px"
                      bposition="absolute"
                      bcontent="''"
                    >
                      <Text
                        heavy
                        width="100%"
                        pbottom="10px"
                        style={{
                          borderBottom: "0.5px solid rgb(179, 179, 179)",
                        }}
                      >
                        {item.nav}
                      </Text>
                      <Container display="grid" gridcolumn="1fr 1fr">
                        {item.navItems.map((subItem, key) => (
                          <LinkText to={subItem.link}>
                            <Container
                              display="flex"
                              flexdirection="column"
                              gap="5px"
                              margin="0 0 15px"
                              padding="10px"
                              color="black"
                              radius="10px"
                              hovercolor="#125bc9"
                              hoverbg="#f4f3ee"
                              key={key}
                            >
                              <NavIcon>
                                <i className={subItem.icon} />
                                <TitleText heavy size="18px" width="100%">
                                  {subItem.navItem}
                                </TitleText>
                              </NavIcon>
                              <NavDescription>
                                <Text width="100%" size="15px">
                                  {subItem.description}
                                </Text>
                              </NavDescription>
                            </Container>
                          </LinkText>
                        ))}
                      </Container>
                    </Container>
                  </Container>
                )}
              </Container>
            ))}
          </Container>
          <Container
            flex="1"
            display="flex"
            alignitems="center"
            justifycontent="flex-end"
            width="100%"
            gap="30px"
            size="18px"
            heavy
          >
            <LinkText to="/login" size="15px" heavy color="black">
              Sign In
            </LinkText>
            <LinkText
              to="/signup"
              size="15px"
              heavy
              color="white"
              bg="#125bc9"
              padding="7px 10px"
              radius="5px"
            >
              Create an account
            </LinkText>
          </Container>
        </Container>
      </Container>
      <MobileHeader>
        {scrolled && (
          <Container
            position="absolute"
            width="100%"
            height="100%"
            index="-1"
            top="0"
            style={{ boxShadow: "0 3px 20px rgb(179, 179, 179)" }}
          ></Container>
        )}
        <InnerMobileHeader>
          <LinkText to="/" style={{ width: "30%" }}>
            <Image mdwidth="100%" src="assets/logo.png" alt="logo" />
          </LinkText>
          <i
            style={{
              fontSize: "20px",
              cursor: "pointer",
            }}
            className="fa-solid fa-bars"
            onClick={() => setClicked(true)}
          />
        </InnerMobileHeader>
        {clicked && (
          <MobileNav>
            <i
              style={{
                fontSize: "24px",
                cursor: "pointer",
                position: "absolute",
                right: "20px",
              }}
              className="fa-solid fa-times"
              onClick={() => setClicked(false)}
            />
            {navs.map((item, key) => (
              <Navigations>
                <>
                  <Text heavy mdwidth="100%" bottom="10px" mdsize="14px">
                    {item.nav.toUpperCase()}
                  </Text>
                  <Container
                    mddisplay="grid"
                    mdgridcolumn="1fr 1fr"
                    smgridcolumn="1fr 1fr"
                  >
                    {item.navItems.map((subItem, key) => (
                      <LinkText to={subItem.link}>
                        <Nav key={key}>
                          <NavIcon>
                            <i className={subItem.icon} />
                            <TitleText mdsize="14px" mdwidth="100%">
                              {subItem.navItem}
                            </TitleText>
                          </NavIcon>
                        </Nav>
                      </LinkText>
                    ))}
                  </Container>
                </>
              </Navigations>
            ))}
            <Container
              mdmmargin="50px 0 0"
              smmargin="30px 0 0"
              mdgap="20px"
              display="flex "
              alignitems="center"
              smgap="20px"
              mdflexdirection="column"
              smflexdirection="column"
              mdwidth="100%"
            >
              <LinkText to="/login" color="black" heavy mdsize="18px">
                Sign In
              </LinkText>
              <LinkText
                to="/signup"
                mdsize="18px"
                color="white"
                bg="#125bc9"
                padding="10px 0"
                radius="5px"
                mdwidth="100%"
                smwidth="100%"
                heavy
                bottom="30px"
                align="center"
              >
                Create an account
              </LinkText>
            </Container>
          </MobileNav>
        )}
      </MobileHeader>
      ;
    </>
  );
};

export default Header;
