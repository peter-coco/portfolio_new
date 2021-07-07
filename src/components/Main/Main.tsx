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

const Main = () => {
  return (
    <MainWrap>
      <MainHead />
      <MainAbout />
      <MainSkills />
      <MainWorks />
      <MainCarrer />
    </MainWrap>
  );
};
export default Main;
