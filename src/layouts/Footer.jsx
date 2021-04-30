import styled, { keyframes } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import Logo from '../images/logo.svg'
import { navItems } from '../data/data'
import Facebook from '../icons/icon-facebook.svg?component'
import Twitter from '../icons/icon-twitter.svg?component'
import Pinterest from '../icons/icon-pinterest.svg?component'
import Instagram from '../icons/icon-facebook.svg?component'
import { DesktopMQ } from '../data/mediaQueries'

export default function Footer() {
  const date = new Date()
  return (
    <Wrapper>
      <Content>
        <div>
          <img src={Logo} alt="" />
          <FooterLinks>
            {navItems.map((el) => (
              <Links href="#" key={uuidv4()}>
                {el}
              </Links>
            ))}
          </FooterLinks>
        </div>
        <div>
          <LogoStrip>
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
          </LogoStrip>
          <Copyright>
            &copy; {date.getFullYear()} Loopstudios. All rights reserved.
          </Copyright>
        </div>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 0 1.5rem;
  background: black;
`

const Content = styled.div`
  position: relative;
  max-width: 69.375rem;
  margin: 6rem auto 0;
  text-align: center;
  padding-top: 3.5rem;

  img {
    width: 9rem;
    margin: 0 auto 1.5rem;
    ${DesktopMQ} {
      margin: 0 0 1.5rem 0;
    }
  }

  ${DesktopMQ} {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`

const FooterLinks = styled.div`
  margin: 3.5rem 0 3rem;

  ${DesktopMQ} {
    text-align: left;
    margin: 0 0 1.5rem;
  }
`

const Grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: var(--width);
  }
`

const Links = styled.div`
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  color: var(--white);
  margin-bottom: 1rem;
  cursor: pointer;
  ${DesktopMQ} {
    display: inline-block;
    position: relative;
    margin-right: 2rem;
    margin-bottom: 0;

    &:hover::after {
      --width: 1.5rem;
      content: '';
      position: absolute;
      bottom: -0.5rem;
      animation: ${Grow} 500ms forwards;
      left: calc(50% - (var(--width) / 2));
      border-bottom: 0.125rem solid var(--white);
    }
  }
`

const LogoStrip = styled.div`
  margin-bottom: 1.25rem;
  ${DesktopMQ} {
    text-align: right;
  }
  svg {
    margin: 0 0.5rem;
  }
`
const Copyright = styled.div`
  color: var(--darkGrey);
  padding-bottom: 3.5rem;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
`
