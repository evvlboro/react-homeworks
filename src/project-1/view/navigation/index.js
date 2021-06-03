// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import { book } from './books';

// Pages
import { Main } from '../pages'

export const Routes = () => (
  <Switch>
    <Route exact path={book.weather}>
      <Main />
    </Route>

    <Redirect to={book.weather}></Redirect>
  </Switch>
);
