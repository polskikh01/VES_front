import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

const StyledFooter = styled(Flex)`

`;

const Footer = (props) => {
    return (
        <StyledFooter {...props}>
            <Flex>
                <Flex
                    direction="column"
                >
                    1
                    2
                    3
                </Flex>
                <Flex
                    direction="column"
                >
                    2
                    3
                    4
                </Flex>
                <Flex
                    direction="column"
                >
                    3
                    4
                    5
                </Flex>
            </Flex>
            <Flex
                direction="column"
            >
                123
            </Flex>
        </StyledFooter>
    )
}

export default Footer;
