import React from "react";

import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  width: ${(props) => props.width || "auto"};
  flex: ${(props) => props.flex || "1 1 0%"};
  margin-top: ${props => props.mt ? props.mt : 0};
  margin-bottom: ${props => props.mb ? props.mb : 0};
`;

const Flex = (props) => {
    return <StyledFlex {...props} />;
};

export default Flex;
