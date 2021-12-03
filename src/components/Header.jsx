import React from "react";

import styled from "styled-components";

import Flex from "./Flex";
import Nav from "./Nav";

const StyledHeader = styled(Flex)`
   
`

const Header = ( props ) => {
    return (
        <StyledHeader { ...props }>
            <Nav />
        </StyledHeader>
    )
};

export default Header;
