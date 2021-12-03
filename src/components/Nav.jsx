import React from "react";

import styled from "styled-components";

import logo from "../assets/logo.svg";

import Flex from "./Flex";

import {Link} from 'react-router-dom';


const StyledNav = styled(Flex)`
  height: 162px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
`

const StyledLi = styled.li`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin-left: ${(props) => props.ml ? props.ml : 0};
  margin-right: ${(props) => props.mr ? props.mr : 0};
  border-bottom: 3px solid #09001C;

  &:hover {
    border-bottom: 3px solid #6C51F2;
    transition: .85s;
  }
`

const StyledA = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1.125em;
  line-height: 1.3125em;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`

const Nav = (props) => {
    return (
        <StyledNav
            align="center"
            { ...props }
        >
            <StyledUl>
                <StyledLi align="center" mr="25px"><StyledA href={"#benefits"}>Преимущества</StyledA></StyledLi>
                <StyledLi align="center" ml="25px" mr="100px"><StyledA><StyledLink to="/education">Тренажёр</StyledLink></StyledA></StyledLi>
                <StyledLink to="/"><img src={logo} alt="logo" /></StyledLink>
                <StyledLi align="center" ml="100px" mr="25px"><StyledA href={"#mode"}>Режим работы</StyledA></StyledLi>
                <StyledLi align="center" ml="25px"><StyledA href={"#mail"}>Контакты</StyledA></StyledLi>
            </StyledUl>
        </StyledNav>
    )
};

export default Nav;
