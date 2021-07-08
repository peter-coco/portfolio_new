import React, { useEffect } from "react";
import styled from "styled-components";
import MainWorksList from "./MainWorksList";

const MainWorksWrap = styled.div`
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
const MainWorksTitleWrap = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;
const MainWorksTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: "Noto Sans KR";
  font-weight: 700;
`;
const MainWorksTitleBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #c4c4c4;
`;

const MainWorks = () => {
  return (
    <MainWorksWrap>
      <MainWorksTitleWrap>
        <MainWorksTitle>WORKS</MainWorksTitle>
        <MainWorksTitleBar />
      </MainWorksTitleWrap>
      <MainWorksList />
    </MainWorksWrap>
  );
};
export default MainWorks;
