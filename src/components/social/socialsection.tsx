import styled from 'styled-components';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import backgroundImage from "../../assets/img/LineBackground.png";
import Button from '../button/button';
import Linkedin from '../../assets/svg/Linkedin.svg'
import Github from '../../assets/svg/Github.svg'


const Article = styled.article`
display: flex;
justify-content:center;
align-items: center;
flex-flow: column nowrap;
background-image: url(${backgroundImage});
background-position: center;
background-repeat: no-repeat;
width:100%;
margin-bottom: 3%;
@media (max-width: 480px) {
    height: auto;
    margin-top: 1%;

  }
`
const ButtonWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: center;

  & > button {
    width: 100%;
    height: 8vh;
    text-align: center !important;
  }
`;
const Article_Title = styled.div`
display:flex;
flex-flow: column nowrap;
align-items:center;
justify-content:center;
margin-top: 5%;
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
const GroupSocial = styled.div`
display: flex;
align-items: stretch;
width: 100%;
flex-flow: row;
padding: 3% 10%;
gap: 15px;
@media (max-width: 480px) {
flex-flow: column;
padding: 2% 5%; 
}
`


const __ContactBox = styled.div`
box-sizing: border-box;
background: rgba(27, 26, 32, 0.3);
border: 1px solid #2E2E2E;
display: flex;
width: 60%;
padding: 1% 3%; 
height: auto;
@media (max-width: 480px) {
flex-flow: column;
width: 100%;
padding: 5%;

}
`


const __Separator = styled.div`
`

const __LandingBoxInfo = styled.div`
box-sizing: border-box;
background: rgba(27, 26, 32, 0.3);
border: 1px solid #2E2E2E;
display: flex;
width: 100%;
padding: 1% 3%; 
height: auto;
@media (max-width: 480px) {
flex-flow: column;
width: 100%;
padding: 5%;

}
`

const __TitleGroup = styled.div`
display: flex;
flex-flow: column;
align-items: flex-start;
justify-content: space-around;
width: 100%;
@media (max-width: 480px) {
    align-items: center !important;
    justify-content: center;

}
`


const __SmallTitle = styled.h5`
font-size: 1.3rem;
margin-top: 9%;
letter-spacing: 0%;
font-weight: 550;
font-family: "Plus Jakarta Sans", sans-serif;
color:#d1d1d1;
text-align: left;

@media (max-width: 480px) {
font-size: 1rem;
}
`


const __Span = styled.span`
font-size: 1rem;
font-weight: 500;
margin-top: 1.9%;
margin-bottom: 5%;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
color:#a7a7a7;
text-align: center;

@media (max-width: 480px) {
    font-size: 0.9rem;
    color:#6a6a6a;

}
`

const Forms = styled.form`
display: flex;
flex-flow: column;
margin-top: 6%;
align-items: flex-start;
width: 100%;
@media (max-width: 480px) {
gap: 4px;
}
`

const Line = styled.div`
width: 100%;
background-color: #2E2E2E;
height: 1px;
margin-top: 6%;
margin-bottom: 6%;
`

const __LottiesBox = styled.div`

`

const __CardBox = styled.div`
width: 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

const __Card = styled.div`
box-sizing: border-box;
background: rgba(43, 42, 48, 0.25);
border: 1px solid #404040;
border-radius: 6px;
width: 100%;
text-align: center;
height: 9vh;
align-items: center;
justify-content: center;
color: #a7a7a7;
display: flex;
padding: 2%;
gap: 7px;
transition: all ease-in-out 0.2s;
 &:hover{
    transform: scale(1.01)
 }
`

const Input = styled.input`
width: 100%;
box-sizing: border-box;
border: 1px solid #404040;
border-radius: 3px;
  height: 54px;
  outline: none;
  padding: 16.5px 14px;
  color: #8b8b8b;

  font-size: 15px;
  transition: 0.3s ease-out;
 &:hover, &:focus{
    border: 1px solid #8b8b8b;
 }
`


const InpTextArea = styled.textarea`
width: 100%;
box-sizing: border-box;
border: 1px solid #404040;
border-radius: 3px;
  height: 125px;
  outline: none;
  padding: 16.5px 14px;
  color: #8b8b8b;
  resize: none;
  font-size: 15px;
  transition: 0.3s ease-out;
 &:hover, &:focus{
    border: 1px solid #8b8b8b;
 }
`

const Label = styled.label`
  padding: 0rem 0.4rem;
  z-index: 1;
  font-size: 0.9rem;
  background-color: #201f24f5;
  font-weight: 500;
  transform: translate(16px, 8px); 
  color: #8b8b8b;
`

const __CardContainerSocial = styled.div`
display: flex;
width: 100%;
height: auto;
flex-flow: column;
gap: 20px;
margin-bottom: 5%;
`

const __CardSocial = styled.a`
box-sizing: border-box;
background: rgba(43, 42, 48, 0.25);
border: 1px solid #404040;
border-radius: 6px;
width: 100%;
display: flex;
padding: 2%;
gap: 7px;
transition: all ease-in-out 0.2s;
 &:hover{
    transform: scale(1.01)
 }
`

const ButtonType = styled.button`
    margin-top: 5%;
    display: flex;
    width: 100%;
    align-items: stretch;
    align-content: stretch;
    justify-content: center;
text-align: center;
    & > button {
        width: 100%;
        text-align: center !important;
        height: 8vh;
    }

`
const __ImgContainer = styled.div`
display: flex;
padding-left: 8%;
`
const __Img = styled.img`
`

const __TitleInfo = styled.h5`
font-size: 1rem;
font-weight: 600;
letter-spacing: 0%;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
color:#ffffff;
text-align: center;

@media (max-width: 480px) {
    font-size: 0.9rem;

}
`

const __SpanInfo = styled.span`
font-size: 0.8rem;
font-weight: 500;
font-family: "Plus Jakarta Sans", sans-serif;
text-transform:capitalize;
color:#ADADAD;
text-align: center;

@media (max-width: 480px) {
    font-size: 0.75rem;

}
`

const  __ContainerInfo = styled.div`
display: flex;
flex-flow: column;
align-items: flex-start;
justify-content: center;
gap: 2px;
`
const __LineTitle = styled.span`
width: 8%;
height: 0.86vh;
background-color: #ffffff;
border-radius: 12px;

`
const __SmanTitle = styled.h5`
font-size: 1.3rem;
letter-spacing: 0%;
font-weight: 550;
font-family: "Plus Jakarta Sans", sans-serif;
color:#d1d1d1;
text-align: left;

@media (max-width: 480px) {
font-size: 1rem;
}
`

const __GroupTitleLine = styled.div`
display: flex;
margin-top: 4%;
flex-flow: row;
gap: 14px;
width: 100%;
align-items: center;
justify-content: flex-start;
`


const SocialSection = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Article>
            <Article_Title>
                <_Subtitle> {t('socialsubtitle')}</_Subtitle>
                <_Title> {t('socialtitle')}</_Title>
            </Article_Title>
            <GroupSocial>
                <__ContactBox>
                    <__TitleGroup>
                        <__SmallTitle>
                            Entrar em contato
                        </__SmallTitle>
                        <__Span>
                            Make it Happen
                        </__Span>
                        <Forms>
                            <Label>
                                Name
                            </Label>
                            <Input type='text' />
                            <Label>
                                Email
                            </Label>
                            <Input type='email' />
                            <Label>
                                Message
                            </Label>
                            <InpTextArea />
                            <ButtonWrapper>
                            <Button
                                type="submit"
                                text='Pindorama'
                                conner="6px"
                                bgColor="#FFFFFF"
                                textColor="#151515"
                                iconLeft={''}
                                iconRight={''}
                            />
                            </ButtonWrapper>
                        </Forms>

                        <Line>
                        </Line>
                        
                        <__CardContainerSocial>
                            <__CardSocial href=''>
                                <__ImgContainer>
                                <__Img src={Linkedin} />
                                </__ImgContainer>
                                <__ContainerInfo>
                                    <__TitleInfo>Entrar em Contato</__TitleInfo>
                                    <__SpanInfo>No Linkedin</__SpanInfo>
                                </__ContainerInfo>
                            </__CardSocial>
                            <__CardSocial href=''>
                                <__ImgContainer>
                                <__Img src={Github} />
                                </__ImgContainer>
                                <__ContainerInfo>
                                    <__TitleInfo>Github</__TitleInfo>
                                    <__SpanInfo>@LucasLima0202</__SpanInfo>
                                </__ContainerInfo>
                            </__CardSocial>
                        </__CardContainerSocial>

                    </__TitleGroup>
                </__ContactBox>
                <__Separator>

                </__Separator>
                <__LandingBoxInfo>
                    <__TitleGroup>

                        <__GroupTitleLine>
                        <__LineTitle></__LineTitle>
                        <__SmanTitle>
                         Build Your Landing Page
                        </__SmanTitle>
                        </__GroupTitleLine>

                 
                        <__LottiesBox>

                        </__LottiesBox>
                        <__CardBox>
                            <__Card>
                                Test
                            </__Card>
                        </__CardBox>

                        </__TitleGroup>
                </__LandingBoxInfo>
            </GroupSocial>

        </Article>
    )
}

export default SocialSection;