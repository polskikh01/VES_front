import React from "react";

import styled from "styled-components";

import Flex from "../components/Flex";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Section from "../components/Section";
import BenefitsItem from "../components/BenefitsItem";
import SelectItem from "../components/SelectItem";
import Mailing from "../components/Mailing";
import Mail from "../components/Mail";

import b1 from "../assets/BenefitsItem1.png";
import b2 from "../assets/BenefitsItem2.png";
import b3 from "../assets/BenefitsItem3.png";
import b4 from "../assets/BenefitsItem4.png";
import m1 from "../assets/mod1.png";
import m2 from "../assets/mod2.png";
import m3 from "../assets/mod3.png";
import fly from "../assets/fly.png";
import Footer from "../components/Footer";

const StyledApp = styled(Flex)`
  padding: 0 250px;
  background-color: #09001C;
  color: #FFFFFF;
`

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: #FFFFFF;
  margin-bottom: ${props => props.mb ? props.mb : 0};
`;

const StyledH2Mail = styled.h2`
  font-size: 1.5em;
  color: #FFFFFF;
`;

const StyledSpanMail = styled.span`
  width: 355px;
  font-size: ${props => props.fs ? props.fs : "1em"};
  color: #FFFFFF;
  margin-top: ${props => props.mt ? props.mt : 0};
  margin-bottom: ${props => props.mb ? props.mb : 0};
`;

const App = (props) => {
    return (
        <StyledApp
            justify="center"
            align="center"
            direction="column"
        >
            <Header/>
            <Banner/>
            <Section
                id="benefits"
                direction="column"
                align="center"
                mt="140px"
            >
                <StyledH2 mb="30px">Наши преимущества</StyledH2>
                <Flex>
                    <BenefitsItem img={b1} tag="Настраиваемая погода"/>
                    <BenefitsItem img={b2} tag="Настраиваемая местность"/>
                    <BenefitsItem img={b3} tag="Настраиваемая симуляция аварийных ситуаций"/>
                    <BenefitsItem img={b4} tag="Реалистичные органы управления"/>
                </Flex>
            </Section>
            <Section
                id="mode"
                direction="column"
                align="center"
                mt="70px"
            >
                <StyledH2 mb="40px">Ознакомьтесь с режимами работы</StyledH2>
                <Flex>
                    <SelectItem
                        justify="center"
                        align="center"
                        direction="column"
                        img={m1}
                        text="Обучение"
                    />
                    <SelectItem
                        ml="10px"
                        mr="10px"
                        justify="center"
                        align="center"
                        direction="column"
                        img={m2}
                        text="Тренировка"
                    />
                    <SelectItem
                        justify="center"
                        align="center"
                        direction="column"
                        img={m3}
                        text="Экзамен"
                    />
                </Flex>
            </Section>
            <Section
                id="mail"
                direction="column"
                align="center"
                mt="70px"
            >
                <StyledH2 mb="40px">Поддерживаемые модели БПЛА</StyledH2>
                <Flex>
                    <SelectItem
                        justify="center"
                        align="center"
                        direction="column"
                        img={fly}
                        text="Тайфун H1.1"
                    />
                    <SelectItem
                        ml="10px"
                        mr="10px"
                        justify="center"
                        align="center"
                        direction="column"
                        img={fly}
                        text="Новый дрон скоро!"
                    />
                    <SelectItem
                        justify="center"
                        align="center"
                        direction="column"
                        img={fly}
                        text="Новый дрон скоро!"
                    />
                </Flex>
            </Section>
            <Mailing
                width="100%"
                mt="100px"
            >
                <Flex
                    mt="44px"
                    direction="column"
                >
                    <StyledH2Mail>Подпишитесь на нашу рассылку</StyledH2Mail>
                    <StyledSpanMail fs=".875em" mt="30px">Подпишитесь на эксклюзивный доступ к свежим новостям о наших передовых разработках.</StyledSpanMail>
                </Flex>
                <Flex
                    mt="44px"
                    direction="column"
                >
                    <StyledSpanMail mb="30px">Узнавайте о новостях:</StyledSpanMail>
                    <Mail />
                </Flex>
            </Mailing>
            <Footer />
        </StyledApp>
    )
}

export default App;
