import styled from 'styled-components'
import { DesktopMQ } from '../data/mediaQueries'

export const Button = styled.a`
  padding: 0.8125rem 2.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: 1px solid var(--black);
  line-height: 0.875rem;
  letter-spacing: 0.3125rem;
  color: (var--black);
  background: var(--white);
  transition: background 300ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: var(--black);
  }
  &:active {
    color: var(--black);
  }
  &:hover {
    background: var(--black);
    color: var(--white);
  }
  &:hover:visited {
    background: var(--black);
    color: var(--white);
  }
`

export const CreationsButton = styled(Button)`
  ${DesktopMQ} {
    position: absolute;
    top: -0.3125rem;
    right: 0;
  }
`
