import React, { useEffect } from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 250px;
  max-width: 830px;
  margin: 0px auto;
  margin-top: 208px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
`;
const FooterLink = styled.a`
  width: 40px;
  height: 40px;
`;
const FooterLinkImg = styled.img`
  width: 100%;
  height: 100%;
`;
const FooterEmail = styled.div`
  color: white;
  font-size: 13px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;
const FooterRight = styled.div`
  color: white;
  font-size: 15px;
  font-family: "Noto Sans KR";
  font-weight: 400;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLinks>
        <FooterLink
          href="https://github.com/coco-peter"
          target="_blank"
          title="Notion Resume"
        >
          <FooterLinkImg src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png" />
        </FooterLink>
        <FooterLink
          href="https://www.notion.so/PETER-resume-0ce4a691a0ab4e279341ca0520d0327e"
          target="_blank"
          title="Notion Resume"
        >
          <FooterLinkImg src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570106347/noticon/hx52ypkqqdzjdvd8iaid.svg" />
        </FooterLink>
        <FooterLink
          href="https://coco-peter.tistory.com/"
          target="_blank"
          title="Notion Resume"
        >
          <FooterLinkImg src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567831878/noticon/r5j96kjgofenqdearmdw.png" />
        </FooterLink>
      </FooterLinks>
      <FooterEmail>dklirser@naver.com</FooterEmail>
      <FooterRight>2021. YUN JAE WON. All rights reserved.</FooterRight>
    </FooterWrap>
  );
};
export default Footer;
