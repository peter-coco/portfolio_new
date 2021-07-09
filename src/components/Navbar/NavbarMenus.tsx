import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalState } from "../../redux/reducer";

const NavbarMenusWrap = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    height: 200px;
  }
`;

const NavbarMenu = styled.div`
  font-size: 20px;
  color: white;
  font-family: "Noto Sans KR";
  font-weight: 400;
  cursor: pointer;
`;

const NavbarMenus = ({
  skillsRef,
  aboutRef,
  worksRef,
  carrerRef,
}: {
  skillsRef: React.RefObject<HTMLHeadingElement>;
  aboutRef: React.RefObject<HTMLHeadingElement>;
  worksRef: React.RefObject<HTMLHeadingElement>;
  carrerRef: React.RefObject<HTMLHeadingElement>;
}) => {
  const scrollToSkills = () =>
    skillsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const scrollToWorks = () =>
    worksRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const scrollToCarrer = () =>
    carrerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <NavbarMenusWrap>
      {/* <NavbarMenu>HOME</NavbarMenu> */}
      <NavbarMenu onClick={scrollToAbout}>ABOUT</NavbarMenu>
      <NavbarMenu onClick={scrollToSkills}>SKILLS</NavbarMenu>
      <NavbarMenu onClick={scrollToWorks}>WORKS</NavbarMenu>
      <NavbarMenu onClick={scrollToCarrer}>CARRER</NavbarMenu>
      {/* <NavbarMenu>CONTACT</NavbarMenu> */}
    </NavbarMenusWrap>
  );
};
export default NavbarMenus;
