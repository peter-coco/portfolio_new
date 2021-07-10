import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  return (
    <NavbarOnOffMenuBtnWrap
      onClick={() => {
        setMenuBtnToggle((pre) => !pre);
      }}
    >
      <MenuBtn>
        <MenuBtnBar style={{
          top: menuBtnToggle ? "10px" : "0px",
          transform: menuBtnToggle ? "rotate(-45deg)" : "",
          transition: "all 0.3s ease",
          transitionProperty: menuBtnToggle ? "transform, top" : "top,transform",
          transitionDelay: "0.3s, 0s",
      }}/>
        <MenuBtnBar style={{
          top: menuBtnToggle ? "0px" : "50%",
          transition: "all 0.3s ease",
          display : menuBtnToggle ? "none" : "block",
      }}/>
        <MenuBtnBar style={{
          top: menuBtnToggle ? "10px" : "20px",
          transform: menuBtnToggle ? "rotate(45deg)" : "",
          transition: "all 0.3s ease",
          transitionProperty: menuBtnToggle ? "transform, top" : "top,transform",
          transitionDelay: "0.3s, 0s",
      }}/>
      </MenuBtn>
    </NavbarOnOffMenuBtnWrap>
  )
};
export default NavbarOnOffMenuBtn;
