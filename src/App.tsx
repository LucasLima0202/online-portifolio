import styled from 'styled-components';
import './App.css'
import Navbar from './components/navbar/navbar'
import './i18n';
import HeroSection from './components/herosection/herosection';
import SpikeDecorativeTop from './components/herosection/decorative/spiketop';
import SpikeDecorativeBottom from './components/herosection/decorative/spikebottom';
import DesktopSpikeTop from './components/herosection/decorative/desktopspiketop';
import DesktopSpikeBottom from './components/herosection/decorative/desktopspikebottom';
import ProjectSection from './components/projects/projects';
import AppSection from './components/apps/appsection';
import SocialSection from './components/social/socialsection';


const DivCenter = styled.div`
 display:flex;
 flex-flow: column;
 text-align:center;
 justify-content:center;
 align-items:center;
 width:100%;
 `;

const BDivCenter = styled.div`
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  position:relative;
  width:100%;
  margin-top:0%;
  @media (max-width: 480px) {
    margin-top:0%;
  }
  `;


const Body = styled.section`
display:flex;
width:100%;
justify-content:center;
align-items:center;
flex-flow: column;
`

function App() {


  return (
    <>
      <Navbar />
      <BDivCenter>
        {/* Start of Spike Style Effect on Hero */}
        {/* <DivMobile>
          <SpikeDecorativeTop />
          <SpikeDecorativeBottom />
        </DivMobile>

        <DivDesktop>
          <DesktopSpikeTop />
          <DesktopSpikeBottom />
        </DivDesktop> */}
        {/* End of Spike Style Effect on Hero */}

         {/* App Body */}
         <Body>

        <DivCenter>
          <HeroSection />
        </DivCenter>

        <DivCenter>
        <ProjectSection />
        </DivCenter>
        
        <DivCenter>
        </DivCenter>

         </Body>
      </BDivCenter>

    </>
  )
}

export default App
