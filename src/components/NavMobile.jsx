import styled, { keyframes } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { navItems } from '../data/data'

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
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  animation-name: ${fadeIn};
  animation-duration: 300ms;
  height: 110vh;
`

const NavMenu = styled.nav`
  isolation: isolate;
  position: absolute;
  width: 8.0625rem;
  left: 6.4%;
  top: 13.9375rem;
`

const NavLink = styled.a`
  display: block;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5625rem;
  text-transform: uppercase;
  color: var(--white);
  text-decoration: none;

  &:hover {
    color: var(--darkGrey);
  }

  & + * {
    margin-top: 1.5rem;
  }
`
