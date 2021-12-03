import React from "react";

import styled from "styled-components";

import Flex from "./Flex";
import Button from "./Button";

const StyledSelectItem = styled(Flex)`
  position: relative;
  width: 460px;
  height: 300px;
  background: linear-gradient(113.04deg, #0A306A 0%, #4C0070 100%);
  border-radius: 20px;
  margin-left: ${(props) => props.ml ? props.ml : 0};
  margin-right: ${(props) => props.mr ? props.mr : 0};
`;

const ModItemImg = styled.img`
  width: 300px;
  height: 300px;
`;

const SelectItem = (props) => {
    return (
        <StyledSelectItem {...props} >
            <ModItemImg src={props.img} />
            <Button
                main
                height="53px"
                position="absolute"
                bottom="0"
                left="0"
                br="0 10px 0 20px"
                p="20px"
            >{props.text}</Button>
        </StyledSelectItem>
    )
};

export default SelectItem;
