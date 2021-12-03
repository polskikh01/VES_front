import React from "react";

import styled from "styled-components";

import Flex from "./Flex";

const StyledMailing = styled(Flex)`
  border-top: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
  padding-left: 250px;
`;

const Mailing = (props) => {
    return (
        <StyledMailing {...props} />
    )
}

export default Mailing;
