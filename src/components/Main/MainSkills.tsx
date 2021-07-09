import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";
import MainSkillsList from "./MainSkillsList";

const MainSkillsWrap = styled.div`
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
  color: #fff;
  font-size: 40px;
  font-family: "Noto Sans KR";
  font-weight: 700;
`;
const MainSkillsTitleBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #c4c4c4;
`;

const MainSkills = ({
  skillsRef,
}: {
  skillsRef: React.RefObject<HTMLHeadingElement>;
}) => {
  return (
    <MainSkillsWrap ref={skillsRef}>
      <MainSkillsTitleWrap>
        <MainSkillsTitle>SKILLS</MainSkillsTitle>
        <MainSkillsTitleBar></MainSkillsTitleBar>
      </MainSkillsTitleWrap>
      <MainSkillsList />
    </MainSkillsWrap>
  );
};
export default MainSkills;
