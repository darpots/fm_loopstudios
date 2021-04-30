import styled from 'styled-components'
import { DesktopMQ, MobileMQ } from '../data/mediaQueries'

export default function GridItem({ item }) {
  const { text, mobileImage, desktopImage } = item
  return (
    <Wrapper>
      <MobileImage src={mobileImage} alt={text} />
      <DesktopImage src={desktopImage} alt={text} />
      <ItemText>{text}</ItemText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  color: var(--white);

  ${DesktopMQ} {
    &:hover {
      color: var(--black);
      cursor: pointer;
    }
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, black, transparent);
    opacity: 0.65;
    ${DesktopMQ} {
      background: linear-gradient(to top, black, transparent);
    }
  }
  ${DesktopMQ} {
    &:hover::before {
      background: var(--darkGrey);
    }
  }
`

const MobileImage = styled.img`
  display: none;
  width: 100%;
  ${MobileMQ} {
    display: block;
  }
`
const DesktopImage = styled.img`
  display: none;
  ${DesktopMQ} {
    display: block;
    width: 100%;
  }
`

const ItemText = styled.h2`
  position: absolute;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5rem;
  text-transform: uppercase;
  opacity: 0.85;
  bottom: 1.25rem;
  left: 1.25rem;
  width: 7.8125rem;
  z-index: 10;

  ${DesktopMQ} {
    font-size: 2rem;
    line-height: 2rem;
    left: 2.625rem;
    bottom: 2rem;
    width: 10.25rem;
  }
`
