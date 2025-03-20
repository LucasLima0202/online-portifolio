import styled from "styled-components";
import SpikeTopSvg from "../../../assets/svg/spiketop.svg";

const SpikeSection = styled.div`
  position: absolute; /* Fixado na tela */
  top: -12%;
  right: 49%;
  width: 100%;
  z-index: -1; /* Agora ele fica atrás dos outros elementos */
`;

const SpikeTop = styled.img`
transform: rotate(8deg);
width: 87%; /* Para cobrir toda a largura */
`;

const SpikeDecorativeTop = () => {
  return (
    <SpikeSection>
      <SpikeTop src={SpikeTopSvg} />
    </SpikeSection>
  );
};

export default SpikeDecorativeTop;
