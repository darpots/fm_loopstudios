import styled from 'styled-components'
import { DesktopMQ } from '../data/mediaQueries'

export default function Grid({ children }) {
  return <GridLayout>{children}</GridLayout>
}

const GridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 1.5rem;
  margin-bottom: 1.5rem;
  ${DesktopMQ} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1.875rem;
    grid-row-gap: 1.875rem;
    margin-bottom: 11.5rem;
  }
`
