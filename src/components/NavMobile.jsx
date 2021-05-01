import styled, { keyframes } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { navItems } from '../data/data'
import { NavLink } from './Links'

export default function NavMobile() {
  return (
    <Wrapper>
      <NavMenu>
        {navItems.map((item) => (
          <NavLink href="#" key={uuidv4()}>
            {item}
          </NavLink>
        ))}
      </NavMenu>
    </Wrapper>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 9;
  background: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  animation-name: ${fadeIn};
  animation-duration: 300ms;
  height: 100vh;
`

const NavMenu = styled.nav`
  isolation: isolate;
  position: absolute;
  width: 8.0625rem;
  left: 6.4%;
  top: 13.9375rem;
`
