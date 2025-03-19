// Navbar.tsx
import React from "react";
import {
  Navbar,
  NavContainer,
  Checkbox,
  HamburgerLines,
  Line1,
  Line2,
  Line3,
  Logo,
  MenuItems,
  MenuItem,
  NavSeparator,
  NavSpace,
  LanguageToggleBox,
} from "./navbar.styled";
import LanguageToggle from "../languagetoggle/languagetoggle";


const NavbarComponent = () => {
  return (
    <Navbar>
      <NavContainer>
        {/* Checkbox para controlar o menu */}
        <Checkbox />
        {/* Botão hamburger */}
        <HamburgerLines>
          <Line1 />
          <Line2 />
          <Line3 />
        </HamburgerLines>
        {/* Logo */}
        <NavSeparator>
        <NavSpace>

        </NavSpace>
        <Logo>
          <img src="templogo.svg"/>
          <h1> Lm4s</h1>
        </Logo>
        <LanguageToggleBox>
            <LanguageToggle/>
        </LanguageToggleBox>
        </NavSeparator>

        {/* Menu */}
        <MenuItems>
          <MenuItem>
            <a href="#">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="#">About</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Blogs</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Portfolio</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Contact</a>
          </MenuItem>
        </MenuItems>
        
      </NavContainer>
    </Navbar>
  );
};

export default NavbarComponent;
