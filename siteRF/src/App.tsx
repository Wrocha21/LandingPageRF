import { Footer } from './components/footer'
import { Header } from './components/header'
import { SectionImages } from './components/SectionImages'
import { SectionLoc } from './components/SectionLoc'
import { PricesSection } from './components/sectionPrices'
import { SectionVideos } from './components/SectionVideos'
import { SectionWhatsapp } from './components/sectionWhatsapp'
import './css/global/global.css'

function App() {
  return (
    <>
    <Header/>
    <SectionWhatsapp/>
    <SectionImages/>
    <SectionVideos/>
    <PricesSection/>
    <SectionLoc/>
    <Footer/>
    </>
  )
}

export default App
