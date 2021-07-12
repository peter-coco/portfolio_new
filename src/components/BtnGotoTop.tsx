import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const BtnGotoTopWrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  /* padding : 20px;
    box-sizing: border-box; */
  background: #000000;
  border-radius: 50%;
`;
const BtnGotoTopArrow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  &:hover {
    transform: translateY(-3px);
    transition: all 500ms;
  }
`;
const BtnGotoTopArrowLeft = styled.div`
  position: relative;
  /* left: -4px; */
  top: 45%;
  left: 8px;
  height: 2px;
  width: 14px;
  background-color: #fff;
  transform: rotate(-45deg);
`;
const BtnGotoTopArrowRight = styled.div`
  position: relative;
  /* left: 6px; */
  right: -3px;
  top: 45%;
  height: 2px;
  width: 14px;
  background-color: #fff;
  transform: rotate(45deg);
`;

const BtnGotoTop = () => {
  const [posY, setPosY] = useState(window.scrollY);
  const posYLimitation = 200;
  useEffect(() => {
    const setScrollY = () => {
      setPosY(window.pageYOffset);
    };
    window.addEventListener("scroll", setScrollY);
    return () => window.removeEventListener("scroll", setScrollY);
  }, []);

  const srolltoTopFunc = useCallback(() => {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <BtnGotoTopWrap
      onClick={srolltoTopFunc}
      style={{
        opacity: posY > posYLimitation ? "1" : "0",
        transition: "opacity 300ms",
      }}
    >
      <BtnGotoTopArrow>
        <BtnGotoTopArrowLeft />
        <BtnGotoTopArrowRight />
      </BtnGotoTopArrow>
    </BtnGotoTopWrap>
  );
};

export default BtnGotoTop;
