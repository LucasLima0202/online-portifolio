import styled from "styled-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';

import backgroundImage from "../../assets/img/Desktop - 45-invisble.png";
import Button from "../button/button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imggroup from "../../assets/img/imgtest.png"
import AppSection from "../apps/appsection";
 
const Article = styled.article`
display: flex;
padding-top: 5%;
justify-content:center;
align-items: center;
flex-flow: column nowrap;
background-image: url(${backgroundImage});
width:100%;
@media (max-width: 480px) {
    height: auto;
    margin-top: 1%;
  }
`

const Article_Title = styled.div`
display:flex;
flex-flow: column nowrap;
align-items:center;
justify-content:center;
`

const _Subtitle = styled.h4`
font-size: 1rem;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
color: #8F8F91;
font-weight:400;
@media (max-width: 480px) {

}
`
const _Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 13%;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
color:#ffffff;
text-align: center;
text-shadow: 0px 4px 11.1px rgba(255, 255, 255, 0.54);
margin-top:7%;

@media (max-width: 480px) {

}
`
const _Group = styled.div`
display:flex;
justify-content:space-between;
flex-flow: row;
align-items:center;
margin-top:13%;
gap:8px;

`

const _GroupAncora = styled.a`
display:flex;
justify-content:space-between;
flex-flow: row;
align-items:center;
gap:8px;
@media (max-width: 480px) {
    text-align: center;
   justify-content: center;
   align-items: center;
  }
`

const _Span =styled.a`
font-size: 1rem;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
text-align: right;
font-weight:600;
color: #C4C3C5;
@media (max-width: 480px) {
text-align: center;
}`
const _Icon = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
svg{
    color: #C4C3C5;
}
`

const __ContainerImg = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 300px;
  z-index: 1;
  border-radius:8px;
&::after{
    content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  opacity: 0;
  transition: .5s ease all;
}
&:hover img {
    transform: scale(1.1);
}

`

const _Img = styled.img`
transition: .5s ease all; width: 100%; object-fit:cover;

`

const Article_Box_Project = styled.section`
display:flex;
flex-flow: row nowrap;
align-items:center;
justify-content:center;
width: 80%;
gap: 50px;
margin-top: 4%;
margin-bottom: 4%;
@media (max-width: 480px) {
   flex-flow: column;
  }

`
const _Box_Column = styled.div`
display:flex;
flex-flow: column;
padding: 1%;
align-items:flex-start;
gap: 19px;
justify-content:center;

`
const _Label = styled.p`
font-size: 0.94rem;
text-align:left;
line-height: 180%;
font-family: "Plus Jakarta Sans", sans-serif;
color: #8F8F91;
@media (max-width: 480px) {

}`

const _Group_Cards = styled.div`
display:flex;
flex-flow: row;
align-items:center;
justify-content:center;
gap: 13px;
@media (max-width: 480px) {
    justify-content: center;
  }
`

const _Card = styled.p`
background-color:#5febd647;
color:#5FEBD5;
font-family: "Plus Jakarta Sans", sans-serif;
font-size: 0.8rem;
padding: 0.6rem 1.7rem;
border-radius: 8px;
`

const Article_Button_Center = styled.div`
display:flex;
flex-flow: column nowrap;
align-items:center;
justify-content:center;
margin-bottom: 6%;
@media (max-width: 480px) {
margin-top: 7%;
margin-bottom: 7%;
  }
`

const ProjectSection = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Article>

            <Article_Title>

                <_Subtitle> {t('prosubtitle')}</_Subtitle>
                <_Title> {t('protitle')}</_Title>
                <_GroupAncora href="#">
                    <_Span >
                        GitHub
                    </_Span>
                    <_Icon>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </_Icon>
                </_GroupAncora>

            </Article_Title>

            <Article_Box_Project>
                
                <_Box_Column>
                <__ContainerImg>
                    <_Img src={imggroup}>
                    </_Img>
                </__ContainerImg>
                    <_GroupAncora href="#">
                        <_Span>
                        {t('protitlen1')}
                        </_Span>
                        <_Icon>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </_Icon>
                    </_GroupAncora>
                    <_Label>
                    {t('prolabeln1')}
                    </_Label>
                    <_Group_Cards>
                        <_Card>
                            React
                        </_Card>
                        <_Card>
                            Vercel
                        </_Card>
                    </_Group_Cards>
                </_Box_Column>

                <_Box_Column>
                <__ContainerImg>
                    <_Img src={imggroup}>
                    </_Img>
                </__ContainerImg>
                    <_GroupAncora href="#">
                        <_Span>
                        {t('protitlen2')}
                        </_Span>
                        <_Icon>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </_Icon>
                    </_GroupAncora>
                    <_Label>
                    {t('subtitle')}
                    </_Label>
                    <_Group_Cards>
                        <_Card>
                            React
                        </_Card>
                        <_Card>
                            Vercel
                        </_Card>
                    </_Group_Cards>
                </_Box_Column>

                <_Box_Column>
                <__ContainerImg>
                    <_Img src={imggroup}>
                    </_Img>
                </__ContainerImg>
                    <_GroupAncora href="#">
                        <_Span>
                        {t('protitlen3')}
                        </_Span>
                        <_Icon>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </_Icon>
                    </_GroupAncora>
                    <_Label>
                    {t('subtitle')}
                    </_Label>
                    <_Group_Cards>
                        <_Card>
                            React
                        </_Card>
                        <_Card>
                            Vercel
                        </_Card>
                    </_Group_Cards>
                </_Box_Column>

            </Article_Box_Project>
            <Article_Button_Center>
                <Button 
                text={t('buttonpro')}
                bgColor="#1D1D1D"
                textColor="#FFFFFF"
                iconLeft={""} 
                iconRight= {""}
                borderColor="#343434"
                paddingl="60px"
                paddingr="60px"
                paddingt="15px"
                paddingb="15px"
                />
            </Article_Button_Center>
            <AppSection />
        </Article>
    )
}

export default ProjectSection;