import React from "react";
import Unity, {UnityContext} from "react-unity-webgl";

import styled from "styled-components";

import Flex from "../components/Flex";
import Header from "../components/Header";
import Footer from "../components/Footer";

import full from "../assets/full-screen.png";

const StyledApp = styled(Flex)`
  width: 100%;
  background-color: #09001C;
  color: #FFFFFF;
`

const StyledU = styled(Unity)`
    width: 85%;
`;

const StyledFull = styled.button`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 64px;
  height: 64px;
  border: none;
  outline: none;
`;

const unityContext = new UnityContext({
    loaderUrl: "build/actual.loader.js",
    dataUrl: "build/actual.data",
    frameworkUrl: "build/actual.framework.js",
    codeUrl: "build/actual.wasm",
})

const App = (props) => {
    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    return (
        <StyledApp
            justify="center"
            align="center"
            direction="column"
        >
            <Header/>
            <StyledFull onClick={handleOnClickFullscreen}><img src={full} /></StyledFull>
            <StyledU unityContext={unityContext} />
            <Footer />
        </StyledApp>
    )
}

export default App;
