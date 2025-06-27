import styled from "styled-components";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Tools from "../projects/tools";
import backgroundImage from "../../assets/img/Desktop - 45-invisble.png";
import Button from "../button/button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import imggroup from "../../assets/img/imgtest.png";
import gitlogo from "../../assets/svg/Github.svg";
import layout from "../../assets/svg/layout.svg";
import tools from "../../assets/svg/tool.svg";

const Article = styled.article`
  display: flex;
  padding-top: 5%;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background-color:#151515;
  /* background-image: url(${backgroundImage}); */
  width: 100%;
  @media (max-width: 480px) {
    height: auto;
  }
`;

const Article_Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const _Subtitle = styled.h4`
  font-size: 1rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-transform: capitalize;
  color: #8F8F91;
  font-weight: 400;
`;

const _Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 13%;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-transform: capitalize;
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 4px 11.1px rgba(255, 255, 255, 0.54);
  margin-top: 7%;
`;

const _Span = styled.span`
  font-size: 1rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  color: #C4C3C5;
`;

const _Icon = styled.div`
  display: flex;
  svg {
    color: #C4C3C5;
  }
`;
const _GroupAncora = styled.a<{ disabled?: boolean }>`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  justify-content: space-between;
  flex-flow: row;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 5%;
`;


const Article_Box_Project = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin-top: 4%;
  margin-bottom: 4%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const _Box_Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  gap: 16px;
  padding: 0px;
  border-radius: 16px;
`;

const __ContainerImg = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const _Img = styled.img`
  transition: 0.5s ease all;
  width: 100%;
  background-color: #1D1D1D;
  object-fit: cover;
`;

const _Label = styled.p`
  font-size: 0.94rem;
  line-height: 160%;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #8F8F91;
  text-align: left;
`;

const _Group_Cards = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const _Card = styled.p`
  background-color: #5febd647;
  color: #5FEBD5;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.8rem;
  padding: 0.6rem 1.7rem;
  border-radius: 8px;
`;

const Article_Button_Center = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
`;

const TabController = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 4%;
  margin-bottom: 4%;
  justify-content: center;
  align-items: center;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:40vw;
  height:120px;
  gap: 8px;
  margin-bottom: 10%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  background: ${({ isActive }) => (isActive ? '#FFFFFF' : '#151515')};

  color: ${({ isActive }) => (isActive ? '#000000' : '#FFFFFF')};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;

  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: ${({ isActive }) =>
    isActive
      ? '0px 0px 15px 5px rgba(255, 255, 255, 0.25)'
      : 'none'};

  img {

    filter: ${({ isActive }) =>
    isActive
      ? 'brightness(0) saturate(100%) invert(0) sepia(0) saturate(0%) hue-rotate(0deg) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.6))'
      : 'brightness(0) saturate(100%) invert(1) sepia(0) saturate(0%) hue-rotate(0deg) drop-shadow(0px 1px 2px rgba(255, 255, 255, 0.3))'};
  transition: filter 0.3s ease;
  }

  span,
  svg {
    text-transform: capitalize; 
    text-shadow: ${({ isActive }) =>
      isActive
        ? '0px 1px 2px rgba(0, 0, 0, 0.6)'
        : '0px 1px 2px rgba(255, 255, 255, 0.2)'};
    transition: text-shadow 0.3s ease;
  }

  &:hover {
    opacity: 0.9;
  }
`;
const IconImg = styled.img`
  width: 26px;
  height: 26px;
  display: inline-block;
  vertical-align: middle;
`;
const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 24px;
  margin-top: 2%;
  width: 80%;
  justify-items: center;
`;

const ToolItem = styled.div`
  background-color: #1d1d1d;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  img {
    width: 48px;
    height: 48px;
  }
`;

const FadeInWrapper = styled.div`
  animation: fadein 0.5s ease-in-out;
  @keyframes fadein {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const ProjectSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [tab, setTab] = useState<'projects' | 'tools'>('projects');

  return (
    <Article>
      <Article_Title>
       <TabController>
  <TabButton isActive={tab === 'projects'} onClick={() => setTab('projects')}>
        <IconImg src={layout} alt="Layout icon" />
    {t('Projects')}
  </TabButton>
  <TabButton isActive={tab === 'tools'} onClick={() => setTab('tools')}>
      <IconImg src={tools} alt="Tools icon" />
    {t('Tools')}
  </TabButton>
</TabController>
        <_Subtitle>
          {tab === 'projects' ? t('prosubtitle') : t('appsubtitle')}
        </_Subtitle>
        <_Title>
          {tab === 'projects' ? t('protitle') : t('appsectiontitle')}
        </_Title>
        <_GroupAncora href="#" disabled={tab === 'tools'}>
          <_Span>GitHub</_Span>
          <_Icon>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </_Icon>
        </_GroupAncora>
      </Article_Title>

      {tab === 'projects' && (
        <FadeInWrapper>
          <Article_Box_Project>
            {[1, 2, 3].map((i) => (
              <_Box_Column key={i}>
                <__ContainerImg>
                  {/* <_Img src={imggroup} /> */}<_Img  alt="none" />
                </__ContainerImg>
                <_GroupAncora href="#">
                  <_Span>{t(`protitlen${i}`)}</_Span>
                  <_Icon>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </_Icon>
                </_GroupAncora>
                <_Label>{t(`prolabeln${i}`)}</_Label>
                <_Group_Cards>
                  <_Card>React</_Card>
                  <_Card>Vercel</_Card>
                </_Group_Cards>
              </_Box_Column>
            ))}
          </Article_Box_Project>

          {/* <Article_Button_Center>
            <Button
              text={t('buttonpro')}
              bgColor="#1D1D1D"
              textColor="#FFFFFF"
              iconLeft=""
              iconRight=""
              borderColor="#343434"
              paddingl="60px"
              paddingr="60px"
              paddingt="15px"
              paddingb="15px"
            />
          </Article_Button_Center> */}
        </FadeInWrapper>
      )}

      {tab === 'tools' && (
        <FadeInWrapper>
           <Tools
            centerLogo={gitlogo}
            altText="React"
            icons={[
                gitlogo, gitlogo, gitlogo, gitlogo,
                gitlogo, gitlogo,gitlogo,
                gitlogo, gitlogo,gitlogo,
                gitlogo, gitlogo, gitlogo, gitlogo,gitlogo
            ]}
            />
        </FadeInWrapper>
    )}
    </Article>
  );
};

export default ProjectSection;
