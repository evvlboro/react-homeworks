// Core
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Routes
import { Routes } from './navigation';

// Other
import { history } from './navigation/history';
import { store } from './init/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};
