import { useState } from 'react'
import styled from 'styled-components'

import ImageContainer from '../components/ImageContainer'
import Logo from '../images/logo.svg?component'
import HamburgerButton from '../components/HamburgerButton'
import NavMobile from '../components/NavMobile'
import HeroText from '../components/HeroText'

import mobileHero from '../images/mobile/image-hero.jpg'
import desktopHero from '../images/desktop/image-hero.jpg'
import { DesktopMQ, MobileBP } from '../data/mediaQueries'
import { navItems } from '../data/data'
import { StdLink } from '../components/Links'
import { v4 as uuidv4 } from 'uuid'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // TODO: Dirty code, only used when mobile menu is open and viewport size increased to desktop breakpoint
  window.addEventListener('resize', () =>
    window.innerWidth >= MobileBP && isOpen ? setIsOpen(false) : null,
  )

  return (
    <>
      <Wrapper>
        <ImageContainer
          desktop={desktopHero}
          mobile={mobileHero}
          alt="Playing VR"
        />
        <Content>
          <NavContainer>
            <Logo />
            <NavDesktop>
              {navItems.map((el) => (
                <StdLink href="#" key={uuidv4()}>
                  {el}
                </StdLink>
              ))}
            </NavDesktop>
            <HamburgerButton toggled={isOpen} toggle={setIsOpen} />
          </NavContainer>
          <HeroText />
        </Content>
      </Wrapper>
      {isOpen && <NavMobile />}
    </>
  )
}

// STYLES
const Wrapper = styled.header`
  position: relative;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Content = styled.div`
  position: relative;
  max-width: 69.375rem;
  margin: 0 auto;
  height: 40.625rem;
`

const NavContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-top: 2.5rem;

  ${DesktopMQ} {
    padding-top: 4.25rem;
  }
`

const NavDesktop = styled.nav`
  display: none;
  ${DesktopMQ} {
    display: block;
  }
`
