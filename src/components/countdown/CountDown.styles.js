import styled from "styled-components";

export const Container = styled.section`
  color: #fff;
  display: grid;
  grid-template-columns: 17rem 17rem 17rem 17rem;
  column-gap: 2rem;

  @media (max-width: 760px) {
    grid-template-columns: 15rem 15rem 15rem 15rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 13rem 13rem 13rem 13rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 11rem 11rem 11rem 11rem;
  }

  @media (max-width: 530px) {
    grid-template-columns: 10rem 10rem 10rem 10rem;
  }

  @media (max-width: 490px) {
    grid-template-columns: 9rem 9rem 9rem 9rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: 8rem 8rem 8rem 8rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 7rem 7rem 7rem 7rem;
  }
`;
