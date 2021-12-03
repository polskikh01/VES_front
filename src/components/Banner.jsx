import React from "react";

import styled from "styled-components";

import Flex from "./Flex";
import Button from "./Button";

import banner from "../assets/banner.png"
import {Link} from "react-router-dom";

const StyledBanner = styled(Flex)`
    width: 100%;
    height: 688px;
`;

const StyledH1 = styled.h1`
  width: 670px;
  font-weight: 600;
  font-size: 3em;
  color: #FFFFFF;
  margin-top: 220px;
  z-index: 1;
`;

const StyledSpan = styled.span`
  width: 658px;
  font-size: 1.125em;
  color: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 30px;
  z-index: 1;
`;

const StyledBannerImg = styled.img`
  position: absolute;
  width: 840px;
  height: 840px;
  top: 91px;
  right: 189px;
  z-index: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`

const Banner = (props) => {
    return (
        <StyledBanner
            direction="column"
        >
            <StyledH1>Научитесь управлять БПЛА в режиме онлайн</StyledH1>
            <StyledSpan>Наш онлайн-тренажёр для обучения оператора беспилотных летательных аппаратов (БПЛА) гарантирует эффективность и качество обучения.</StyledSpan>
            <Button
                main
                width="265px"
                height="50px"
                mb="225px"
            >
                <StyledLink to="/education">Запустить тренажёр</StyledLink>

            </Button>
            <StyledBannerImg src={banner} alt="Banner" />
        </StyledBanner>
    );
};

export default Banner;
