import React, { useEffect } from "react";
import styled from "styled-components";
import NavbarMenus from "./NavbarMenus";
import navbarLogo from "../../image/navbar-logo.png";
import NavbarOnOffMenuBtn from "./NavbarOnOffMenuBtn";

const NavbarWrap = styled.div`
  width: 100%;
  height: 80px;
  max-width: 830px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 250px;
    padding: 20px 20px;
  }
`;

const NavbarLogoWrap = styled.div`
  width: 45px;
  height: 45px;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
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
      <NavbarOnOffMenuBtn />
    </NavbarWrap>
  );
};
export default Navbar;
