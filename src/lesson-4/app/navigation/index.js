//Core
import React from 'react';
import { Route, Switch } from 'react-router';

//Tools
import { book } from '../navigation/book';
import { Contacts } from '../pages/contacts';
import { Secret } from '../pages/secret';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={book.contacts}>
        <Contacts />
      </Route>
      <Route exact path={book.secret}>
        <Secret />
      </Route>
    </Switch>
  );
};
