import styled from 'styled-components'

import mobileImage from '../images/mobile/image-interactive.jpg'
import desktopImage from '../images/desktop/image-interactive.jpg'
import { DesktopMQ, MobileMQ } from '../data/mediaQueries'

export default function MainSection() {
  return (
    <Wrapper>
      <Content>
        <MobImg src={mobileImage} alt="Man wearing VR Headset" />
        <DeskImg src={desktopImage} alt="Man wearing VR Headset" />

        <TextContainer>
          <Heading>The leader in interactive VR</Heading>
          <Text>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </Text>
        </TextContainer>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  max-width: 90rem;
  margin: 6rem auto 7rem;
  padding: 0 1.5rem;
`

const Content = styled.div`
  position: relative;
  max-width: 69.375rem;
  margin: 0 auto;
`

const MobImg = styled.img`
  display: none;
  ${MobileMQ} {
    display: block;
  }
`

const DeskImg = styled.img`
  display: none;
  ${DesktopMQ} {
    display: block;
  }
`

const TextContainer = styled.section`
  ${DesktopMQ} {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 34rem;
    background: var(--white);
    padding-top: 6rem;
    padding-left: 6rem;
`

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--black);
  margin: 3rem 0 1rem 0;

  ${DesktopMQ} {
    font-weight: 300;
    font-size: 3rem;
    line-height: 3rem;
  }
`

const Text = styled.p`
  line-height: 1.5625rem;
  text-align: center;
  color: var(--darkGrey);
`
