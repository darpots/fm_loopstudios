import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import Logo from '../images/logo.svg'
import { navItems } from '../data/data'
import Facebook from '../icons/icon-facebook.svg?component'
import Twitter from '../icons/icon-twitter.svg?component'
import Pinterest from '../icons/icon-pinterest.svg?component'
import Instagram from '../icons/icon-facebook.svg?component'
import { DesktopMQ } from '../data/mediaQueries'
import { StdLink } from '../components/Links'

export default function Footer() {
  const date = new Date()
  return (
    <Wrapper>
      <Content>
        <div>
          <img src={Logo} alt="Brand Logo" />
          {navItems.map((el) => (
            <FooterLinks>
              <StdLink key={uuidv4()}>{el}</StdLink>
            </FooterLinks>
          ))}
        </div>
        <div>
          <LogoStrip>
            <StdLink>
              <Facebook />
            </StdLink>
            <StdLink>
              <Twitter />
            </StdLink>
            <StdLink>
              <Pinterest />
            </StdLink>
            <StdLink>
              <Instagram />
            </StdLink>
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
  margin-bottom: 1rem;
  ${DesktopMQ} {
    display: inline;
    text-align: left;
    margin-right: 2rem;
  }
`

const LogoStrip = styled.div`
  margin-bottom: 1.25rem;
  ${DesktopMQ} {
    text-align: right;
  }
  svg {
    margin: 0 -0.5rem;
  }
`
const Copyright = styled.div`
  color: var(--darkGrey);
  padding-bottom: 3.5rem;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
`
