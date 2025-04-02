import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Children } from "react";

interface ButtonProps {
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
  children: React.ReactNode;  
}
const Button: React.FC<ButtonProps> = ({   
  paddingl,
  paddingr,
  paddingt,
  conner,
  paddingb,
  bgColor,
  textColor,
  borderColor,
  iconLeft,
  iconRight,
  text,
}:any) => {
  return (
    <StyledButton conner={conner} paddingt={paddingt} paddingb={paddingb} paddingl={paddingl} paddingr={paddingr} bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
     {iconLeft && <img src={iconLeft} alt="Left Icon" />}
      {text}
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  justify-content: center;
  padding-right: ${(props) => props.paddingr || "28px"};
  padding-left: ${(props) => props.paddingl || "28px"};
  padding-top: ${(props) => props.paddingt || "9px"};
  padding-bottom: ${(props) => props.paddingb || "9px"};
  border: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight:600;
  border: solid 2px;
  border-radius: ${(props) => props.conner || "35px"};
  border-color:  ${(props) => props.borderColor || "#ffffffa4"};
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: ${(props) => props.textColor || "#fff"};
  font-size: 16px;
  cursor: pointer;
  transition: ease-in-out all 0.2s;
  &:hover {
    opacity: 0.9;
    transform: scale(1.03)
  }
`;

export default Button;
