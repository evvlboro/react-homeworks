// Core
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Tools
import { Routes } from '../navigation'
import { history } from '../navigation/history'
import { store } from '../init/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}
