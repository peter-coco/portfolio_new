import React from "react";
import logo from "./logo.svg";

import { Provider, useSelector } from "react-redux";
import store from "./redux/index";
import styled from "styled-components";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
`;

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Navbar />
        <Main />
        <Footer />
      </BackgroundWrap>
    </Provider>
  );
}

export default App;
