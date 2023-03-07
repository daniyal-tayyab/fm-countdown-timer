import React from "react";

import {
  Container,
  Digit,
  Break,
  LeftHole,
  RightHole,
  Top,
  Bottom,
} from "./CountdownDigit.styels";

const CountdownDigit = ({ digit }) => {
  return (
    <Container>
      <LeftHole />
      <RightHole />
      <Digit className="flip-card" data-count={digit}>
        <Top className="top">{digit}</Top>
        <Bottom className="bottom">{digit}</Bottom>
      </Digit>
      <Break />
    </Container>
  );
};

export default CountdownDigit;
