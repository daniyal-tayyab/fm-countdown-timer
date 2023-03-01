import React from "react";

import { Container, Digit, Break, Left, Right } from "./CountdownDigit.styels";

const CountdownDigit = ({ digit }) => {
  return (
    <Container>
      <Left />
      <Right></Right>
      <Digit>{digit}</Digit>
      <Break />
    </Container>
  );
};

export default CountdownDigit;
