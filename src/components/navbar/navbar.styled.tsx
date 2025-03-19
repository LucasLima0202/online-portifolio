// NavbarStyles.ts
import styled from "styled-components";
// Wrapper geral da navbar
export const Navbar = styled.nav`
  width: 100%;
  display:flex;
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: #201F24;
  color: #FFFFFF;
  box-shadow: 0 1px 4px rgba(93, 91, 91, 0.15);
`;

// Container que combina as regras de .container e .nav-container

// Checkbox que controla a abertura do menu (estilizado para ficar invisível)
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
`;

// Container das linhas do hamburger
export const HamburgerLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 17px;
  left: 20px;
  height: 26px;
  width: 32px;
  z-index: 2;
`;

// Cada linha do hamburger
export const Line = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
`;



export const LanguageToggleBox = styled.div`
display: flex;
width:100%;
margin-left:3%;
justify-content: center;
img {
    width:40px;
}

`
export const NavSpace = styled.div`
width:100%;
`

export const Line1 = styled(Line)`
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
`;

export const Line2 = styled(Line)`
  transition: transform 0.2s ease-in-out;
`;

export const Line3 = styled(Line)`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
`;

// Logo exibida na navbar
export const Logo = styled.div`
display:flex;
justify-content:center;
align-items:center;
align-content:center;
height:100%;
font-size: 0.9rem;
color: #ffffff;
width:100%;

img{
   width:28px; 
}

h1{
    font-family: "Plus Jakarta Sans", sans-serif;
    padding-left:10px;
    font-weight:500;
}
`;

// Container do menu que, por padrão, fica escondido (fora da tela) e desliza para dentro
export const MenuItems = styled.ul`
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  height: 100vh;
  width: 100%;
  background-color: #201F24;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  text-align: center;
`;
export const NavSeparator = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
height:100%;

`;

export const NavContainer = styled.div`
  max-width: 1050px;
  display:flex;
  align-items:center;
  align-content:center;
  width: 100%;
  margin: auto;
  display: block;
  position: relative;
  height: 60px;

  /* Quando o checkbox estiver marcado, exibe o menu e transforma as linhas */
  ${Checkbox}:checked ~ ${MenuItems} {
    transform: translateX(0);
  }

  ${Checkbox}:checked ~ ${HamburgerLines} ${Line1} {
    transform: rotate(45deg);
  }

  ${Checkbox}:checked ~ ${HamburgerLines} ${Line2} {
    transform: scaleY(0);
  }

  ${Checkbox}:checked ~ ${HamburgerLines} ${Line3} {
    transform: rotate(-45deg);
  }

  ${Checkbox}:checked ~ ${Logo} {
visibility:visible;  }
`;



// Cada item do menu
export const MenuItem = styled.li`
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  list-style: none;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
    &:hover {
      font-weight: bolder;
    }
  }
`;
