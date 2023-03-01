import React from "react";

import { Container, HillsPattern, Heading } from "./Home.styles";

import hillsPattern from "../images/pattern-hills.svg";
import Countdown from "../components/countdown/Countdown";

const Home = () => {
  return (
    <Container>
      <Heading>we're launching soon</Heading>
      <Countdown></Countdown>
      <HillsPattern>
        <img src={hillsPattern} alt="hills" />
      </HillsPattern>
    </Container>
  );
};

export default Home;
