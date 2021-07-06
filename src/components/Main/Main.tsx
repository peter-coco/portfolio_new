import React, { useEffect } from "react";
import styled from "styled-components";

import MainHead from "./MainHead";

const MainWrap = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrap>
      <MainHead />
    </MainWrap>
  );
};
export default Main;
