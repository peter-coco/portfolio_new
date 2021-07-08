import React, { useEffect } from "react";
import styled from "styled-components";
import mainLogo from "../../image/main-logo.png";

const MainHeadWrap = styled.div`
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

const MainHeadLogoWrap = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    width: 250px;
    height: 250px;
    margin-bottom: 15px;
  }
`;

const MainHeadLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const MainHeadTitle = styled.div`
  font-size: 18px;
  color: #f2c94c;
  margin-bottom: 30px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;

const MainHeadBtns = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 320px;
    height: 30px;
  }
`;

const MainHeadBtnWrap = styled.div`
  font-size: 15px;
  color: white;
  width: 200px;
  height: 40px;
  border-radius: 15px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-weight: 400;

  @media (max-width: 1000px) {
    width: 150px;
    height: 30px;
  }
`;

const MainHeadNotionResume = styled.a`
  text-decoration: none;
`;

const MainHeadContinueBtn = styled.div``;

const MainHead = () => {
  return (
    <MainHeadWrap>
      <MainHeadLogoWrap>
        <MainHeadLogo src={mainLogo} />
      </MainHeadLogoWrap>
      <MainHeadTitle>Front-End Developer</MainHeadTitle>
      <MainHeadBtns>
        <MainHeadBtnWrap>
          <MainHeadNotionResume
            href="https://www.notion.so/PETER-resume-0ce4a691a0ab4e279341ca0520d0327e"
            target="_blank"
            title="Notion Resume"
          >
            Notion 이력서 보기
          </MainHeadNotionResume>
        </MainHeadBtnWrap>
        <MainHeadBtnWrap>
          <MainHeadContinueBtn>더 훑어보기</MainHeadContinueBtn>
        </MainHeadBtnWrap>
      </MainHeadBtns>
    </MainHeadWrap>
  );
};
export default MainHead;
