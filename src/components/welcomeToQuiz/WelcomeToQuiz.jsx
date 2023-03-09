import { useState, useRef, useEffect, useContext } from 'react';
import {
  cssQuestions,
  jsQuestions,
  ancientWorld,
  reactQuestions,
} from '../../questions';
import { QuestionsContext } from '../../store/QuestionStore';
import {
  AreYouReadyStyled,
  ChooseThemeStyled,
  WelcomeToQuizStyled,
} from './welcomeStyles.';

function AreYouReady({ setIsReady }) {
  return (
    <AreYouReadyStyled>
      <div>
        <h1>Quiz</h1>
        <p>
          The quiz contains 15 questions; for each question you have 30 seconds
          to think. If you don't answer within 30 seconds, the game will be
          over. You can choose only one topic out of four topics.
        </p>
      </div>
      <button onClick={() => setIsReady(true)}>
        Are you ready to start?
      </button>
    </AreYouReadyStyled>
  );
}

function ChooseTheme({ onClick }) {
  const [option, setOption] = useState('');
  const soundRef = useRef();
  const { setQuestions } = useContext(QuestionsContext);

  const playMainSound = () => {
    soundRef.current.play();
  };

  const handleSetQuestions = (q, t) => {
    setQuestions(q);
    setOption(t);
  };

  useEffect(() => {
    playMainSound();
  }, []);

  return (
    <ChooseThemeStyled>
      <div className="wrapper">
        <h2>Choose a topic and press enter</h2>
        <div className="options">
          <h4 onClick={() => handleSetQuestions(ancientWorld, 'Ancient World')}>
            Ancient World
          </h4>
          <h4 onClick={() => handleSetQuestions(cssQuestions, 'Css')}>Css</h4>
          <h4 onClick={() => handleSetQuestions(jsQuestions, 'JavaScript')}>
            JavaScript
          </h4>
          <h4 onClick={() => handleSetQuestions(reactQuestions, 'React')}>
            React
          </h4>
        </div>
        <div className="btn">
          <p>
            <b>{option}</b>
          </p>
          <button disabled={!option} onClick={onClick}>
            Enter
          </button>
        </div>

        <audio ref={soundRef}>
          <source src="./assets/audio/main.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </ChooseThemeStyled>
  );
}

export default function WelcomeToQuiz({ onClick }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <WelcomeToQuizStyled>
      {!isReady ? (
        <AreYouReady setIsReady={setIsReady} />
      ) : (
        <ChooseTheme onClick={onClick} />
      )}
    </WelcomeToQuizStyled>
  );
}
