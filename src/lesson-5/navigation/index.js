// Core
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Tools
import { book } from './book';

// Pages
import { StudentRegistration } from '../pages'

export const Routes = () => {
  return (
    <Switch>
      <Route path={book.registration}>
        <StudentRegistration />
      </Route>

      <Redirect to={book.registration}/>
    </Switch>
  )
}
