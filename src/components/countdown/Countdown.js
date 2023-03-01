import React from "react";
import CountdownDigit from "../digit/CountdownDigit";

import { Container } from "./CountDown.styles";

const Countdown = () => {
  return (
    <Container>
      <CountdownDigit digit="08" />
      <CountdownDigit digit="24" />
      <CountdownDigit digit="55" />
      <CountdownDigit digit="41" />
    </Container>
  );
};

export default Countdown;
