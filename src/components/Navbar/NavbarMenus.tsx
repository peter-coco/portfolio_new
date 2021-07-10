import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";

const NavbarMenusWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1b1b1b;
  @media (max-width: 1000px) {
    position: absolute;
    padding-top: 60px;
    max-width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    gap: 10px;
    /* height: 230px; */
    background-color: #1b1b1b;
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
  const menuBtnToggle = useSelector<GlobalState, boolean>(
    (state) => state.menubarToggle
  );
  const windowWidth = useSelector<GlobalState, number>(
    (state) => state.windowWidth
  );

  const dispatch = useDispatch();

  const offsetY = -100;
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (menuBtnToggle) {
      dispatch({
        type: Actions.TOGGLE_MENU_BAR,
      });
    }
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (menuBtnToggle) {
      dispatch({
        type: Actions.TOGGLE_MENU_BAR,
      });
    }
  };

  const scrollToWorks = () => {
    worksRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (menuBtnToggle) {
      dispatch({
        type: Actions.TOGGLE_MENU_BAR,
      });
    }
  };
  const scrollToCarrer = () => {
    carrerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (menuBtnToggle) {
      dispatch({
        type: Actions.TOGGLE_MENU_BAR,
      });
    }
  };

  useEffect(() => {
    function resizeEventFunc() {
      dispatch({
        type: Actions.SET_WINDOW_WIDTH,
        payload: { windowWidth: window.innerWidth },
      });
    }

    window.addEventListener("resize", resizeEventFunc);
    return () => window.removeEventListener("resize", resizeEventFunc);
  }, []);

  return (
    <NavbarMenusWrap
      style={{
        opacity: menuBtnToggle ? "1" : windowWidth > 1000 ? "1" : "0",
        visibility: menuBtnToggle
          ? "visible"
          : windowWidth > 1000
          ? "visible"
          : "hidden",
        clipPath: menuBtnToggle
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : windowWidth > 1000
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        height: windowWidth > 1000 ? "70px" : menuBtnToggle ? "230px" : "0px",
        transition:
          windowWidth > 1000
            ? menuBtnToggle
              ? ""
              : ""
            : menuBtnToggle
            ? "all 300ms"
            : "all 300ms",
        zIndex: menuBtnToggle ? 1 : windowWidth > 1000 ? 1 : 0,
      }}
    >
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
