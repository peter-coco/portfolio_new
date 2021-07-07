import React, { useEffect } from "react";
import styled from "styled-components";

import project1 from "../../image/projects3.png";

const MainWorksListWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const WorksList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const WorkImages = styled.div`
  width: 350px;
  height: 350px;
`;
const WorkImage = styled.img`
  width: 100%;
  height: 100%;
`;
const WorkText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const WorkTitle = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
`;
const WorkSummary = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;
const WorkSubscription = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 140%;
`;
const WorkLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const WorkLinkGithub = styled.img`
  width: 100%;
  height: 100%;
`;
const WorkLinkDemo = styled.img`
  width: 100%;
  height: 100%;
`;
const WorkLink = styled.a`
  width: 30px;
  height: 30px;
`;

const MainWorksList = () => {
  return (
    <MainWorksListWrap>
      <WorksList>
        <WorkImages>
          <WorkImage src={project1} />
        </WorkImages>
        <WorkText>
          <WorkTitle>music player1 with dummy data</WorkTitle>
          <WorkSummary>react와 dummy data를 이용한 music player</WorkSummary>
          <WorkSubscription>
            Front-End : Html, CSS, TypeScirpt, React
            <br />
            Back-End : Node.js(Express,REST), AWS(EC2)
            <br />
            Design : Figma
            <br />
            Functions : 장르별 track 정렬, track 검색 기능, my playlist 추가 및
            삭제, 종아요 기능
            <br />
            Comments : react와 back-end 영역을 처음 접해봤으며 ec2를 이용하여
            서버 구축, 간단한 music player를 개발하였습니다.
          </WorkSubscription>
          <WorkLinks>
            <WorkLink
              href="https://www.notion.so/PETER-resume-0ce4a691a0ab4e279341ca0520d0327e"
              target="_blank"
              title="Notion Resume"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://www.notion.so/PETER-resume-0ce4a691a0ab4e279341ca0520d0327e"
              target="_blank"
              title="Notion Resume"
            >
              <WorkLinkDemo src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577544307/noticon/a7cmr2ibsfyuwcydpvny.png" />
            </WorkLink>
          </WorkLinks>
        </WorkText>
      </WorksList>
    </MainWorksListWrap>
  );
};
export default MainWorksList;
