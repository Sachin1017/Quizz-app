import React, { useContext } from 'react';
import { QuizContext } from '../Context/quizContext';

function Start() {
  const { setStart } = useContext(QuizContext);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button type="button" onClick={(() => setStart(true))} className="bg-black text-white px-6 py-2 rounded-md">start</button>
    </div>
  );
}

export default Start;
