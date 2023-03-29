import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import axiosInstance from '../utils/axiosInstance';

export const QuizContext = createContext();

// const quizzes = [
//   {
//     question: 'Chennakeshab Temple is located in …………',
//     opt1: 'Konark',
//     opt2: 'Puri',
//     opt3: 'Belur',
//     ans: 'opt3',
//   },
//   {
//     question: 'Ozone layer is found in ……',
//     opt1: 'Troposphere',
//     opt2: 'Stratosphere',
//     opt3: 'Thermosphere',
//     ans: 'opt2',
//   },
//   {
//     question: 'The Second World War fought between …',
//     opt1: '1939 and 1945',
//     opt2: '1935 and 1942',
//     opt3: '1937 and 1944',
//     ans: 'opt1',
//   },
//   {
//     question: 'In reference to American war of Independence, who among the following had issued the ‘Declaration of Independence?’',
//     opt1: 'Thomas Jafferson',
//     opt2: 'George Washington',
//     opt3: 'Abraham Lincoln',
//     ans: 'opt1',
//   },
//   {
//     question: 'Who among the following was the first Indian who passed Indian Civil Services (ICS)?',
//     opt1: 'Surendra Nath Banerjee',
//     opt2: 'Subhash Chandra Bose',
//     opt3: 'Dr. Sachchida Nand Sinha',
//     ans: 'opt1',
//   },
// ];

export function QuizHolder(props) {
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [theme, setTheme] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loadQuiz = useCallback(
    async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get('quiz');
        setQuiz(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const value = useMemo(() =>
    (
      {
        correct,
        setCorrect,
        score,
        setScore,
        quiz,
        loadQuiz,
        theme,
        setTheme,
        error,
        loading,

      }
    ), [
    correct,
    score,
    quiz,
    theme,
    error,
    loading,
  ]);
  return (
    <QuizContext.Provider value={value}>
      {props.children}
    </QuizContext.Provider>
  );
}
