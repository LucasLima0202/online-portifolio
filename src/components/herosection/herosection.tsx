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
display: none;
color: #8F8F91;
letter-spacing: 1%;
font-size: 1.13rem;
margin-top: 5%;
@media (max-width: 480px) {
    font-size:1rem;
    display: block;
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
const Typewriter = styled.div`
  margin-top: 5%;
  display:block;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: none;
  }
  
  h1 {
    overflow: hidden;                  /* Esconde o texto não revelado */
    border-right: 0.15em solid white;   /* Cursor tipo máquina de escrever */
    color: #8F8F91;
    white-space: nowrap;
    letter-spacing: 1%;
    font-size: 1.13rem;
    font-weight: 500;
    margin: 0 auto;
    max-width: 0;                      /* Inicia com o texto oculto */
    animation: typing 4s steps(40, end) forwards,
               blink-caret 0.75s step-end infinite;
               
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-top: 0;
      line-height: 160%;
      padding: 0 4%;
      white-space: normal;             /* Permite quebra em 2 linhas, conforme necessário */
      max-width: 0;                    /* Inicia oculto também no mobile */
      animation: typing 4s steps(40, end) forwards,
                 blink-caret 0.75s step-end infinite;
    }
  }
  
  /* A animação de "typing" revela o texto gradualmente */
  @keyframes typing {
    from { max-width: 0; }
    to { max-width: 1000px; } /* Valor grande o suficiente para revelar todo o texto */
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #b7b3b3; }
  }
`;

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
         <>
          <Typewriter>
           <h1>{t('subtitle')}</h1>
          </Typewriter>

         
          <SubtitleEN>
            {t('subtitle')}
          </SubtitleEN>
         </>
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