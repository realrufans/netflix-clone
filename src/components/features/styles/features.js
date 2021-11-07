import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  font-size: 3rem;
`;

export const Title = styled.h1`
  color: white;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  margin-top: 1em;
  font-size: 3.8rem;
  text-align: center;
  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    width: 70%;
    font-size: 2.5rem;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;

    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
  }
`;
export const SubTitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 0.5em auto;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
