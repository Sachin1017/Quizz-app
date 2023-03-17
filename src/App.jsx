import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './Components/quiz';
import Result from './Components/result';
import Start from './Components/start';
import { QuizContext, QuizHolder } from './Context/quizContext';
import DashboardLayout from './layouts/dashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
    ],
  },
  {
    path: '/result',
    element: <Result />,
  },
]);
function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <QuizHolder>
      <RouterProvider router={router} />
    </QuizHolder>
  );
}
export default App;
