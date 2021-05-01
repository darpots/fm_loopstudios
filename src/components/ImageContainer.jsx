import styled from 'styled-components'
import { DesktopMQ, MobileMQ } from '../data/mediaQueries'

export default function ImageContainer({ desktop, mobile, alt }) {
  return (
    <Wrapper>
      <Desktop src={desktop} alt={alt} />
      <Mobile src={mobile} alt={alt} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(var(--black), var(--black));
    opacity: 0.35;
  }
`
const Desktop = styled.img`
  display: none;
  ${DesktopMQ} {
    display: block;
    object-fit: cover;
    object-position: top;
    height: 100%;
    width: 100%;
  }
`
const Mobile = styled.img`
  display: none;
  ${MobileMQ} {
    display: block;
    object-fit: cover;
    object-position: top;
    height: 100%;
    width: 100%;
  }
`
