import React from "react";

import styled from "styled-components";

import Flex from "../components/Flex";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledApp = styled(Flex)`
  width: 100%;
  background-color: #09001C;
  color: #FFFFFF;
`

const App = (props) => {
    return (
        <StyledApp
            justify="center"
            align="center"
            direction="column"
        >
            <Header/>

            <Footer />
        </StyledApp>
    )
}

export default App;
