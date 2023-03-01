import styled from "styled-components";

import backgroundImage from "../images/bg-stars.svg";

export const Container = styled.main`
  position: relative;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-color: ${(props) => props.theme.veryDarkBlue};
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 10rem;
  margin-top: 10rem;
`;

export const HillsPattern = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;

  height: 17rem;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;
