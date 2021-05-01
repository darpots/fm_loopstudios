import styled, { keyframes } from 'styled-components'
import { MobileMQ } from '../data/mediaQueries'

export function LinksTest() {
  return (
    <div>
      <StdLink>This is a standard Link</StdLink>
      <NavLink>This is a navLink</NavLink>
    </div>
  )
}

const Grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: var(--width);
  }
`

export const StdLink = styled.a`
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

export const NavLink = styled(StdLink)`
  ${MobileMQ} {
    display: block;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5625rem;
    text-transform: uppercase;
    color: var(--white);
    text-decoration: none;
    margin-left: 0;

    &:hover {
      color: var(--darkGrey);
    }
    &:hover:after {
      animation: none;
    }
    & + * {
      margin-top: 1.5rem;
    }
  }
`
