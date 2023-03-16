import React, { useContext } from 'react'
import { QuizContext } from '../Context/quizContext';

export default function Result() {
  const { correct } = useContext(QuizContext);
  return (
    <div>
      {`Result: ${correct}`}
    </div>
  );
}
