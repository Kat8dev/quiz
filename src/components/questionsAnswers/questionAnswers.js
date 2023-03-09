import styled from 'styled-components';

export const QuestionsAnswersStyled = styled.div`
  max-width: 600px;
  background-image: #F5F5F5;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  .wrapper {
    margin-bottom: 3rem;
  }
`;

export const QuestionBox = styled.div`
  padding: 12px;
  background-color: inherit; 
  border-radius: 20px;
  box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.35);
  p {
    color: #006d77;
    text-align: center;
    font-size: 19px;
    min-height: 30px;
  }
`;

export const AnswerBox = styled.div`
  width: 100%;
  min-height: 30px;
  background: inherit;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.35);
  &:hover {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }

  p {
    margin-left: 10px;
    color: #118ab2;
  }
  span {
    color: #118ab2;
  }
`;

export const AnswersWrapper = styled.div`
  max-width: 610px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 10px;
`;
