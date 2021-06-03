//Core
import React from 'react';
import { Router } from 'react-router-dom';
import { history } from '../navigation/history'

//Tools
import { Routes } from '../navigation'

export const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}
