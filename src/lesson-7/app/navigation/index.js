// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import { book } from './books';

// Pages
import { People } from '../bus/people';
import { Person } from '../bus/person';
import { Films } from '../bus/films';
import { Film } from '../bus/film';
import { Home } from '../bus/home';

export const Routes = () => (
  <Switch>

    <Route exact path={book.root}>
      <Home />
    </Route>
    <Route exact path={book.people}>
      <People />
    </Route>
    <Route
      path={`${book.people}/:id`}
      render={({ match }) => {
        return <Person id={match.params.id} />
      }}
    />
    <Route exact path={book.films}>
      <Films />
    </Route>
    <Route
      path={`${book.films}/:id`}
      render={({ match }) => {
        return <Film id={match.params.id} />
      }}
    />
  </Switch>
);
