import React, { useEffect } from "react";
import styled from "styled-components";
import MainCarrerLists from "./MainCarrerLists";

const MainCarrerWrap = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 0px auto;
  margin-top: 208px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainCarrerTitleWrap = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

const MainCarrerTitle = styled.div`
  color: #f2c94c;
  font-size: 40px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
const MainCarrerTitleBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #c4c4c4;
`;

const MainCarrer = () => {
  return (
    <MainCarrerWrap>
      <MainCarrerTitleWrap>
        <MainCarrerTitle>CARRER</MainCarrerTitle>
        <MainCarrerTitleBar></MainCarrerTitleBar>
      </MainCarrerTitleWrap>
      <MainCarrerLists />
    </MainCarrerWrap>
  );
};
export default MainCarrer;
