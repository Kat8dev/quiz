import { useState, useContext, useEffect } from 'react';
import QuestionsAnswers from '../../components/questionsAnswers/QuestionsAnswers';
import { QuizContainer, Restart } from './quizStyled';
import Timer from '../../components/Timer';
import { QuestionsContext } from '../../store/QuestionStore';

function Quiz({ restart }) {
  const [timer, setTimer] = useState(30);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gameEnd, setGameEnd] = useState({ isEnd: false, text: '' });
  const { questions, setQuestions } = useContext(QuestionsContext);

  const { a, b, c, d, question } = questions[questionNumber];

  const handleClick = (response) => {
    if (response.isCorrect && timer !== 0) {
      if (questionNumber < 14) {
        setQuestionNumber(questionNumber + 1);
        setTimer(30);
      } else if (questionNumber === 14 && timer !== 0) {
        setGameEnd(() => ({ isEnd: true, text: 'You won!' }));
      }
    } else {
      setGameEnd(() => ({ isEnd: true, text: 'You lost!' }));
    }
  };

  const restartGame = () => {
    restart(false);
  };

  useEffect(() => {
    if (timer === 0) {
      restart(false);
      setQuestions([])
    }
  });

  return (
    <QuizContainer>
      {!gameEnd.isEnd ? (
        <div className='game'>
          <Timer
            second={timer}
            setSecond={setTimer}
            setGameOver={setGameEnd}
          />
          <QuestionsAnswers
            a={a}
            b={b}
            c={c}
            d={d}
            n={questionNumber}
            question={question}
            onClick={handleClick}
          />
        </div>
      ) : (
        <Restart>
          <p>{gameEnd.text}</p>
          <button onClick={restartGame}>
            {gameEnd.text === 'You won!' ? 'Play more' : 'Try again'}
          </button>
        </Restart>
      )}
    </QuizContainer>
  );
}

export default Quiz;
