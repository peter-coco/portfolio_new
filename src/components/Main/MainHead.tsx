import React, { useEffect } from "react";
import styled from "styled-components";
import mainLogo from "../../image/main-logo.png";

const MainHeadWrap = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 0px auto;
  /* margin-top: 208px; */
  margin-top: 120px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 90px;
  }
`;

const MainHeadLogoWrap = styled.div`
  width: 280px;
  /* height: 300px; */
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    max-width: 100%;
    width: 180px;
    height: auto;
    /* width: 250px; */
    /* height: 250px; */
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
  /* justify-content: space-between; */
  justify-content: center;
  gap: 10px;

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
  border-radius: 10px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 12px;
    width: 120px;
    height: 30px;
  }
`;

const MainHeadNotionResume = styled.a`
  text-decoration: none;
`;

const MainHeadContinueBtn = styled.div``;

const MainHead = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLHeadingElement>;
}) => {
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

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
        <MainHeadBtnWrap onClick={scrollToAbout}>
          <MainHeadContinueBtn>더 훑어보기</MainHeadContinueBtn>
        </MainHeadBtnWrap>
      </MainHeadBtns>
    </MainHeadWrap>
  );
};
export default MainHead;
