import { createContext, useState } from 'react';

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
    console.log(questions)
  return <QuestionsContext.Provider value={{questions, setQuestions}}>{children}</QuestionsContext.Provider>;
}

export { QuestionsContext };

export default QuestionsProvider;
