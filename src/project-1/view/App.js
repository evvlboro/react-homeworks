// Core
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'moment/locale/ru';

// Init
import { store } from '../init/store';
import { history } from './navigation/history';

// Routes
import { Routes } from './navigation';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
          <Routes />
      </Router>
    </Provider>
  );
};
