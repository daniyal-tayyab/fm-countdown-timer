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
    console.log("date: ", new Date(countdownDate));

    setInterval(() => {
      const countdownDuration = getCountDownDuration(countdownDate);
      console.log("duration: ", countdownDuration);

      setDay(Math.floor(countdownDuration / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor(
          (countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      );
      setMinutes(
        Math.floor((countdownDuration % (1000 * 60 * 60)) / (1000 * 60))
      );
      setSeconds(Math.floor((countdownDuration % (1000 * 60)) / 1000));
    }, 1000);
  }, []);

  const getCountdownDate = () => {
    const day = new Date().getDay() + 10;
    return new Date(`Mar ${day}, 2023 15:37:25`).getTime();
  };

  const getCountDownDuration = (countdownDate) => {
    const currentTime = new Date().getTime();
    return countdownDate - currentTime;
  };

  return (
    <Container>
      <CountdownDigit digit={`0${day}`} title="Days" />
      <CountdownDigit digit={`0${hours}`} title="Hours" />
      <CountdownDigit digit={minutes} title="Minutes" />
      <CountdownDigit digit={seconds} title="Seconds" />
    </Container>
  );
};

export default Countdown;
