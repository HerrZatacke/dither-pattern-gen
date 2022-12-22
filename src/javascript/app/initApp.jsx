import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const initApp = () => {
  const appRoot = document.querySelector('div');
  if (!appRoot) {
    return;
  }

  render(<App />, appRoot);
};

export default initApp;
