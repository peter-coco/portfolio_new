import React, { useEffect } from "react";
import styled from "styled-components";

const NavbarMenusWrap = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavbarMenu = styled.div`
  font-size: 20px;
  color: white;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;

const NavbarMenus = () => {
  return (
    <NavbarMenusWrap>
      {/* <NavbarMenu>HOME</NavbarMenu> */}
      <NavbarMenu>ABOUT</NavbarMenu>
      <NavbarMenu>SKILLS</NavbarMenu>
      <NavbarMenu>WORKS</NavbarMenu>
      <NavbarMenu>CARRER</NavbarMenu>
      {/* <NavbarMenu>CONTACT</NavbarMenu> */}
    </NavbarMenusWrap>
  );
};
export default NavbarMenus;
