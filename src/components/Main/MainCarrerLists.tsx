import React, { useEffect } from "react";
import styled from "styled-components";

const MainCarrerListsWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;
const CarrerList = styled.div`
  color: white;
`;
const CarrerCompany = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
const CarrerSummary = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
const CarrerSubscriptionWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 13px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
const CarrerPositionNDuration = styled.div`
  line-height: 170%;
`;
const CarrerResult = styled.div`
  /* line-height: 170%; */
`;

const MainCarrerLists = () => {
  return (
    <MainCarrerListsWrap>
      <CarrerList>
        <CarrerCompany>Pixelro</CarrerCompany>
        <CarrerSummary>
          Image Processing + Micro lens Array를 이용한 노안 보정 솔루션 개발
          스타트업
        </CarrerSummary>
        <CarrerSubscriptionWrap>
          <CarrerPositionNDuration>
            algorithm developer
            <br />
            2018.06 - 2019.09
          </CarrerPositionNDuration>
          <CarrerResult>
            ray tracing 기법 연구 및 알고리즘 코드 설계( c++, openCV, matlab)
            <br />
            <br />
            2019 KITAS 전시회 참여 및 데모 영상 전시
          </CarrerResult>
        </CarrerSubscriptionWrap>
      </CarrerList>
      <CarrerList>
        <CarrerCompany>FS solution</CarrerCompany>
        <CarrerSummary>
          Image Processing + black box 를 이용한 ADAS 개발 스타트업.
        </CarrerSummary>
        <CarrerSubscriptionWrap>
          <CarrerPositionNDuration>
            algorithm developer
            <br />
            2019.12 - 2020.12
          </CarrerPositionNDuration>
          <CarrerResult>
            블랙박스 h/w에 따른 ADAS(ldws, fcws, fvsa) 코드 최적화 및 실차테스트
            & 라이브러리 배포
            <br />
            <br />
            ADAS 신규 기능 알고리즘 코드 설계 참여( c, openCV)
          </CarrerResult>
        </CarrerSubscriptionWrap>
      </CarrerList>
    </MainCarrerListsWrap>
  );
};
export default MainCarrerLists;
