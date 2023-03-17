import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { Link, Outlet } from 'react-router-dom';
import { QuizContext } from '../Context/quizContext';
import ProgressBar from './progressBar';
import '../style.scss';

export default function Quiz() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-orange-50">
      <Box current={current} next={setCurrent} />
    </div>
  );
}

function Box({ current, next }) {
  const {
    quizzes, correct, setCorrect, setExit, score, setScore, setStart,
  } = useContext(QuizContext);
  const [ans, setAns] = useState('');
  const [progress, setProgress] = useState(100 / quizzes.length);
  const saveNext = () => {
    if (quizzes[current].ans === ans) {
      setCorrect(correct + 1);
      setScore(score + 20);
    }
    setAns('');
    if ((current + 1) === quizzes.length) {
      setExit(true);
    } else {
      next(current + 1);
      setProgress(progress + (100 / quizzes.length));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen justify-between">
        <div className="flex items-center justify-between w-full px-10 py-8 ">
          <div className="flex px-4 py-1 bg-slate-100 rounded-md">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.727295" y="0.363647" width="22.2727" height="22.2727" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_15_59" transform="translate(-0.00818182) scale(0.02)" />
                </pattern>
                <image id="image0_15_59" width="169" height="50" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>
            <p>200</p>
          </div>
          <div className="text-2xl font-bold">
            <p>Fantasy Quiz #156</p>
          </div>
          <button type="button" onClick={() => setStart(false)} className="bg-slate-100 p-2 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9582 8.99996L16.9304 3.04163C17.192 2.7801 17.3389 2.42538 17.3389 2.05552C17.3389 1.68566 17.192 1.33094 16.9304 1.06941C16.6689 0.807877 16.3142 0.66095 15.9443 0.66095C15.5745 0.66095 15.2198 0.807877 14.9582 1.06941L8.99989 7.04163L3.04156 1.06941C2.78003 0.807877 2.42531 0.66095 2.05545 0.66095C1.68559 0.66095 1.33087 0.807877 1.06934 1.06941C0.807806 1.33094 0.660879 1.68566 0.660879 2.05552C0.660879 2.42538 0.807806 2.7801 1.06934 3.04163L7.04156 8.99996L1.06934 14.9583C0.939161 15.0874 0.835836 15.241 0.765324 15.4103C0.694812 15.5795 0.658508 15.7611 0.658508 15.9444C0.658508 16.1278 0.694812 16.3093 0.765324 16.4785C0.835836 16.6478 0.939161 16.8014 1.06934 16.9305C1.19845 17.0607 1.35207 17.164 1.52132 17.2345C1.69056 17.305 1.8721 17.3414 2.05545 17.3414C2.2388 17.3414 2.42034 17.305 2.58958 17.2345C2.75883 17.164 2.91245 17.0607 3.04156 16.9305L8.99989 10.9583L14.9582 16.9305C15.0873 17.0607 15.241 17.164 15.4102 17.2345C15.5795 17.305 15.761 17.3414 15.9443 17.3414C16.1277 17.3414 16.3092 17.305 16.4785 17.2345C16.6477 17.164 16.8013 17.0607 16.9304 16.9305C17.0606 16.8014 17.164 16.6478 17.2345 16.4785C17.305 16.3093 17.3413 16.1278 17.3413 15.9444C17.3413 15.7611 17.305 15.5795 17.2345 15.4103C17.164 15.241 17.0606 15.0874 16.9304 14.9583L10.9582 8.99996Z" fill="black" />
            </svg>

          </button>
        </div>
        <div className="w-[50%] rounded-md overflow-hidden">
          <div className="px-8  mb-8 text-3xl font-bold text-blue-900">{quizzes[current].question}</div>
          <div className="grid grid-flow-row mt-3 items-center">
            <button
              type="button"
              className={clsx('btn--default bg-white', {
                'btn--active': ans === 'opt1',
              })}
              onClick={() => setAns('opt1')}
            >
              <p className="px-3 py-1 rounded-full mr-6 bg-orange-50">
                {(ans === 'opt1' ? (
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.71 1.21C14.617 1.11627 14.5064 1.04188 14.3846 0.991107C14.2627 0.940338 14.132 0.9142 14 0.9142C13.868 0.9142 13.7373 0.940338 13.6154 0.991107C13.4936 1.04188 13.383 1.11627 13.29 1.21L5.84 8.67L2.71 5.53C2.61347 5.43676 2.49953 5.36345 2.37468 5.31424C2.24982 5.26504 2.1165 5.24091 1.98232 5.24323C1.84814 5.24555 1.71573 5.27428 1.59265 5.32777C1.46957 5.38126 1.35823 5.45848 1.265 5.555C1.17176 5.65152 1.09844 5.76546 1.04924 5.89032C1.00004 6.01517 0.975905 6.1485 0.978226 6.28268C0.980548 6.41686 1.00928 6.54927 1.06277 6.67234C1.11626 6.79542 1.19347 6.90676 1.29 7L5.13 10.84C5.22296 10.9337 5.33356 11.0081 5.45542 11.0589C5.57728 11.1097 5.70798 11.1358 5.84 11.1358C5.97201 11.1358 6.10271 11.1097 6.22457 11.0589C6.34643 11.0081 6.45703 10.9337 6.55 10.84L14.71 2.68C14.8115 2.58636 14.8925 2.4727 14.9479 2.3462C15.0033 2.21971 15.0319 2.0831 15.0319 1.945C15.0319 1.8069 15.0033 1.67029 14.9479 1.54379C14.8925 1.41729 14.8115 1.30364 14.71 1.21Z" fill="#31CD63" />
                  </svg>

                ) : (
                  'A'
                ))}
              </p>
              <p>{quizzes[current].opt1}</p>
            </button>
            <button
              type="button"
              className={clsx('btn--default bg-white', {
                'btn--active': ans === 'opt2',
              })}
              onClick={() => setAns('opt2')}
            >
              <p className="px-3 py-2 rounded-full mr-6 bg-orange-50">
                {(ans === 'opt2' ? (
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.71 1.21C14.617 1.11627 14.5064 1.04188 14.3846 0.991107C14.2627 0.940338 14.132 0.9142 14 0.9142C13.868 0.9142 13.7373 0.940338 13.6154 0.991107C13.4936 1.04188 13.383 1.11627 13.29 1.21L5.84 8.67L2.71 5.53C2.61347 5.43676 2.49953 5.36345 2.37468 5.31424C2.24982 5.26504 2.1165 5.24091 1.98232 5.24323C1.84814 5.24555 1.71573 5.27428 1.59265 5.32777C1.46957 5.38126 1.35823 5.45848 1.265 5.555C1.17176 5.65152 1.09844 5.76546 1.04924 5.89032C1.00004 6.01517 0.975905 6.1485 0.978226 6.28268C0.980548 6.41686 1.00928 6.54927 1.06277 6.67234C1.11626 6.79542 1.19347 6.90676 1.29 7L5.13 10.84C5.22296 10.9337 5.33356 11.0081 5.45542 11.0589C5.57728 11.1097 5.70798 11.1358 5.84 11.1358C5.97201 11.1358 6.10271 11.1097 6.22457 11.0589C6.34643 11.0081 6.45703 10.9337 6.55 10.84L14.71 2.68C14.8115 2.58636 14.8925 2.4727 14.9479 2.3462C15.0033 2.21971 15.0319 2.0831 15.0319 1.945C15.0319 1.8069 15.0033 1.67029 14.9479 1.54379C14.8925 1.41729 14.8115 1.30364 14.71 1.21Z" fill="#31CD63" />
                  </svg>

                ) : (
                  'B'
                ))}

              </p>
              <p>{quizzes[current].opt2}</p>
            </button>
            <button
              type="button"
              className={clsx('btn--default bg-white', {
                'btn--active': ans === 'opt3',
              })}
              onClick={() => setAns('opt3')}
            >
              <p className="px-3 py-1 rounded-full mr-6 bg-orange-50">
                {(ans === 'opt3' ? (
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.71 1.21C14.617 1.11627 14.5064 1.04188 14.3846 0.991107C14.2627 0.940338 14.132 0.9142 14 0.9142C13.868 0.9142 13.7373 0.940338 13.6154 0.991107C13.4936 1.04188 13.383 1.11627 13.29 1.21L5.84 8.67L2.71 5.53C2.61347 5.43676 2.49953 5.36345 2.37468 5.31424C2.24982 5.26504 2.1165 5.24091 1.98232 5.24323C1.84814 5.24555 1.71573 5.27428 1.59265 5.32777C1.46957 5.38126 1.35823 5.45848 1.265 5.555C1.17176 5.65152 1.09844 5.76546 1.04924 5.89032C1.00004 6.01517 0.975905 6.1485 0.978226 6.28268C0.980548 6.41686 1.00928 6.54927 1.06277 6.67234C1.11626 6.79542 1.19347 6.90676 1.29 7L5.13 10.84C5.22296 10.9337 5.33356 11.0081 5.45542 11.0589C5.57728 11.1097 5.70798 11.1358 5.84 11.1358C5.97201 11.1358 6.10271 11.1097 6.22457 11.0589C6.34643 11.0081 6.45703 10.9337 6.55 10.84L14.71 2.68C14.8115 2.58636 14.8925 2.4727 14.9479 2.3462C15.0033 2.21971 15.0319 2.0831 15.0319 1.945C15.0319 1.8069 15.0033 1.67029 14.9479 1.54379C14.8925 1.41729 14.8115 1.30364 14.71 1.21Z" fill="#31CD63" />
                  </svg>

                ) : (
                  'C'
                ))}

              </p>
              <p>{quizzes[current].opt3}</p>
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between bg-white">
          <div className="flex items-center justify-center w-[50%]">
            <ProgressBar progress={progress} />
            <p>
              {current + 1}
              /
              {quizzes.length}
            </p>
          </div>
          <div className="flex w-[50%] items-center justify-center">
            {(
            current + 1 === quizzes.length ? (
              <Link to="/result">
                <button
                  disabled={ans === ''}
                  type="button"
                  className={clsx('bt--default px-8', {
                    'bt--active': ans !== '',
                  })}
                  onClick={saveNext}
                >
                  finish
                </button>
              </Link>
            ) : (
              <button
                disabled={ans === ''}
                type="button"
                className={clsx('bt--default', {
                  'bt--active': ans !== '',
                })}
                onClick={saveNext}
              >
                continue
              </button>
            )
          )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
