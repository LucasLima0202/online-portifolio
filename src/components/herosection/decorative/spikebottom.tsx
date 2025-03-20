import styled from "styled-components";
import SpikeTopSvg from "../../../assets/svg/BottomCell.svg";

const SpikeSection = styled.div`
  position: absolute; /* Fixado na tela */
  bottom: -22%;
  left: 66%;
  width: 100%;
  z-index: -1; /* Agora ele fica atrás dos outros elementos */
`;

const SpikeTop = styled.img`
  width: 45%; /* Para cobrir toda a largura */
`;

const SpikeDecorativeBottom = () => {
  return (
    <SpikeSection>
      <SpikeTop src={SpikeTopSvg} />
    </SpikeSection>
  );
};

export default SpikeDecorativeBottom;
