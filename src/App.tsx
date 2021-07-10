import React, { useRef } from "react";
import logo from "./logo.svg";

import { Provider, useSelector } from "react-redux";
import store from "./redux/index";
import styled from "styled-components";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import BtnGotoTop from "./components/BtnGotoTop";

const BackgroundWrap = styled.div`
  width: 100vw;
  /* height: 100; */
  background-color: #1b1b1b;
`;

function App() {
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const worksRef = useRef<HTMLHeadingElement>(null);
  const carrerRef = useRef<HTMLHeadingElement>(null);

  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Navbar
          skillsRef={skillsRef}
          aboutRef={aboutRef}
          worksRef={worksRef}
          carrerRef={carrerRef}
        />
        <Main
          skillsRef={skillsRef}
          aboutRef={aboutRef}
          worksRef={worksRef}
          carrerRef={carrerRef}
        />
        <Footer />
        <BtnGotoTop />
      </BackgroundWrap>
    </Provider>
  );
}

export default App;
