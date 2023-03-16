import React, { useContext } from 'react';
import Quiz from './Components/quiz';
import Result from './Components/result';
import Start from './Components/start';
import { QuizContext } from './Context/quizContext';

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
  <>
    {
      exit === false ? (
        <>
          {
            start === true ?
            <Quiz />
             : <Start />
          }
        </>
      ) :
        <Result />
    }
  </>
  );
}
export default App;
