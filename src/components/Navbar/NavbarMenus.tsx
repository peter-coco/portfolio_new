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
`;

const NavbarMenus = () => {
  const skillsRef = useSelector<GlobalState, typeof useRef>(
    (state) => state.skillsRef
  );

  const h1Ref = useRef<HTMLHeadingElement>(null);

  // 클릭하면 이동시키는 로직
  const handleIndexClick = () =>
    useLayoutEffect(() => {
      h1Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

  return (
    <NavbarMenusWrap ref={h1Ref}>
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
