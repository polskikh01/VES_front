import React from "react";
import {Form, Field} from "react-final-form";

import styled from "styled-components";

import Flex from "./Flex";
import Input from "./Input";
import Button from "./Button";

import inst from "../assets/inst.svg";
import twit from "../assets/tw.svg";
import face from "../assets/face.svg";

const StyledMail = styled(Flex)``;

const StyledSocial = styled.img`
  width: 23px;
  height: 23px;
  margin-right: ${props => props.mr ? props.mr : 0};
  margin-left: ${props => props.ml ? props.ml : 0};
  cursor: pointer;
`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
};

const required = (value) => (value ? undefined : "Неверный адресс");

const Mail = () => {
    return (
        <Flex
            direction="column"
        >
            <Flex
                mb="35px"
            >
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="EMAIL" validate={required}>
                                {({input, meta}) => (
                                    <Input
                                        {...input}
                                        type="email"
                                        placeholder="Введите E-Mail..."
                                        width="460px"
                                        height="45px"
                                        mr="20px"
                                        icon="mail.svg"
                                    />
                                )}
                            </Field>
                        </form>
                    )}
                />
                <Button
                    footer
                    width="100px"
                    height="45px"
                    br="0"
                    type="submit"
                >
                    Ввод
                </Button>
            </Flex>
            <Flex
                mb="60px"
            >
                <StyledSocial src={inst} alt="Instagram" />
                <StyledSocial src={twit} alt="Twitter" mr="25px" ml="25px" />
                <StyledSocial src={face} alt="Facebook" />
            </Flex>
        </Flex>
    )
}

export default Mail;
