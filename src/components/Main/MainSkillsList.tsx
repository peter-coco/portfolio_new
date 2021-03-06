import React, { useEffect } from "react";
import styled from "styled-components";

const MainSkillsListsWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  gap: 20px;
`;
const MainSkillListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 240px;
`;
const MainSkillTitleWrap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const MainSkillTitle = styled.div`
  color: #f2c94c;
  font-size: 18px;
  font-family: "Noto Sans KR";
  font-weight: 400;
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
  padding: 20px 0;
  box-sizing: border-box;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;

  border: 5px solid white;
  transition: all 500ms;
  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 20px;
  }

  &:hover {
    border: 5px solid #f2c94c;
    transform: translateY(-5px);
    transition: all 500ms;
  }
`;
const Skill = styled.img`
  width: 60px;
  height: 60px;
  color: white;
`;

const SkillList = ({ skill }: { skill: string }) => {
  return <Skill src={skill} />;
};

const MainSkillList = ({
  title,
  skillList,
}: {
  title: string;
  skillList: string[];
}) => {
  return (
    <MainSkillListWrap>
      <MainSkillTitleWrap>
        <MainSkillTitle>{title}</MainSkillTitle>
        {/* <MainSkillTitleBar /> */}
      </MainSkillTitleWrap>
      <SkillListWrap>
        {skillList.map((skill) => (
          <SkillList key={skill} skill={skill} />
        ))}
      </SkillListWrap>
    </MainSkillListWrap>
  );
};

const MainSkillsLists = () => {
  return (
    <MainSkillsListsWrap>
      {skillList.map(([title, skills]) => (
        <MainSkillList
          key={title as string}
          title={title as string}
          skillList={skills as string[]}
        />
      ))}
    </MainSkillsListsWrap>
  );
};
export default MainSkillsLists;

const skillList = [
  [
    "Front-End",
    [
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png",
    ],
  ],

  [
    "Back-End",
    [
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914173/noticon/kos1xkevxtr81zgwvyoe.svg",
    ],
  ],

  [
    "Version-Control",
    [
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913419/noticon/xf9bevlrgugi7xj6xkhp.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png",
    ],
  ],

  [
    "Communication",
    [
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567744833/noticon/dewi6lwh1gqixwiyfwxw.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608448196/noticon/a0fgk99dgqtyrwwmqsbt.png",
    ],
  ],

  [
    "Etc",
    [
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569171479/noticon/jmeuekc1zlge9wmoiw8h.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590305837/noticon/y0ru3kcjvsgm9lzoqxfn.png",
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566791609/noticon/nen1y11gazeqhejw7nm1.png",
    ],
  ],
];
