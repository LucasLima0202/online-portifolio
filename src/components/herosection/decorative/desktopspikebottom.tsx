import styled from "styled-components";
import SpikeTopSvg from "../../../assets/svg/spikebottom.svg";

const SpikeSection = styled.div`
  position: absolute; /* Fixado na tela */ 
  bottom: 0%;   
  width: 100%;
  left: 70%;
  z-index: -1; /* Agora ele fica atrás dos outros elementos */
`;

const SpikeTop = styled.img`
  width: 42%; /* Para cobrir toda a largura */
`;

const DesktopSpikeBottom = () => {
  return (
    <SpikeSection>
      <SpikeTop src={SpikeTopSvg} />
    </SpikeSection>
  );
};

export default DesktopSpikeBottom;
