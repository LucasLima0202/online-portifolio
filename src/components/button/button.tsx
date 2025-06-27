import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StyledButtonProps {
  $paddingl?: string;
  $paddingr?: string;
  $paddingt?: string;
  $paddingb?: string;
  $bgColor?: string;
  $textColor?: string;
  $borderColor?: string;
  $conner?: string;
  $glow?: boolean;
}

interface ComponentProps {
  paddingl?: string;
  paddingr?: string;
  paddingt?: string;
  paddingb?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  iconLeft?: string;
  iconRight?: any;
  conner?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  $glow?: boolean;
}

const Button: React.FC<ComponentProps> = ({
  paddingl,
  paddingr,
  paddingt,
  paddingb,
  bgColor,
  textColor,
  borderColor,
  conner,
  iconLeft,
  iconRight,
  text,
  type = "button",
  $glow = false,
}) => {
  return (
    <Wrapper>
      {$glow && <Glow />}
      <StyledButton
        type={type}
        $paddingl={paddingl}
        $paddingr={paddingr}
        $paddingt={paddingt}
        $paddingb={paddingb}
        $bgColor={bgColor}
        $textColor={textColor}
        $borderColor={borderColor}
        $conner={conner}
      >
        {iconLeft && <img src={iconLeft} alt="Left Icon" />}
        {text}
        {iconRight && <FontAwesomeIcon icon={iconRight} />}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const Glow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(253, 253, 253, 0.2), rgba(254, 254, 254, 0.2));
  filter: blur(19px);
  border-radius: 9999px;
  z-index: 0;
`;

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding-right: ${(props) => props.$paddingr || "28px"};
  padding-left: ${(props) => props.$paddingl || "28px"};
  padding-top: ${(props) => props.$paddingt || "9px"};
  padding-bottom: ${(props) => props.$paddingb || "9px"};

  border: solid 2px;
  border-radius: ${(props) => props.$conner || "35px"};
  border-color: ${(props) => props.$borderColor || "#ffffffa4"};

  background-color: ${(props) => props.$bgColor || "#007bff"};
  color: ${(props) => props.$textColor || "#fff"};

  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  transition: ease-in-out all 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }

  img {
    width: 22px;
    height: 22px;
  }

  svg {
    font-size: 20px;
  }
`;

export default Button;
