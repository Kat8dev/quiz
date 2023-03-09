import styled from 'styled-components';

export const WelcomeToQuizStyled = styled.div`
    width: 100vw,
    height: 100vh;
`;

export const AreYouReadyStyled = styled.div`
  background-image: #F5F5F5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div{
    max-width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    h1 {
      color: #006d77;
      text-shadow: 2px 2px;
    }
    p {
      color: #006d77;
      text-align: justify;
    }
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
`;

export const ChooseThemeStyled = styled.div`
  height: 100vh;
  background-image: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  color: #006d77;
  .wrapper {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .options {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 1rem;
    font-size: 20px;
    color: #118ab2;
    h4 {
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        color: #48cae4;
        text-decoration: underline;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    border: 2px solid #118ab2;
    padding: 1rem;
    p {
      font-size: 16px;
    }
    button {
      background-color: inherit;
      border: 0;
      cursor: pointer;
      color: inherit;
      font-size: 16px;
      font-weight: bold;
      border-left: solid 1px;
      padding-left: 0.5rem;
      transition: all 0.3s ease;
      &:hover {
        background-image: linear-gradient(
          to right,
          #54b3d6,
          #54b3d6 50%,
          #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease;
      }
    }
  }
`;
