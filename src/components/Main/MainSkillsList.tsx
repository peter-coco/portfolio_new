import React, { useEffect } from "react";
import styled from "styled-components";

const MainSkillsListsWrap = styled.div`
  width: 100%;
  display: flex;
`;
const MainSkillListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainSkillTitleWrap = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const MainSkillTitle = styled.div`
  color: #f2c94c;
  font-size: 18px;
`;
const MainSkillTitleBar = styled.div`
  width: 150px;
  height: 4px;
  background-color: #c4c4c4;
`;
const SkillListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Skill = styled.img`
  width: 50px;
  height: 50px;
  color: white;
`;

const MainSkillsLists = () => {
  const skillList = [["Front-End", ["html", "css", "javaScript"]]];

  return (
    <MainSkillsListsWrap>
      <MainSkillListWrap>
        <MainSkillTitleWrap>
          <MainSkillTitle>Front-End</MainSkillTitle>
          {/* <MainSkillTitleBar /> */}
        </MainSkillTitleWrap>
        <SkillListWrap>
          <Skill src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png" />
          <Skill src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png" />
          <Skill src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png" />
          <Skill src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png" />
        </SkillListWrap>
      </MainSkillListWrap>
    </MainSkillsListsWrap>
  );
};
export default MainSkillsLists;
