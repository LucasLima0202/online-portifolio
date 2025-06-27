// Navbar.tsx
import React, { useEffect, useState } from "react";
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
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <NavContainer>
        {/* Checkbox para controlar o menu */}
        {/* Logo */}
        <NavSeparator>

        <Logo>
          <h1> LCS</h1>
        </Logo>
        <LanguageToggleBox>
            <LanguageToggle/>
        </LanguageToggleBox>
        </NavSeparator>

      
        
      </NavContainer>
    </Navbar>
  );
};

export default NavbarComponent;
