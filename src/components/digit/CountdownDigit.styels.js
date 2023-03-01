import styled from "styled-components";
import { keyframes } from "styled-components";

const FlipAnimation = keyframes`
0%{
  opacity: 1;
  transform: rotateY(0);
}

50% {
  opacity: 0.5;
  transform: rotateX(90deg);
}

100% {
  opacity: 1;
  transform: rotateX(0deg);
}
`;

export const Container = styled.div`
  padding: 2rem 3em;
  background-color: ${(props) => props.theme.darkDesaturatedBlue};
  border-radius: 1rem;
  position: relative;
`;

export const Digit = styled.p`
  prespective: 2000px;
  color: ${(props) => props.theme.softRed};
  font-size: 8rem;

  // animation: ${FlipAnimation} 1s infinite;
`;

export const Break = styled.div`
  height: 1px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.veryDarkBlue};
`;

export const Left = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.veryDarkBlue};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
`;

export const Right = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.veryDarkBlue};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
`;
