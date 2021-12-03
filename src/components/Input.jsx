import React from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  background: none;
  mix-blend-mode: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.2em;
  color: #FFFFFF;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  outline: none;
  padding: 10px 40px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
`;

const ErrorText = styled.div`
  margin-top: 6px;
  font-size: 18px;
  line-height: 32px;
  color: #cc1f1f;
`;

const ExtraText = styled.div`
  margin-bottom: ${(props) => (props.mbe ? props.mbe : "8px")};
`;

const InputIcon = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 15px;
    width: 15px;
    height: 15px;
    background: url(${(props) => (props.icon ? props.icon : "")}) no-repeat;
    background-size: cover;
  }
`;

const Input = (props) => {
    const { meta, extraText } = props;
    return (
        <div>
            <InputIcon {...props}>
                <StyledInput {...props} />
            </InputIcon>
            {meta && meta.error && meta.touched && (
                <ErrorText>{meta.error}</ErrorText>
            )}
            {ExtraText && <ExtraText {...props}>{extraText}</ExtraText>}
        </div>
    );
};

export default Input;
