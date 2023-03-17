import React, { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { QuizContext } from '../Context/quizContext';

function Start() {
  const { setStart, start } = useContext(QuizContext);

  if (start === true) {
    return <Navigate to="/quiz" />;
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Link to="quiz">
          <button type="button" onClick={(() => setStart(true))} className="bg-black text-white px-6 py-2 rounded-md">start</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Start;
