import React, { useEffect } from "react";
import styled from "styled-components";
import NavbarMenus from "./NavbarMenus";
import navbarLogo from "../../image/navbar-logo.png";

const NavbarWrap = styled.div`
  width: 100%;
  height: 80px;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogoWrap = styled.div`
  width: 45px;
  height: 45px;
`;

const NavbarLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  return (
    <NavbarWrap>
      <NavbarLogoWrap>
        <NavbarLogo src={navbarLogo} />
      </NavbarLogoWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
};
export default Navbar;