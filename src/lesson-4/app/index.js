//Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import { Links } from './components/links';

//Tools
import { Routes } from './navigation'

export const App = () => {
  return (
    <Router>
      <Links />
      <Routes />
    </Router>
  )
}
