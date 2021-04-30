import Hamburger from 'hamburger-react'
import styled from 'styled-components'
import { DesktopMQ } from '../data/mediaQueries'

export default function HamburgerButton(props) {
  return (
    <HamburgerWrapper>
      <Hamburger
        label="Show Navigation Menu"
        color="var(--white)"
        toggled={props.toggled}
        toggle={props.toggle}
        rounded
      />
    </HamburgerWrapper>
  )
}

const HamburgerWrapper = styled.div`
  ${DesktopMQ} {
    display: none;
  }
`
