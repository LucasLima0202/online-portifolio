import styled from 'styled-components';
import './App.css'
import Navbar from './components/navbar/navbar'
import './i18n';
import { useTranslation } from 'react-i18next';
import Button from './components/button/button';
import Frame from "../public/Frame.svg"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import Lottie from 'lottie-react';
import scrollAnimation from "./assets/lotties/lottiemousescrolldown.json"


const DivCenter = styled.div`
 display:flex;
 text-align:center;
 justify-content:center;
 align-items:center;
 width:100%;
 margin-top: 15%;
 `;

const BDivCenter = styled.div`
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  width:100%;
  `;


const HeadingBR = styled.h1`
  text-align: center;
  padding: 0 5%;
  margin-top: 20%;
  font-size: 1.66rem;
  margin-bottom: 8%;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #FFFFFF;
`;

const HeadingEN = styled.h1`
  text-align: center;
  padding: 0 5%;
  margin-top: 20%;
  margin-bottom: 11%;
  font-size: 2.04rem; 
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #FFFFFF;
`;

const SubtitleBR = styled.p`
text-align: center;
color: #8F8F91;
line-height: 160%;
padding-left:4%;
padding-right: 4%;
`
const SubtitleEN = styled.p`
text-align: center;
color: #8F8F91;
line-height: 160%;
letter-spacing: 1%;
padding-left:4%;
padding-right: 4%;
`
const DivButtonHeading = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top:13%;
margin-bottom:1%;
`

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <Navbar />
      <div>
        {currentLang === 'pt' ? (
          <HeadingBR>
            {t('welcome')}<br />{t('subhed')}
          </HeadingBR>
        ) : (
          <HeadingEN>
            {t('welcome')}<br />{t('subhed')}
          </HeadingEN>
        )}
        {currentLang === 'pt' ? (
          <SubtitleBR>
            {t('subtitle')}
          </SubtitleBR>
        ) : (
          <SubtitleEN>
            {t('subtitle')}
          </SubtitleEN>
        )}
      </div>
      <DivButtonHeading>
        <Button
          text={t('buttonhd')}
          bgColor="#FFFFFF"
          textColor="#151515"
          iconLeft={Frame}
          iconRight={faArrowRight}
        />
      </DivButtonHeading>

      <BDivCenter>
        <DivCenter style={{ width: 28, height: 28 }}>
          <Lottie animationData={scrollAnimation} loop={true} />
        </DivCenter>
      </BDivCenter>

    </>
  )
}

export default App
