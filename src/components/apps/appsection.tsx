import styled from 'styled-components';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Boxgroup from './boxgroup/boxgroup';

const Article = styled.article`
display: flex;
justify-content:center;
align-items: center;
flex-flow: column nowrap;
width:100%;
margin-bottom: 3%;
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


const SectionFull = styled.div`
display: flex;
flex-flow: column;
width: 80%;
align-items: center;
@media (max-width: 480px) {
display: none;
  }
`

const LineApp = styled.div`
    display: flex;
    margin-top: 3%;
    width: 90%;
    justify-content: space-evenly;
    gap: 20px;
`

const SecondApp = styled.div`
        display: flex;
    margin-top: 3%;
    width: 100%;
    justify-content: space-between;
    gap: 15px;
`

const SectionMobile = styled.div`
display: none;
flex-flow: column;
width: 90%;
align-items: center;
@media (max-width: 480px) {
display: flex;
  }
`

const LineAppMobile = styled.div`
    display: flex;
    margin-top: 3%;
    width: 90%;
    justify-content: space-evenly;
    margin-bottom: 3%;
`

const SecondAppMobile = styled.div`
    display: flex;
    margin-top: 3%;
    width: 93%;
    justify-content: space-around;
    margin-bottom: 3%;

`


const AppSection = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Article>
            <Article_Title>
                <_Subtitle> {t('appsubtitle')}</_Subtitle>
                <_Title> {t('appsectiontitle')}</_Title>
            </Article_Title>
            <SectionFull>
                <LineApp>
                    {[...Array(9)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </LineApp>
                <SecondApp>
                {[...Array(10)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </SecondApp>
                <LineApp>
                {[...Array(9)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </LineApp>
                <SecondApp>
                {[...Array(10)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </SecondApp>
                <SecondApp>

                </SecondApp>
            </SectionFull>

            <SectionMobile>
                <LineAppMobile>
                    {[...Array(3)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </LineAppMobile>
                <SecondAppMobile>
                {[...Array(3)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </SecondAppMobile>
                <LineAppMobile>
                {[...Array(3)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </LineAppMobile>
                <SecondAppMobile>
                {[...Array(3)].map((_, index) => (
                        <Boxgroup key={index} />
                    ))}
                </SecondAppMobile>
                <SecondAppMobile>

                </SecondAppMobile>
            </SectionMobile>


        </Article>
    )
}

export default AppSection;