import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";

const NavbarOnOffMenuBtnWrap = styled.div`
  width: 30px;
  height: 20px;
  position: absolute;
  right: 20px;
  display: none;
  @media (max-width: 1000px) {
    right: 30px;
    top: 30px;
    display: block;
    z-index: 2;
    cursor: pointer;
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
  const menuBtnToggle = useSelector<GlobalState, boolean>(
    (state) => state.menubarToggle
  );

  const dispatch = useDispatch();
  return (
    <NavbarOnOffMenuBtnWrap
      onClick={() => {
        dispatch({
          type: Actions.TOGGLE_MENU_BAR,
        });
      }}
    >
      <MenuBtn>
        <MenuBtnBar
          style={{
            top: menuBtnToggle ? "10px" : "0px",
            transform: menuBtnToggle ? "rotate(-45deg)" : "",
            transition: "all 0.3s ease",
            transitionProperty: menuBtnToggle
              ? "transform, top"
              : "top,transform",
            transitionDelay: "0.3s, 0s",
          }}
        />
        <MenuBtnBar
          style={{
            top: menuBtnToggle ? "0px" : "50%",
            transition: "all 0.3s ease",
            display: menuBtnToggle ? "none" : "block",
          }}
        />
        <MenuBtnBar
          style={{
            top: menuBtnToggle ? "10px" : "20px",
            transform: menuBtnToggle ? "rotate(45deg)" : "",
            transition: "all 0.3s ease",
            transitionProperty: menuBtnToggle
              ? "transform, top"
              : "top,transform",
            transitionDelay: "0.3s, 0s",
          }}
        />
      </MenuBtn>
    </NavbarOnOffMenuBtnWrap>
  );
};
export default NavbarOnOffMenuBtn;
