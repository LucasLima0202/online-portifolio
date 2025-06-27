import styled from "styled-components";
import React from "react";

interface ToolsProps {
  centerLogo: string;
  altText?: string;
  icons: string[];
}
const ToolsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div<{ justify?: string }>`
  display: flex;
  gap: 24px;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: center;

  @media (max-width: 768px) {
    gap: 16px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

const ToolBox = styled.div`
  background: #1D1D1D;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 142px;

  @media (max-width: 768px) {
    width: 95px;
    height: 95px;
  }
`;

const ReactCenter = styled(ToolBox)`
  /* box-shadow: 0 0 6px rgba(248, 248, 248, 0.67); */
`;

const ToolImage = styled.img`
  width: 96px;
  height: auto;
  max-height: 84px;
  object-fit: contain;
`;

const ToolsTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const FadeSide = styled.div<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 180px;
  z-index: 2;
  pointer-events: none;

  ${({ side }) =>
    side === 'left'
      ? `
    left: 0;
    background: linear-gradient(to right, #151515 50%, transparent);
  `
      : `
    right: 0;
    background: linear-gradient(to left, #151515 50%, transparent);
  `}
`;

const Tools = ({ centerLogo, altText = "Tool",icons  }: ToolsProps) => {
  return (
    <ToolsSection>
       <FadeSide side="left" />
       <FadeSide side="right" />
      <GridWrapper>
       <Row justify="center">
  {[0, 1, 2, 3].map((i) => (
    <ToolBox key={`row1-${i}`}>
      {icons[i] && <ToolImage src={icons[i]} alt={`Tool ${i + 1}`} />}
    </ToolBox>
  ))}
</Row>

<Row justify="center">
  {[4, 5, 6, 7, 8].map((i) =>
    i === 6 ? (
      <ReactCenter key={`row2-${i}`}>
        <ToolImage src={centerLogo} alt={altText} />
      </ReactCenter>
    ) : (
      <ToolBox key={`row2-${i}`}>
        {icons[i] && <ToolImage src={icons[i]} alt={`Tool ${i + 1}`} />}
      </ToolBox>
    )
  )}
</Row>

<Row justify="center">
  {[9, 10, 11, 12].map((i) => (
    <ToolBox key={`row3-${i}`}>
      {icons[i] && <ToolImage src={icons[i]} alt={`Tool ${i + 1}`} />}
    </ToolBox>
  ))}
</Row>
      </GridWrapper>
    </ToolsSection>
  );
};

export default Tools;
