import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { navItems } from '../data/data'
import { DesktopMQ } from '../data/mediaQueries'
import { StdLink } from './Links'

export default function NavDesktop() {
  return (
    <Wrapper>
      {navItems.map((el) => (
        <StdLink href="#" key={uuidv4()}>
          {el}
        </StdLink>
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
