import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NavbarMenus from "./NavbarMenus";
import navbarLogo from "../../image/navbar-logo.png";
import NavbarOnOffMenuBtn from "./NavbarOnOffMenuBtn";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";

const NavbarWrap = styled.div`
  position: sticky;
  top: 0;
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
    /* height: 250px; */
    padding: 20px 20px;
  }
`;

const NavbarLogoWrap = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  @media (max-width: 1000px) {
    position: absolute;
    top: 20px;
    left: 30px;
    margin-bottom: 20px;
    z-index: 2;
  }
`;

const NavbarLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const Navbar = ({
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
  const [posY, setPosY] = useState(window.scrollY);
  const posYLimitation = 10;

  useEffect(() => {
    const setScrollY = () => {
      setPosY(window.pageYOffset);
    };
    window.addEventListener("scroll", setScrollY);
    return () => window.removeEventListener("scroll", setScrollY);
  }, []);

  const srolltoTopFunc = useCallback(() => {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <NavbarWrap
      style={{
        zIndex: posY > posYLimitation ? 1 : 0,
        backgroundColor: posY > posYLimitation ? "#1b1b1b" : "",
      }}
    >
      <NavbarLogoWrap onClick={srolltoTopFunc}>
        <NavbarLogo src={navbarLogo} />
      </NavbarLogoWrap>
      <NavbarMenus
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        worksRef={worksRef}
        carrerRef={carrerRef}
      />
      <NavbarOnOffMenuBtn />
    </NavbarWrap>
  );
};
export default Navbar;
