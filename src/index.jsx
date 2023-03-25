import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QuizHolder } from './Context/quizContext';
import './style.scss';
// eslint-disable-next-line import/extensions
// import Test from './Test.jsx';

const container = document.getElementById('root');

const root = createRoot(container);

// Test.getDerivedStateFromProps = (props, state) => {};

root.render(
  <App />,
);
