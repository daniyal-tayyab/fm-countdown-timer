import React, { useEffect, useState } from "react";
import CountdownDigit from "../digit/CountdownDigit";

import { Container } from "./CountDown.styles";

const Countdown = () => {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = getCountdownDate();

    let interval = setInterval(() => {
      const countdownduration = getCountDownDuration(countdownDate);

      setDay(Math.floor(countdownduration / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor(
          (countdownduration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      );
      setMinutes(
        Math.floor((countdownduration % (1000 * 60 * 60)) / (1000 * 60))
      );
      setSeconds(Math.floor((countdownduration % (1000 * 60)) / 1000));
    }, 1000);

    return clearInterval(interval);
  }, []);

  const getCountdownDate = () => {
    const day = new Date().getDay() + 1;
    return new Date(`Mar ${day}, 2024 15:37:25`).getTime();
  };

  const getCountDownDuration = (countdownDate) =>
    countdownDate - new Date().getTime();

  return (
    <Container>
      <CountdownDigit digit={day} />
      <CountdownDigit digit={hours} />
      <CountdownDigit digit={minutes} />
      <CountdownDigit digit={seconds} />
    </Container>
  );
};

export default Countdown;
