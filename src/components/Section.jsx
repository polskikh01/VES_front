import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

const StyledSection = styled(Flex)`
  margin-top: ${props => props.mt ? props.mt : 70};
  margin-bottom: ${props => props.mb ? props.mb : 0};
`

const Section = (props) => {
    return (
        <StyledSection {...props} />
    )
}

export default Section;
