import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a animação de loop
const loop = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
`;

// Container principal
const AppContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Container com overflow
const TagList = styled.div`
  width: 70%;
  max-width: 90vw;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
`;

// Linha animada
const LoopSlider = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

// Container interno com animação
const Inner = styled.div`
  display: flex;
  animation: ${loop} linear infinite;
  animation-duration: var(--duration);
  animation-direction: var(--direction);
  gap: 15px;
`;

// Card individual — prop `$isLast` (transient) para evitar warnings
const Tag = styled.div<{ $isLast?: boolean }>`
  box-sizing: border-box;
  background: #1b1a1e;
  border: 1px solid rgba(57, 57, 57, 0.897);
  backdrop-filter: blur(1.6px);
  border-radius: 4px;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.4rem;
  text-align: center;

  box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 
              0 0.1rem 0.5rem rgb(0 0 0 / 30%), 
              0 0.2rem 1.5rem rgb(0 0 0 / 40%);

  span {
    font-size: 0.4rem;
    color: #64748b;
  }
`;

// Efeito de fade nas laterais
const Fade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #201F24,
    transparent 30%,
    transparent 70%,
    #201F24
  );
  position: absolute;
  inset: 0;
`;

// Dados
const tags = ["JavaScript", "webdev", "Typescript", "Next.js", "UI/UX", "Mei"];

const rowConfigs = [
  { duration: '15451ms', direction: 'normal' },
  { duration: '19260ms', direction: 'reverse' },
  { duration: '10449ms', direction: 'normal' },
  { duration: '16638ms', direction: 'reverse' }
];

// Componente principal
const AppSection = () => {
  return (
    <AppContainer>
      <TagList>
        {rowConfigs.map((config, rowIndex) => (
          <LoopSlider
            key={rowIndex}
            style={{ '--duration': config.duration, '--direction': config.direction } as React.CSSProperties}
          >
            <Inner>
              {/* Conjunto original */}
              {tags.map((tag, index) => (
                <Tag key={`row-${rowIndex}-tag-${index}`} $isLast={index === tags.length - 1}>
                  <span>#</span> {tag}
                </Tag>
              ))}
              {/* Duplicata para loop */}
              {tags.map((tag, index) => (
                <Tag key={`row-${rowIndex}-tag-dup-${index}`} $isLast={index === tags.length - 1}>
                  <span>#</span> {tag}
                </Tag>
              ))}
            </Inner>
          </LoopSlider>
        ))}
        <Fade />
      </TagList>
    </AppContainer>
  );
};

export default AppSection;
