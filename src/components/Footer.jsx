import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

import logo from "../assets/logoFooter.svg"

const StyledFooter = styled(Flex)`
  width: 100%;
  height: 270px;
  padding-left: 250px;
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
  margin-top: ${props => props.mt ? props.mt : 0};
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #FFFFFF;
`;

const StyledLogo = styled.img`
  width: 135px;
  height: 53px;
  margin-bottom: 15px;
`;

const Footer = (props) => {
    return (
        <StyledFooter {...props}>
            <Flex
                mt="45px"
            >
                <Flex
                    direction="column"
                >
                    <StyledLabel>О нас</StyledLabel>
                    <StyledUl>
                        <StyledLi><StyledA href={"#"}>Информация</StyledA></StyledLi>
                        <StyledLi><StyledA href={"#"}>Информация</StyledA></StyledLi>
                        <StyledLi><StyledA href={"#"}>Информация</StyledA></StyledLi>
                    </StyledUl>
                </Flex>
                <Flex
                    direction="column"
                >
                    <StyledLabel>Тренажер</StyledLabel>
                    <StyledUl>
                        <StyledLi><StyledA href={"#"}>Обучение</StyledA></StyledLi>
                        <StyledLi><StyledA href={"#"}>Тренировка</StyledA></StyledLi>
                        <StyledLi><StyledA href={"#"}>Экзамен</StyledA></StyledLi>
                    </StyledUl>
                </Flex>
                <Flex
                    direction="column"
                >
                    <StyledLabel>Контакты</StyledLabel>
                    <StyledUl>
                        <StyledLi><StyledA href={"#"}>+7 (777) 777-77-77</StyledA></StyledLi>
                        <StyledLi><StyledA href={"#"}>inbox@rosseti.ru</StyledA></StyledLi>
                    </StyledUl>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                mt="45px"
                ml="30px"
            >
                <StyledLogo src={logo} alt="Logo" />
                <StyledUl>
                    <StyledLi><StyledA href={"#"}>Условия и положения</StyledA></StyledLi>
                    <StyledLi><StyledA href={"#"}>Политика конфиденциальности</StyledA></StyledLi>
                    <StyledLi><StyledA href={"#"}>Прочие политики</StyledA></StyledLi>
                    <StyledLi><StyledA href={"#"}>Copyright © NAME 2021 | All Rights Reserved</StyledA></StyledLi>
                </StyledUl>
            </Flex>
        </StyledFooter>
    )
}

export default Footer;
