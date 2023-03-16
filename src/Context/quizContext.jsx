import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const quizzes = [
  {
    question: 'Chennakeshab Temple is located in …………',
    opt1: 'Konark',
    opt2: 'Puri',
    opt3: 'Belur',
    ans: 'opt3',
  },
  {
    question: 'Ozone layer is found in ……',
    opt1: 'Troposphere',
    opt2: 'Stratosphere',
    opt3: 'Thermosphere',
    ans: 'opt2',
  },
  {
    question: 'The Second World War fought between …',
    opt1: '1939 and 1945',
    opt2: '1935 and 1942',
    opt3: '1937 and 1944',
    ans: 'opt1',
  },
  {
    question: 'In reference to American war of Independence, who among the following had issued the ‘Declaration of Independence?’',
    opt1: 'Thomas Jafferson',
    opt2: 'George Washington',
    opt3: 'Abraham Lincoln',
    ans: 'opt1',
  },
  {
    question: 'Who among the following was the first Indian who passed Indian Civil Services (ICS)?',
    opt1: 'Surendra Nath Banerjee',
    opt2: 'Subhash Chandra Bose',
    opt3: 'Dr. Sachchida Nand Sinha',
    ans: 'Surendra Nath Banerjee',
  },
];

export function QuizHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider value={
      {
        start, exit, setStart, setExit, quizzes, correct, setCorrect,
      }
    }
    >
      {props.children}
    </QuizContext.Provider>
  );
}
