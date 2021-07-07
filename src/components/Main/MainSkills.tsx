import React, { useEffect } from "react";
import styled from "styled-components";
import MainSkillsList from "./MainSkillsList";

const MainSkillsWrap = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 0px auto;
  margin-top: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainSkillsTitleWrap = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

const MainSkillsTitle = styled.div`
  color: #f2c94c;
  font-size: 40px;
`;
const MainSkillsTitleBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #c4c4c4;
`;

const MainSkills = () => {
  return (
    <MainSkillsWrap>
      <MainSkillsTitleWrap>
        <MainSkillsTitle>SKILLS</MainSkillsTitle>
        <MainSkillsTitleBar></MainSkillsTitleBar>
      </MainSkillsTitleWrap>
      <MainSkillsList />
    </MainSkillsWrap>
  );
};
export default MainSkills;
