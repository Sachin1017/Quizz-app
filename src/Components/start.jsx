import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="
    bg-gradient-to-tr from-purple-300 via-pink-400 to-cyan-300
    w-full h-screen flex justify-between items-center"
    >
      <div className="w-[3%] h-screen bg-green-400" />
      <div className="w-[90%] flex flex-col gap-8 items-start">
        <button
          type="button"
          onClick={(() => {
            navigate('quiz', { replace: true });
          })}
          className="flex flex-row w-[15%] items-center gap-4 rounded-md text-white lg:text-3xl md:text-2xl sm:text-sm font-bold"
        >
          <div className="bg-green-400 rounded-md px-4 py-2">QUIZ</div>
          <div>FLOW</div>
        </button>
        <div className="animate-pulse h-2 rounded-md w-[80%] bg-gradient-to-r from-green-400 to-transparent" />
      </div>
    </div>
  );
}

export default Start;
