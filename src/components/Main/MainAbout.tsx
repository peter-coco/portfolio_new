import React, { useEffect } from "react";
import styled from "styled-components";

const MainAboutWrap = styled.div`
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
  scroll-margin-top: 100px;

  @media (max-width: 1000px) {
    max-width: 670px;
  }
`;

const MainAboutTitleWrap = styled.div`
  width: 215px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;
const MainAboutTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: "Noto Sans KR";
  font-weight: 700;
`;
const MainAboutTitlebar = styled.div`
  width: 240px;
  height: 4px;
  background-color: #c4c4c4;
`;

const MainAboutTextWrap = styled.div`
  font-size: 18px;

  font-family: "Noto Sans KR";
  font-weight: 400;

  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

const MainAboutTextHighlight = styled.span`
  font-family: "Noto Sans KR";
  font-weight: 700;
  color: #b1303b;
`;

const MainAbout = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLHeadingElement>;
}) => {
  return (
    <MainAboutWrap ref={aboutRef}>
      <MainAboutTitleWrap>
        <MainAboutTitle>ABOUT</MainAboutTitle>
        <MainAboutTitlebar></MainAboutTitlebar>
      </MainAboutTitleWrap>
      <MainAboutTextWrap>
        안녕하세요{" "}
        <MainAboutTextHighlight>Front-End 개발자를</MainAboutTextHighlight>{" "}
        꿈꾸는 윤재원입니다.
        <br />
        <br />약 2년간 영상처리 개발자로 코드를 개발 및 배포 하였으며, 주로
        openCV를 이용한 이미지 처리 및 알고리즘을 담당하였습니다. 현재는
        Front-End 개발자로 전향하기 위해 스터디 및 개인 프로젝트를 진행하고
        있습니다.
        <br />
        <br />
        <MainAboutTextHighlight>
          유지보수가 가능한 코드를 설계하는것에 관심이 많습니다.
        </MainAboutTextHighlight>
        {"     "}즉 Clean Code를 만들기 위해 항상 노력하며 다른 개발자들의
        코드를 구경하고{" "}
        <MainAboutTextHighlight>
          퀄리티 높은 코드를 만들기 위해 토론하는것을 즐겨합니다.
        </MainAboutTextHighlight>{" "}
        또한 개발은 혼자만의 능력으로는 한계가 있다고 생각하기에{" "}
        <MainAboutTextHighlight>
          협업을 굉장히 중요하게 생각합니다 !
        </MainAboutTextHighlight>
      </MainAboutTextWrap>
    </MainAboutWrap>
  );
};
export default MainAbout;
