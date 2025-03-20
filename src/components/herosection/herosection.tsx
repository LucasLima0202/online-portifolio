import styled from "styled-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Button from "../button/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Frame from "../../../public/Frame.svg"
import Lottie from "lottie-react";
import scrollAnimation from "../../assets/lotties/lottiemousescrolldown.json"

const DivCenter = styled.div`
 display:flex;
 text-align:center;
 justify-content:center;
 align-items:center;
 width:100%;
margin-top: 5%;
 @media (max-width: 480px) {
    margin-top: 15%;
  }
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
  font-size: 2.04rem; 
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #FFFFFF;
  font-size: 3.5rem;
  width: 100%;
  @media (max-width: 480px) {
    padding: 0 5%;
    margin-bottom: 8%;
    color: #ffffff;
    font-size: 1.66rem; 

  }
`;

const HeadingEN = styled.h1`
  text-align: center;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #FFFFFF;
  font-size: 3.5rem;
  width: 100%;
  @media (max-width: 480px) {
    padding: 0 5%;
    margin-bottom: 11%;
    font-size: 2.04rem; 
  }
`;

const SubtitleBR = styled.p`
text-align: center;
color: #8F8F91;
letter-spacing: 1%;
font-size: 1.13rem;
margin-top: 4%;

@media (max-width: 480px) {
    font-size:0.95rem;
    margin-top: 0%;
    line-height: 160%;
    padding-left:4%;
    padding-right: 4%;
  }
`
const SubtitleEN = styled.p`
text-align: center;
color: #8F8F91;
letter-spacing: 1%;
font-size: 1.13rem;
margin-top: 5%;
@media (max-width: 480px) {
    font-size:1rem;
    margin-top: 0%;
    line-height: 160%;
    padding-left:4%;
    padding-right: 4%;
  }
`
const DivButtonHeading = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top:5%;
margin-bottom:1%;

@media (max-width: 480px) {
    margin-top:13%;
    margin-bottom:1%;
  }
`
const Hero = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-flow: column nowrap;
width:100%;
height:100vh;
@media (max-width: 480px) {
    height:90vh;
}
`


const HeroSection = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
  
    return (
        <Hero>
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
        </Hero>
    )
}

export default HeroSection;