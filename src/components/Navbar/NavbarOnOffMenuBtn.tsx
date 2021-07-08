import React, { useEffect, useState } from "react";
import styled from "styled-components";

// #navbar-menuBtn,
// #navbar-menuBtn-active {
//   display: none;
//   position: absolute;
//   top: 50px;
//   right: 10%;
//   width: 34px;
//   height: 24px;
//   background: transparent;
//   font-size: 0px;
//   transition: all 0.3s ease 0s;
// }

// #navbar-menuBtn > i {
//   display: block;
//   position: absolute;
//   left: 0px;
//   width: 100%;
//   height: 2px;
//   background: #fff;
// }

// #navbar-menuBtn > i:nth-of-type(1) {
//   top: 0px;
//   transition: all 0.3s ease;
//   transition-property: top, transform;
//   transition-delay: 0.3s, 0s;
// }

// #navbar-menuBtn > i:nth-of-type(2) {
//   top: 50%;
//   margin-top: -1px;
//   transition: background 0.3s ease 0s;
// }

// #navbar-menuBtn > i:nth-of-type(3) {
//   top: 22px;
//   transition: all 0.3s ease;
//   transition-property: top, transform;
//   transition-delay: 0.3s, 0s;
// }

// /* navbar-menu-active */

// #navbar-menuBtn-active > i:nth-of-type(1) {
//   top: 10px;
//   transform: rotate(-45deg);
//   transition: all 0.3s ease;
//   transition-property: transform, top;
//   transition-delay: 0.3s, 0s;
// }

// #navbar-menuBtn-active > i:nth-of-type(2) {
//   display: none;
// }

// #navbar-menuBtn-active > i:nth-of-type(3) {
//   top: 10px;
//   transform: rotate(45deg);
//   transition: all 0.3s ease;
//   transition-property: transform, top;
//   transition-delay: 0.3s, 0s;
// }

const NavbarOnOffMenuBtnWrap = styled.div`
  width: 30px;
  height: 20px;
`;

const NavbarOnOffMenuBtnWrapActive = styled.div`
  width: 80px;
  height: 50px;
`;

const MenuBtnActivate = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > i:nth-of-type(1) {
    top: 10px;
    transform: rotate(-45deg);
    transition: all 0.3s ease;
    transition-property: transform, top;
    transition-delay: 0.3s, 0s;
  }
  & > i:nth-of-type(2) {
    display: none;
  }

  & > i:nth-of-type(3) {
    top: 10px;
    transform: rotate(45deg);
    transition: all 0.3s ease;
    transition-property: transform, top;
    transition-delay: 0.3s, 0s;
  }
`;

const MenuBtn = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > i:nth-of-type(1) {
    top: 0px;
    transition: all 0.3s ease;
    transition-property: top, transform;
    transition-delay: 0.3s, 0s;
  }
  & > i:nth-of-type(2) {
    top: 50%;
    transition: background 0.3s ease 0s;
  }

  & > i:nth-of-type(3) {
    top: 20px;
    transition: all 0.3s ease;
    transition-property: top, transform;
    transition-delay: 0.3s, 0s;
  }
`;

const MenuBtnBar = styled.i`
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background: #fff;
`;

const NavbarOnOffMenuBtn = () => {
  const [menuBtnToggle, setMenuBtnToggle] = useState(false);

  return menuBtnToggle ? (
    <NavbarOnOffMenuBtnWrap
      onClick={() => {
        setMenuBtnToggle((pre) => !pre);
        console.log(menuBtnToggle);
      }}
    >
      <MenuBtn>
        <MenuBtnBar />
        <MenuBtnBar />
        <MenuBtnBar />
      </MenuBtn>
    </NavbarOnOffMenuBtnWrap>
  ) : (
    <NavbarOnOffMenuBtnWrap
      onClick={() => {
        setMenuBtnToggle((pre) => !pre);
        console.log(menuBtnToggle);
      }}
    >
      <MenuBtnActivate>
        <MenuBtnBar />
        <MenuBtnBar />
        <MenuBtnBar />
      </MenuBtnActivate>
    </NavbarOnOffMenuBtnWrap>
  );
};
export default NavbarOnOffMenuBtn;
