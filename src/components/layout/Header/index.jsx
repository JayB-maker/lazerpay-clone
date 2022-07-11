import React from 'react'
import { Headers, Image, LinkText, InnerHeaders } from '../../ui'

const Header = () => {
  return (
    <>
      <Headers>
        <InnerHeaders>
          <LinkText to="/">
          <Image src="assets/logo.png" alt="logo" />
          </LinkText>
          <Navbar>
            
          </Navbar>
        </InnerHeaders>
      </Headers>
    </>
  )
}

export default Header