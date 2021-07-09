import React, { useEffect } from "react";
import styled from "styled-components";

import MainAbout from "./MainAbout";
import MainCarrer from "./MainCarrer";
import MainHead from "./MainHead";
import MainSkills from "./MainSkills";
import MainWorks from "./MainWorks";

const MainWrap = styled.div`
  width: 100%;
`;

const Main = ({
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
  return (
    <MainWrap>
      <MainHead aboutRef={aboutRef} />
      <MainAbout aboutRef={aboutRef} />
      <MainSkills skillsRef={skillsRef} />
      <MainWorks worksRef={worksRef} />
      <MainCarrer carrerRef={carrerRef} />
    </MainWrap>
  );
};
export default Main;
