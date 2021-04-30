import styled, { keyframes } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { navItems } from '../data/data'
import { DesktopMQ } from '../data/mediaQueries'

export default function NavDesktop() {
  return (
    <Wrapper>
      {navItems.map((el) => (
        <NavLink href="#" key={uuidv4()}>
          {el}
        </NavLink>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: none;

  ${DesktopMQ} {
    display: block;
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

const NavLink = styled.a`
  position: relative;
  font-family: Alata, sans-serif;
  display: inline;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  color: var(--white);
  text-decoration: none;

  & + * {
    margin-left: 2rem;
  }

  &:hover::after {
    --width: 1.5rem;
    content: '';
    position: absolute;
    bottom: -0.5rem;
    animation: ${Grow} 500ms forwards;
    left: calc(50% - (var(--width) / 2));
    border-bottom: 0.125rem solid var(--white);
  }
`
