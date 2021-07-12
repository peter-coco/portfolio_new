import React, { useEffect } from "react";
import styled from "styled-components";

import project1 from "../../image/projects1.png";
import project2 from "../../image/projects2.png";
import project3 from "../../image/projects3.png";
import project4 from "../../image/projects4.png";

const MainWorksListWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const WorksList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (max-width: 1000px) {
    /* grid-template-columns: 1fr; */
    max-width: 670px;
  }

  background-color: #ffffffed;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  border: 5px solid #ffffffed;
  transition: all 500ms;

  &:hover {
    border: 5px solid #7d74ca;
    transform: translateY(-5px);
    transition: all 500ms;
  }
`;
const WorkImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
const WorkImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const WorkText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
`;
const WorkTitle = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-family: "Noto Sans KR";
  font-weight: 700;

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
const WorkSubscriptionWrap = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 100%;
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

const WorkSubscriptionTitle = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 700;
  width: 40%;
`;

const WorkSubscription = styled.div`
  display: flex;
  width: 100%;
`;

const WorkSubscriptionContent = styled.div`
  width: 60%;
`;

const MainWorksList = () => {
  return (
    <MainWorksListWrap>
      <WorksList>
        <WorkImages>
          <WorkImage src={project2} />
        </WorkImages>
        <WorkText>
          <WorkTitle>music player1 with dummy data</WorkTitle>
          <WorkSummary>react와 dummy data를 이용한 music player</WorkSummary>
          <WorkSubscriptionWrap>
            <WorkSubscription>
              <WorkSubscriptionTitle>Front-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Html, CSS, TypeScirpt, React
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Back-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Node.js(Express,REST), AWS(EC2)
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Design</WorkSubscriptionTitle>
              <WorkSubscriptionContent>Figma</WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Functions</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                장르별 track 정렬, track 검색 기능, my playlist 추가 및 삭제,
                종아요 기능
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                react와 back-end 영역을 처음 접해봤으며 ec2를 이용하여 서버
                구축, 간단한 music player를 개발하였습니다.
              </WorkSubscriptionContent>
            </WorkSubscription>
          </WorkSubscriptionWrap>
          <WorkLinks>
            <WorkLink
              href="https://github.com/coco-peter/portfolio_musicPlayer"
              target="_blank"
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://coco-peter.github.io/portfolio_musicPlayer/"
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
          <WorkImage src={project4} />
        </WorkImages>
        <WorkText>
          <WorkTitle>music player2 with spotify api</WorkTitle>
          <WorkSummary>react와 spotify api를 이용한 music player2</WorkSummary>
          <WorkSubscriptionWrap>
            <WorkSubscription>
              <WorkSubscriptionTitle>Front-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Html, CSS, TypeScirpt, React, Redux, styled-components
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Back-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Node.js(Express,REST), AWS(EC2)
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Design</WorkSubscriptionTitle>
              <WorkSubscriptionContent>Figma</WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Functions</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Api 를 이용하여 장르별 track 추천 및 track 검색 기능
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                spotify Api를 이용하여 Api를 사용 및 접근하는 방법에 대해
                알게되는 프로젝트였습니다.
                <br />
                <br />
                특히 Api를 이용할 때는 어떤 기능을 필요로 하며 그 기능은 어떤
                조건에 따라 작동하는지에 대해 사전에 잘 파악해야한다는것을
                시행착오를 겪으며 많이 느꼈습니다.
                <br />
                <br />
                그 이외에 redux를 사용하여 이전 music player with dummy data
                프로젝트를 하면서 경험했던 props 지옥에서 벗어나 보다 깔끔하고
                유지보수가 용이한 코드를 작성할 수 있게 됐습니다.
                <br />
                <br />
                또한 styled-component를 사용하여 react의 component의 특성을 잘
                살리는 코드를 작성할 수 있게 됐습니다.
              </WorkSubscriptionContent>
            </WorkSubscription>
          </WorkSubscriptionWrap>
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
          <WorkImage src={project3} />
        </WorkImages>
        <WorkText>
          <WorkTitle>독도 재단 landing Page</WorkTitle>
          <WorkSummary>독도 재단 web-site clone</WorkSummary>
          <WorkSubscriptionWrap>
            <WorkSubscription>
              <WorkSubscriptionTitle>Front-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Html, CSS, TypeScirpt, React
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Functions</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                이미지 슬라이드
                <br />
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                독도 재단 web-site를 클론하면서 유지보수가 가능한 효율적인 태그
                구성이 무엇이며, CSS에 대해 한층 더 고민하게 된 프로젝트였습니다
              </WorkSubscriptionContent>
            </WorkSubscription>
          </WorkSubscriptionWrap>
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
          <WorkSubscriptionWrap>
            <WorkSubscription>
              <WorkSubscriptionTitle>Front-End</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                Html, CSS, TypeScirpt, React, styled-components
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Design</WorkSubscriptionTitle>
              <WorkSubscriptionContent>Figma</WorkSubscriptionContent>
            </WorkSubscription>
          </WorkSubscriptionWrap>
          <WorkLinks>
            <WorkLink
              href="https://github.com/coco-peter/portfolio_new"
              target="_blank"
              title="Github Code"
            >
              <WorkLinkGithub src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
            </WorkLink>
            <WorkLink
              href="https://coco-peter.github.io/portfolio_new/"
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
