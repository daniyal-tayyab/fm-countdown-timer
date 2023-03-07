import React from "react";

import {
  Container,
  Digit,
  Break,
  LeftHole,
  RightHole,
  Top,
  Bottom,
  Wrapper,
} from "./CountdownDigit.styels";

const CountdownDigit = ({ digit, title }) => {
  return (
    <Wrapper>
      <Container>
        <LeftHole />
        <RightHole />
        <Digit className="flip-card" data-count={digit}>
          <Top className="top">{digit}</Top>
          <Bottom className="bottom">{digit}</Bottom>
        </Digit>
        <Break />
      </Container>
      <p>{title}</p>
    </Wrapper>
  );
};

export default CountdownDigit;
