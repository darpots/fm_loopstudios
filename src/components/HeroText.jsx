import styled from 'styled-components'
import { DesktopMQ } from '../data/mediaQueries'

export default function HeroText() {
  return <Heading>Immersive experiences that deliver</Heading>
}

const Heading = styled.h1`
  margin-top: 10.1875rem;
  padding: 1.5rem;
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 2.375rem;
  color: var(--white);
  border: 2px solid var(--white);
  min-width: 20rem;
  max-width: 27.5rem;

  ${DesktopMQ} {
    margin-top: 8.125rem;
    padding: 2.5rem;
    font-size: 4.5rem;
    line-height: 4.375rem;
    max-width: 40.625rem;
  }
`
