import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, bgColor, textColor, iconLeft, iconRight }:any) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor}>
     {iconLeft && <img src={iconLeft} alt="Left Icon" />}
      {text}
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 28px;
  border: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  border-radius: 35px;
  font-weight:600;
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: ${(props) => props.textColor || "#fff"};
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
