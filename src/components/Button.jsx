import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.main ? "#6C51F2" : props.footer ? "#FFFFFF" : "none"};
  color: ${props => props.main ? "#FFFFFF" : "#09001C"};
  font-size: 1.125em;
  line-height: 21px;
  border: none;
  border-radius: ${props => props.br ? props.br : "10px"};
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};
  margin-bottom: ${props => props.mb ? props.mb : "0"};
  padding: ${props => props.p ? props.p : "0"};
  position: ${props => props.position ? props.position : "static"};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  //pointer-events: ${props => props.pe ? props.pe : "none"};
  cursor: pointer !important;
  
  &:hover {
    transform: scale(1.0456);
    transition: transform .7s;
  }

  &:not(hover) {
    transition: transform .7s;
  }
`


const Button = (props) => {
    return <StyledButton { ...props }/>
}

export default Button;
