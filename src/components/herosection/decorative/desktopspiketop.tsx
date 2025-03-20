import styled from "styled-components";
import SpikeTopSvg from "../../../assets/svg/spiketop.svg";

const SpikeSection = styled.div`
  position: absolute; /* Fixado na tela */ 
  top: -22%;   
  width: 100%;
  left: 1.2%;
  z-index: -1; /* Agora ele fica atrás dos outros elementos */
`;

const SpikeTop = styled.img`
  width: 37%; /* Para cobrir toda a largura */
`;

const DesktopSpikeTop = () => {
  return (
    <SpikeSection>
      <SpikeTop src={SpikeTopSvg} />
    </SpikeSection>
  );
};

export default DesktopSpikeTop;
