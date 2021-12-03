import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

const StyledFooter = styled(Flex)`
  width: 100%;
`;

const StyledLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 19px;
  margin-bottom: 13px;
`

const StyledUl = styled.ul`
  width: 220px;
  list-style: none;
`

const StyledLi = styled.li`
  font-weight: normal;
  font-size: .875em;
  line-height: 17px;
  margin-bottom: 10px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #FFFFFF;
`;

const Footer = (props) => {
    return (
        <StyledFooter {...props}>
            <Flex
                mt="45px"
            >
                <Flex
                    direction="column"
                    justify="center"
                >
                    <StyledLabel>О нас</StyledLabel>
                    <StyledUl>
                        <StyledLi><StyledA href={"#"}>Информация</StyledA></StyledLi>
                        <StyledLi>Информация 2</StyledLi>
                        <StyledLi>Информация 3</StyledLi>
                    </StyledUl>
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
                mt="45px"
            >
                123
            </Flex>
        </StyledFooter>
    )
}

export default Footer;
