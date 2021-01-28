import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import Cookies from 'js-cookie';
import rootReducer from './slices';
import App from './components/App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb)
  }
`;

const app = () => {
  /* eslint-disable no-underscore-dangle */
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  const devtoolMiddleware = ext && ext();
  /* eslint-enable */

  // const ratesData = Cookies.getJSON('rates') ?? getRates();
  // Cookies.set('rates', ratesData);
  const store = configureStore({ reducer: rootReducer, devtoolMiddleware });

  render(
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>,
    document.getElementById('root'),
  );
};

export default app;
