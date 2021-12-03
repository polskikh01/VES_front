import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

const StyledBenefitsItem = styled(Flex)`
  height: 382px;
`;

const BenefitsItemImg = styled.img`
  width: 340px;
  height: 340px;
`;

const BenefitsItemTag = styled.span`
  font-weight: 500;
  font-size: 1.125em;
  color: #FFFFFF;
  text-align: center;
`;

const BenefitsItem = (props) => {
    return (
        <StyledBenefitsItem
            direction="column"
            align="center"
        >
            <BenefitsItemImg src={props.img} />
            <BenefitsItemTag>{props.tag}</BenefitsItemTag>
        </StyledBenefitsItem>
    )
}

export default BenefitsItem;
