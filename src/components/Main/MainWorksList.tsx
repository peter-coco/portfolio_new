import React, { useEffect } from "react";
import styled from "styled-components";

import project1 from "../../image/projects3.png";

const MainWorksListWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const WorksList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  background-color: #ffffffed;
  /* opacity: 0.9; */
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
`;
const WorkImages = styled.div`
  width: 350px;
  height: 350px;

  @media (max-width: 1000px) {
    width: 100%;
    /* height: 280px; */
    margin-bottom: 20px;
  }
`;
const WorkImage = styled.img`
  width: 100%;
  height: 100%;
`;
const WorkText = styled.div`
  /* color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const WorkTitle = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-family: "Noto Sans KR";
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
const WorkSummary = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  font-family: "Noto Sans KR";
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 17px;
  }
`;
const WorkSubscription = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 140%;
  font-family: "Noto Sans KR";
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 13px;
  }
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
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://www.notion.so/PETER-resume-0ce4a691a0ab4e279341ca0520d0327e"
              target="_blank"
              title="Deme"
            >
              <WorkLinkDemo src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577544307/noticon/a7cmr2ibsfyuwcydpvny.png" />
            </WorkLink>
          </WorkLinks>
        </WorkText>
      </WorksList>
      <WorksList>
        <WorkImages>
          <WorkImage src={project1} />
        </WorkImages>
        <WorkText>
          <WorkTitle>music player2 with spotify api</WorkTitle>
          <WorkSummary>react와 spotify api를 이용한 music player2</WorkSummary>
          <WorkSubscription>
            Front-End : Html, CSS, TypeScirpt, React, Redux, styled-components
            <br />
            Back-End : Node.js(Express,REST), AWS(EC2)
            <br />
            Design : Figma
            <br />
            Functions : Api 를 이용하여 장르별 track 추천 및 track 검색 기능
            <br />
            Comments :
            <br />
            - spotify Api를 이용하여 Api를 사용 및 접근하는 방법에 대해 알게되는
            프로젝트였습니다.
            <br />
            - 특히 Api를 이용할 때는 어떤 기능을 필요로 하며 그 기능은 어떤
            조건에 따라 작동하는지에 대해 사전에 잘 파악해야한다는것을
            시행착오를 겪으며 많이 느꼈습니다.
            <br />
            - 그 이외에 redux를 사용하여 이전 music player with dummy data
            프로젝트를 하면서 경험했던 props 지옥에서 벗어나 보다 깔끔하고
            유지보수가 용이한 코드를 작성할 수 있게 됐습니다.
            <br />- 또한 styled-component를 사용하여 react의 component의 특성을
            잘 살리는 코드를 작성할 수 있게 됐습니다.
          </WorkSubscription>
          <WorkLinks>
            <WorkLink
              href="https://github.com/coco-peter/portfolio_musicPlayer_with_spotify_api"
              target="_blank"
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://coco-peter.github.io/portfolio_musicPlayer_with_spotify_api/"
              target="_blank"
              title="Deme"
            >
              <WorkLinkDemo src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577544307/noticon/a7cmr2ibsfyuwcydpvny.png" />
            </WorkLink>
          </WorkLinks>
        </WorkText>
      </WorksList>
      <WorksList>
        <WorkImages>
          <WorkImage src={project1} />
        </WorkImages>
        <WorkText>
          <WorkTitle>독도 재단 landing Page</WorkTitle>
          <WorkSummary>독도 재단 web-site clone</WorkSummary>
          <WorkSubscription>
            Front-End : Html, CSS, TypeScirpt, React
            <br />
            Functions : 이미지 슬라이드
            <br />
            Comments : 독도 재단 web-site를 클론하면서 유지보수가 가능한
            효율적인 태그 구성이 무엇이며, CSS에 대해 한층 더 고민하게 된
            프로젝트였습니다
          </WorkSubscription>
          <WorkLinks>
            <WorkLink
              href=" https://github.com/coco-peter/dokdoLandingPage"
              target="_blank"
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://coco-peter.github.io/dokdoLandingPage/"
              target="_blank"
              title="Demo"
            >
              <WorkLinkDemo src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577544307/noticon/a7cmr2ibsfyuwcydpvny.png" />
            </WorkLink>
          </WorkLinks>
        </WorkText>
      </WorksList>
      <WorksList>
        <WorkImages>
          <WorkImage src={project1} />
        </WorkImages>
        <WorkText>
          <WorkTitle>portfolio</WorkTitle>
          <WorkSummary>react를 이용한 portfolio web-site</WorkSummary>
          <WorkSubscription>
            Front-End : Html, CSS, TypeScirpt, React, styled-components
            <br />
            Design : Figma
          </WorkSubscription>
          <WorkLinks>
            <WorkLink
              href=" https://github.com/coco-peter/dokdoLandingPage"
              target="_blank"
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://coco-peter.github.io/dokdoLandingPage/"
              target="_blank"
              title="Demo"
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
