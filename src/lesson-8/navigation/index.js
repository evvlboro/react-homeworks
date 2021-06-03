// Core
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Tools
import { book } from './book';

// Components
import { Registration } from '../bus/student';
import { Profile } from '../bus/Profile';

export const Routes = () => {
  return (
    <Switch>
      <Route path={book.registration}>
        <Registration />
      </Route>

      <Route path={book.student}>
        <Profile />
      </Route>

      <Redirect to={book.registration} />
    </Switch>
  )
}
