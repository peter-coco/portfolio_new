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
          <WorkSummary>react??? dummy data??? ????????? music player</WorkSummary>
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
                ????????? track ??????, track ?????? ??????, my playlist ?????? ??? ??????,
                ????????? ??????
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                react??? back-end ????????? ?????? ??????????????? ec2??? ???????????? ??????
                ??????, ????????? music player??? ?????????????????????.
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
          <WorkSummary>react??? spotify api??? ????????? music player2</WorkSummary>
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
                Api ??? ???????????? ????????? track ?????? ??? track ?????? ??????
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                spotify Api??? ???????????? Api??? ?????? ??? ???????????? ????????? ??????
                ???????????? ????????????????????????.
                <br />
                <br />
                ?????? Api??? ????????? ?????? ?????? ????????? ????????? ?????? ??? ????????? ??????
                ????????? ?????? ?????????????????? ?????? ????????? ??? ???????????????????????????
                ??????????????? ????????? ?????? ???????????????.
                <br />
                <br />
                ??? ????????? redux??? ???????????? ?????? music player with dummy data
                ??????????????? ????????? ???????????? props ???????????? ????????? ?????? ????????????
                ??????????????? ????????? ????????? ????????? ??? ?????? ????????????.
                <br />
                <br />
                ?????? styled-component??? ???????????? react??? component??? ????????? ???
                ????????? ????????? ????????? ??? ?????? ????????????.
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
          <WorkTitle>?????? ?????? landing Page</WorkTitle>
          <WorkSummary>?????? ?????? web-site clone</WorkSummary>
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
                ????????? ????????????
                <br />
              </WorkSubscriptionContent>
            </WorkSubscription>
            <br />
            <WorkSubscription>
              <WorkSubscriptionTitle>Comments</WorkSubscriptionTitle>
              <WorkSubscriptionContent>
                ?????? ?????? web-site??? ??????????????? ??????????????? ????????? ???????????? ??????
                ????????? ????????????, CSS??? ?????? ?????? ??? ???????????? ??? ????????????????????????
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
          <WorkSummary>react??? ????????? portfolio web-site</WorkSummary>
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
