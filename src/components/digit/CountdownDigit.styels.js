import styled from "styled-components";
import { keyframes } from "styled-components";

const FlipTop = keyframes`
 100% {
    transform: rotateX(90deg);
  }
`;

export const Container = styled.div`
  padding: 2rem 3em;
  background-color: ${(props) => props.theme.darkDesaturatedBlue};
  border-radius: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Digit = styled.div`
  color: ${(props) => props.theme.softRed};
  font-size: 8rem;

  @media (max-width: 680px) {
    font-size: 6rem;
  }

  @media (max-width: 530px) {
    font-size: 5rem;
  }

  @media (max-width: 490px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    font-size: 3.5rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

export const Top = styled.div``;

export const Bottom = styled.div``;

export const Break = styled.div`
  height: 1px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.veryDarkBlue};
`;

export const LeftHole = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.veryDarkBlue};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const RightHole = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.veryDarkBlue};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 1rem;
    height: 1rem;
  }
`;
