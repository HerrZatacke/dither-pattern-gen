import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import getStore from './store';
import getImageData from './components/FileInput/getImageData';
import { SET_IMAGE_DATA } from './store/actions';

const initApp = () => {
  const appRoot = document.querySelector('div');
  if (!appRoot) {
    return;
  }

  const root = createRoot(appRoot);
  const store = getStore();
  root.render(<Provider store={store}><App /></Provider>);

  const fetchData = async () => {
    const res = await fetch('./gradient.png');
    const blob = await res.blob();
    const imageData = await getImageData(blob);
    store.dispatch({
      type: SET_IMAGE_DATA,
      payload: imageData,
    });
  };

  fetchData();

};

export default initApp;
