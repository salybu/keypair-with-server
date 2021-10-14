import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer, { rootSaga } from 'modules';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import App from './App';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: { history: history },
});

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
