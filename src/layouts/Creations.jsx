import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { CreationsButton } from '../components/Button'
import Grid from '../components/Grid'
import GridItem from '../components/GridItem'
import { creationImage } from '../data/data'
import { DesktopMQ } from '../data/mediaQueries'

export default function Creations() {
  return (
    <Wrapper>
      <Content>
        <Heading>Our Creations</Heading>
        <Grid>
          {creationImage.map((item) => (
            <GridItem item={item} key={uuidv4()} />
          ))}
        </Grid>
        <CreationsButton href="#">See all</CreationsButton>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: relative;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Content = styled.div`
  position: relative;
  max-width: 69.375rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${DesktopMQ} {
    display: block;
    text-align: left;
  }
`

const Heading = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: var(--black);
  margin-bottom: 3rem;
`
