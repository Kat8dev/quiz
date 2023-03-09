import { useState } from 'react';
import styled from 'styled-components';
import Quiz from './page/game/Quiz';
import WelcomeToQuiz from './components/welcomeToQuiz/WelcomeToQuiz';
import QuestionsProvider from './store/QuestionStore';

const AppContainer = styled.div``;

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <QuestionsProvider>
      <AppContainer>
        {isStarted ? <Quiz restart={setIsStarted} /> : <WelcomeToQuiz onClick={setIsStarted} />}
      </AppContainer>
    </QuestionsProvider>
  );
}

export default App;
