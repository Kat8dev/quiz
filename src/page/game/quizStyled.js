import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  .game {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
  }
`;

export const Restart = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: #006d77;
  p {
    font-size: 20px;
  }
  button {
    margin: 2rem;
    padding: 1rem;
    border: 0;
    background: inherit;
    transition: all 0.5s ease;
    font-size: 22px;
    border-radius: 10px;
    color: #006d77;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
    &:hover {
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }
`