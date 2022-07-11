import React, { useState } from 'react'
import { navs } from '../../../data/data'
import { Headers, Image, LinkText, InnerHeaders, Navbar, Navs, NavItems, Nav, Text, NavIcon, NavDescription, HeaderCTA } from '../../ui'

const Header = () => {
  const [isHover, setIsHover] = useState(false)

  const toggle = (index) => {
    if(isHover === index){
        return setIsHover(null)
    }

    setIsHover(index);  
  }

  const hover = (index) => {
    if (isHover === index && index.onMouseEnter === true){
      setIsHover(true)
    }
    setIsHover(false)
  }

  return (
    <>
      <Headers>
        <InnerHeaders>
          <LinkText to="/" style={{flex:"0.4"}}>
          <Image src="assets/logo.png" alt="logo" />
          </LinkText>
          <Navbar>
            {navs.map((item, key) => (
              <Navs key={key} onMouseEnter={() => toggle(key)} onMouseLeave={() => toggle(key)}>
                <Text style={{cursor:"pointer", fontWeight:"700", fontSize:"18px"}} >{item.nav}</Text>
                {isHover === key && <NavItems className='navv'>
                  {item.navItems.map((subItem, key) => (
                    <LinkText to={subItem.link}>
                      <Nav key={key}>
                      <NavIcon>
                      <i className={subItem.icon} />
                      <Text>{subItem.navItem}</Text>
                      </NavIcon>
                      <NavDescription>
                        <Text>{subItem.description}</Text>
                      </NavDescription>
                    </Nav>
                    </LinkText>
                  ))}
                </NavItems>}
              </Navs>
            ))}
          </Navbar>
          <HeaderCTA>
            <LinkText to="/login">
              Sign In
            </LinkText>
            <LinkText to="/signup">
              Create Account
            </LinkText>
          </HeaderCTA>
        </InnerHeaders>
      </Headers>
    </>
  )
}

export default Header