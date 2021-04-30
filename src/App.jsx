import { GlobalStyles } from './GlobalStyles.jsx'
import Header from './layouts/Header'
import MainSection from './layouts/MainSection'
import Creations from './layouts/Creations'
import Footer from './layouts/Footer'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainSection />
      <Creations />
      <Footer />
    </>
  )
}
